import React from "react";
import {
  Drawer,
  Box,
  List,
  Typography,
  Divider,
  Stack,
  Avatar,
  IconButton,
  Slide,
  Fade,
} from "@mui/material";
import { MoreVertRounded, PersonRounded } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useMenu } from "../context/MenuContext";
import { SideMenuProps } from "../types/menuTypes";
import MenuItemComponent from "./MenuItem";

const SIDEBAR_WIDTH = 320;
const SIDEBAR_COLLAPSED_WIDTH = 0;

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  width: isOpen ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
  flexShrink: 0,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),

  "& .MuiDrawer-paper": {
    width: isOpen ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
    boxSizing: "border-box",
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
    transition: theme.transitions.create(["width", "transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    transform: isOpen ? "translateX(0)" : `translateX(-${SIDEBAR_WIDTH}px)`,
    position: "sticky",
    top: 48, // Height of the header
    height: "calc(100vh - 48px)",
    zIndex: theme.zIndex.drawer,
    overflowX: "hidden",
  },
}));

const MenuContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: theme.spacing(1.5),
}));

const MenuSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  fontWeight: 600,
  color: theme.palette.text.secondary,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  marginBottom: theme.spacing(1),
  paddingLeft: theme.spacing(1),
}));

const UserSection = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1.5),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const UserInfo = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
}));

const ResizeHandle = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: -4,
  top: 0,
  bottom: 0,
  width: 8,
  cursor: "col-resize",
  backgroundColor: "transparent",
  borderRadius: theme.spacing(0.5),
  transition: theme.transitions.create("background-color"),

  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },

  "&:active": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default function NewSideMenu({
  config,
  width = SIDEBAR_WIDTH,
  className,
}: SideMenuProps) {
  const { isOpen } = useMenu();

  const handleMenuItemClick = (item: any) => {
    // Handle menu item clicks if needed
    console.log("Menu item clicked:", item);
  };

  const renderMenuSection = (section: any, index: number) => (
    <Fade
      key={section.id}
      in={isOpen}
      timeout={{ enter: 300 + index * 100, exit: 200 }}
      style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
    >
      <MenuSection>
        {section.title && (
          <SectionTitle variant="overline">{section.title}</SectionTitle>
        )}

        <List disablePadding>
          {section.items.map((item: any) => (
            <MenuItemComponent
              key={item.id}
              item={item}
              onItemClick={handleMenuItemClick}
            />
          ))}
        </List>

        {index < config.sections.length - 1 && (
          <Divider sx={{ mt: 2, mb: 1 }} />
        )}
      </MenuSection>
    </Fade>
  );

  return (
    <StyledDrawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      isOpen={isOpen}
      className={className}
    >
      <Slide
        direction="right"
        in={isOpen}
        timeout={{ enter: 300, exit: 200 }}
        mountOnEnter
        unmountOnExit
      >
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <MenuContent>
            <Box sx={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
              {config.sections.map((section, index) =>
                renderMenuSection(section, index),
              )}
            </Box>
          </MenuContent>

          <Fade in={isOpen} timeout={{ enter: 500, exit: 200 }}>
            <UserSection>
              <Avatar
                sx={{ width: 36, height: 36, bgcolor: "primary.main" }}
                src="/static/images/avatar/7.jpg"
              >
                <PersonRounded />
              </Avatar>

              <UserInfo>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, lineHeight: "16px" }}
                  noWrap
                >
                  Alex Thompson
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "text.secondary" }}
                  noWrap
                >
                  alex@acmecrm.com
                </Typography>
              </UserInfo>

              <IconButton size="small">
                <MoreVertRounded />
              </IconButton>
            </UserSection>
          </Fade>

          {/* Resize Handle */}
          <ResizeHandle />
        </Box>
      </Slide>
    </StyledDrawer>
  );
}
