import React, { useState } from "react";
import {
  Box,
  IconButton,
  Tooltip,
  Badge,
  Divider,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Activity,
  MessageCircle,
  Calendar,
  Phone,
  Users,
  FolderOpen,
  MoreHorizontal,
  Plus,
  Settings,
  Eye,
  RotateCcw,
  Info,
} from "lucide-react";
import { styled } from "@mui/material/styles";
import { useMenu } from "../context/MenuContext";
import { useMenuItems, useMenuStats } from "../hooks/useMenuItems";
import MenuConfigDialog from "./MenuConfigDialog";

const RAIL_WIDTH = 68;

const RailContainer = styled(Box)(({ theme }) => ({
  width: RAIL_WIDTH,
  height: "calc(100vh - 48px)",
  backgroundColor: "rgb(235, 235, 235)",
  borderRight: "1px solid rgba(0, 0, 0, 0.06)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(1, 0),
  marginTop: theme.spacing(1),
  position: "sticky",
  top: 48,
  zIndex: theme.zIndex.drawer + 1,
  fontFamily:
    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
  [theme.breakpoints.down("md")]: {
    height: "100%",
    position: "relative",
    top: 0,
    marginTop: 0,
  },
}));

const RailButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
  width: 48,
  height: 56,
  margin: theme.spacing(0.125, 0),
  borderRadius: active ? 0 : 8,
  backgroundColor: "rgba(0, 0, 0, 0)",
  color: active ? "rgb(91, 95, 199)" : "rgb(36, 36, 36)",
  border: "none",
  borderLeft: active ? "3px solid rgb(91, 95, 199)" : "3px solid transparent",
  position: "relative",
  flexDirection: "column",
  fontSize: "10px",
  fontWeight: 400,
  textTransform: "none",
  lineHeight: 1.2,
  gap: 1,
  fontFamily:
    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
  touchAction: "none",
  userSelect: "none",
  textAlign: "center",
  transition:
    "background 0.1s cubic-bezier(0.33, 0, 0.67, 1), border 0.1s cubic-bezier(0.33, 0, 0.67, 1), color 0.1s cubic-bezier(0.33, 0, 0.67, 1)",

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: 0,
  },
}));

// Removed static railItems - now using dynamic menu items from useMenuItems hook

interface TeamsIconRailProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export default function TeamsIconRail({
  activeSection,
  onSectionChange,
}: TeamsIconRailProps) {
  const { isOpen } = useMenu();
  const {
    menuItems,
    enabledMenuItems,
    updateMenuItems,
    resetToDefaults,
    hasCustomConfiguration,
  } = useMenuItems();
  const menuStats = useMenuStats(menuItems);

  // Maximum items to show in main rail
  const MAX_VISIBLE_ITEMS = 6;
  const visibleItems = enabledMenuItems.slice(0, MAX_VISIBLE_ITEMS);
  const overflowItems = enabledMenuItems.slice(MAX_VISIBLE_ITEMS);
  const hasOverflowItems = overflowItems.length > 0;

  // Menu configuration dialog state
  const [configDialogOpen, setConfigDialogOpen] = useState(false);
  const [moreMenuAnchor, setMoreMenuAnchor] = useState<null | HTMLElement>(
    null,
  );
  const moreMenuOpen = Boolean(moreMenuAnchor);

  const handleMoreMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMoreMenuAnchor(event.currentTarget);
  };

  const handleMoreMenuClose = () => {
    setMoreMenuAnchor(null);
  };

  const handleOpenConfigDialog = () => {
    setConfigDialogOpen(true);
    handleMoreMenuClose();
  };

  const handleCloseConfigDialog = () => {
    setConfigDialogOpen(false);
  };

  const handleSaveMenuConfig = (updatedItems: any) => {
    updateMenuItems(updatedItems);
  };

  const handleResetToDefaults = () => {
    resetToDefaults();
    handleMoreMenuClose();
  };

  const handleOverflowItemClick = (itemId: string) => {
    onSectionChange(itemId);
    handleMoreMenuClose();
  };

  return (
    <RailContainer>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 0,
          alignItems: "center",
          width: "100%",
        }}
      >
        {visibleItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <Box
              key={item.id}
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
              role="none"
              aria-label={item.label}
            >
              <Badge
                badgeContent={item.badge}
                color="error"
                overlap="circular"
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: "0.625rem",
                    height: 16,
                    minWidth: 16,
                    right: 8,
                    top: 8,
                    backgroundColor: "rgb(204, 65, 37)",
                    color: "white",
                    fontWeight: 600,
                  },
                }}
              >
                <RailButton
                  active={activeSection === item.id}
                  onClick={() => onSectionChange(item.id)}
                  aria-label={item.label}
                  aria-pressed={activeSection === item.id ? "true" : "false"}
                  role="button"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 0.5,
                    fontSize: "10px",
                    textTransform: "none",
                    maxWidth: "68px",
                    minHeight: "56px",
                    minWidth: "68px",
                    overflowX: "hidden",
                    overflowY: "hidden",
                    paddingBottom: "1px",
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    verticalAlign: "middle",
                    width: "68px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      height: "56px",
                      width: "68px",
                      pointerEvents: "none",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      <IconComponent size={24} />
                    </Box>
                    <Box
                      sx={{
                        fontSize: "10px",
                        lineHeight: "14px",
                        textAlign: "center",
                        width: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: 60,
                        marginLeft: "7px",
                        marginRight: "7px",
                        alignItems: "center",
                        color:
                          activeSection === item.id
                            ? "rgb(91, 95, 199)"
                            : "rgb(97, 97, 97)",
                        pointerEvents: "none",
                      }}
                    >
                      {item.label}
                    </Box>
                  </Box>
                </RailButton>
              </Badge>
            </Box>
          );
        })}

        <Divider
          sx={{ width: 32, my: 1, backgroundColor: "rgb(209, 209, 209)" }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Tooltip
            title={
              hasOverflowItems
                ? `More apps (${overflowItems.length})`
                : "Menu Settings"
            }
          >
            <RailButton
              onClick={handleMoreMenuClick}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 0.5,
                fontSize: "10px",
                textTransform: "none",
                maxWidth: "32px",
                minWidth: "68px",
                overflowX: "hidden",
                overflowY: "hidden",
                paddingBottom: "5px",
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                verticalAlign: "middle",
                width: "68px",
              }}
              aria-haspopup="menu"
              aria-label={
                hasOverflowItems
                  ? `More apps (${overflowItems.length})`
                  : "Menu settings"
              }
              aria-expanded={moreMenuOpen ? "true" : undefined}
              tabIndex={0}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  height: "56px",
                  width: "68px",
                  pointerEvents: "none",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <MoreHorizontal size={24} />
                </Box>
                <Box
                  sx={{
                    fontSize: "10px",
                    lineHeight: "14px",
                    textAlign: "center",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    maxWidth: 60,
                    marginLeft: "7px",
                    marginRight: "7px",
                    alignItems: "center",
                    color: "rgb(97, 97, 97)",
                    pointerEvents: "none",
                  }}
                >
                  {hasOverflowItems ? "More" : "Settings"}
                </Box>
              </Box>
            </RailButton>
          </Tooltip>

          <RailButton
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 0.5,
              fontSize: "10px",
              textTransform: "none",
              maxWidth: "68px",
              minHeight: "56px",
              minWidth: "68px",
              overflowX: "hidden",
              overflowY: "hidden",
              paddingBottom: "1px",
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              verticalAlign: "middle",
              width: "68px",
            }}
            aria-label="Apps"
            aria-pressed="false"
            role="button"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "56px",
                width: "68px",
                pointerEvents: "none",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Plus size={24} />
              </Box>
              <Box
                sx={{
                  fontSize: "10px",
                  lineHeight: "14px",
                  textAlign: "center",
                  width: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: 60,
                  marginLeft: "7px",
                  marginRight: "7px",
                  alignItems: "center",
                  color: "rgb(97, 97, 97)",
                  pointerEvents: "none",
                }}
              >
                Apps
              </Box>
            </Box>
          </RailButton>
        </Box>
      </Box>

      {/* User Avatar at bottom */}
      <Box sx={{ marginTop: "auto", marginBottom: 1 }}>
        <IconButton sx={{ position: "relative" }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              fontSize: "12px",
              fontWeight: "bold",
              backgroundColor: "rgb(230, 230, 230)",
              color: "rgb(97, 97, 97)",
            }}
          >
            TL
          </Avatar>
          {/* Status indicator */}
          <Box
            sx={{
              position: "absolute",
              bottom: 2,
              right: 2,
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#92c353",
              border: "2px solid white",
            }}
          />
        </IconButton>
      </Box>

      {/* Menu Configuration Context Menu */}
      <Menu
        anchorEl={moreMenuAnchor}
        open={moreMenuOpen}
        onClose={handleMoreMenuClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        PaperProps={{
          sx: {
            width: 280,
            maxHeight: 400,
          },
        }}
      >
        <Box sx={{ px: 2, py: 1, borderBottom: 1, borderColor: "divider" }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            Menu Configuration
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {menuStats.enabledItems} of {menuStats.totalItems} items enabled
          </Typography>
        </Box>

        <MenuItem onClick={handleOpenConfigDialog}>
          <ListItemIcon>
            <Settings size={20} />
          </ListItemIcon>
          <ListItemText
            primary="Configure Menu"
            secondary="Customize visible menu items"
          />
        </MenuItem>

        <MenuItem onClick={() => {}}>
          <ListItemIcon>
            <Eye size={20} />
          </ListItemIcon>
          <ListItemText
            primary="Preview Changes"
            secondary="See how your menu looks"
          />
        </MenuItem>

        <Divider />

        <MenuItem
          onClick={handleResetToDefaults}
          disabled={!hasCustomConfiguration}
        >
          <ListItemIcon>
            <RotateCcw size={20} />
          </ListItemIcon>
          <ListItemText
            primary="Reset to Defaults"
            secondary="Restore original menu layout"
          />
        </MenuItem>

        <Box sx={{ px: 2, py: 1, borderTop: 1, borderColor: "divider" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
            <Info size={14} />
            <Typography variant="caption" color="text.secondary">
              Menu Statistics
            </Typography>
          </Box>
          <Typography variant="caption" display="block" color="text.secondary">
            • Core items: {menuStats.coreItems}
          </Typography>
          <Typography variant="caption" display="block" color="text.secondary">
            • Custom items: {menuStats.enabledCustomItems}/
            {menuStats.customItems}
          </Typography>
          <Typography variant="caption" display="block" color="text.secondary">
            • Coverage: {menuStats.enabledPercentage}%
          </Typography>
        </Box>
      </Menu>

      {/* Menu Configuration Dialog */}
      <MenuConfigDialog
        open={configDialogOpen}
        onClose={handleCloseConfigDialog}
        menuItems={menuItems}
        onSave={handleSaveMenuConfig}
      />
    </RailContainer>
  );
}
