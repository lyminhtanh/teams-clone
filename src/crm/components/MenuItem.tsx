import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  Badge,
  Typography,
  Chip,
} from "@mui/material";
import { ExpandMoreRounded, ChevronRightRounded } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { MenuItemProps, MenuItem as MenuItemType } from "../types/menuTypes";
import { useMenu } from "../context/MenuContext";

const StyledListItemButton = styled(ListItemButton)<{
  level: number;
  isActive: boolean;
  hasChildren: boolean;
}>(({ theme, level, isActive, hasChildren }) => ({
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(0.25),
  paddingLeft: theme.spacing(1 + level * 1.5),
  paddingRight: theme.spacing(1),
  minHeight: 32,
  backgroundColor: isActive
    ? level === 0
      ? theme.palette.primary.main
      : theme.palette.action.selected
    : "transparent",
  color:
    isActive && level === 0
      ? theme.palette.primary.contrastText
      : theme.palette.text.primary,

  "&:hover": {
    backgroundColor:
      isActive && level === 0
        ? theme.palette.primary.dark
        : theme.palette.action.hover,
  },

  "&:before":
    level === 0 && isActive
      ? {
          content: '""',
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: 2,
          height: 12,
          backgroundColor: theme.palette.primary.main,
        }
      : {},
}));

const StyledListItemIcon = styled(ListItemIcon)<{
  level: number;
  isActive: boolean;
}>(({ theme, level, isActive }) => ({
  minWidth: 24,
  marginRight: theme.spacing(1),
  color:
    isActive && level === 0
      ? theme.palette.primary.contrastText
      : theme.palette.text.secondary,

  "& .MuiSvgIcon-root": {
    fontSize: level === 0 ? "1.25rem" : "1rem",
  },
}));

const StyledListItemText = styled(ListItemText)<{
  level: number;
  isActive: boolean;
}>(({ theme, level, isActive }) => ({
  margin: 0,

  "& .MuiListItemText-primary": {
    fontSize: level === 0 ? "0.875rem" : "0.8125rem",
    fontWeight: isActive ? 600 : level === 0 ? 500 : 400,
    color:
      isActive && level === 0
        ? theme.palette.primary.contrastText
        : theme.palette.text.primary,
    lineHeight: 1.2,
  },
}));

const ExpandIcon = styled("div")<{ expanded: boolean; level: number }>(
  ({ theme, expanded, level }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shorter,
    }),
    transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
    color: level === 0 ? "inherit" : theme.palette.text.secondary,

    "& .MuiSvgIcon-root": {
      fontSize: "1rem",
    },
  }),
);

export default function MenuItemComponent({
  item,
  level = 0,
  onItemClick,
}: MenuItemProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { expandedItems, toggleExpanded, setActiveItem } = useMenu();

  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedItems.has(item.id);
  const isActive = item.path ? location.pathname === item.path : false;

  const handleClick = () => {
    if (hasChildren) {
      toggleExpanded(item.id);
    } else if (item.path) {
      navigate(item.path);
      setActiveItem(item.id);
    }

    if (item.onClick) {
      item.onClick();
    }

    if (onItemClick) {
      onItemClick(item);
    }
  };

  const renderBadge = () => {
    if (!item.badge) return null;

    return (
      <Chip
        label={item.badge}
        size="small"
        sx={{
          height: 16,
          fontSize: "0.6875rem",
          backgroundColor:
            level === 0 && isActive
              ? "rgba(255, 255, 255, 0.2)"
              : "primary.main",
          color: level === 0 && isActive ? "white" : "primary.contrastText",
          "& .MuiChip-label": {
            px: 0.75,
          },
        }}
      />
    );
  };

  return (
    <>
      <ListItem disablePadding>
        <StyledListItemButton
          level={level}
          isActive={isActive}
          hasChildren={!!hasChildren}
          onClick={handleClick}
          disabled={item.disabled}
        >
          {item.icon && (
            <StyledListItemIcon level={level} isActive={isActive}>
              {item.icon}
            </StyledListItemIcon>
          )}

          <StyledListItemText
            level={level}
            isActive={isActive}
            primary={item.label}
          />

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            {renderBadge()}

            {hasChildren && (
              <ExpandIcon expanded={isExpanded} level={level}>
                <ChevronRightRounded />
              </ExpandIcon>
            )}
          </Box>
        </StyledListItemButton>
      </ListItem>

      {hasChildren && (
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <Box>
            {item.children?.map((childItem) => (
              <MenuItemComponent
                key={childItem.id}
                item={childItem}
                level={level + 1}
                onItemClick={onItemClick}
              />
            ))}
          </Box>
        </Collapse>
      )}
    </>
  );
}
