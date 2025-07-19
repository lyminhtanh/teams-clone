import React, { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import TeamsIconRail from "./TeamsIconRail";
import TeamsSecondarySidebar from "./TeamsSecondarySidebar";
import { useMenu } from "../context/MenuContext";

const SidebarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "calc(100vh - 48px)",
  position: "sticky",
  top: 48,
  zIndex: theme.zIndex.drawer,
  [theme.breakpoints.down("md")]: {
    height: "100%",
    position: "relative",
    top: 0,
  },
}));

interface TeamsSidebarProps {
  onMobileClose?: () => void;
}

export default function TeamsSidebar({
  onMobileClose,
}: TeamsSidebarProps = {}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("activity");
  const { isOpen } = useMenu();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { toggleMenu, openMenu, closeMenu } = useMenu();

  // Sync active section with current route
  useEffect(() => {
    const path = location.pathname.split("/").pop() || "activity";
    setActiveSection(path);
  }, [location.pathname]);

  const handleSectionChange = (sectionId: string) => {
    if (isMobile) {
      // Check if this section has a secondary menu
      const hasSecondaryMenu = ["chat", "customers", "deals", "files"].includes(
        sectionId,
      );

      if (hasSecondaryMenu) {
        // For sections with secondary menu, set active and keep drawer open
        setActiveSection(sectionId);
        openMenu();
        // Don't close the mobile drawer, just show secondary content
      } else {
        // For sections without secondary menu, close drawer and navigate
        onMobileClose?.();
        closeMenu();
        navigate(`/${sectionId}`);
        setActiveSection(sectionId);
      }
    } else {
      // Desktop behavior: existing logic
      if (activeSection === sectionId && isOpen) {
        // If clicking the same section and sidebar is open, close it
        setActiveSection("");
        closeMenu();
      } else {
        // Otherwise, navigate to the new section and open menu
        navigate(`/${sectionId}`);
        setActiveSection(sectionId);
        openMenu();
      }
    }
  };

  // Show secondary sidebar only for certain sections
  const showSecondarySidebar =
    ["chat", "customers", "deals", "files"].includes(activeSection) && isOpen;

  return (
    <SidebarContainer>
      // <TeamsIconRail
      //   activeSection={activeSection}
      //   onSectionChange={handleSectionChange}
      // />
      // {showSecondarySidebar && (
      //   <TeamsSecondarySidebar
      //     activeSection={activeSection}
      //     onMobileClose={onMobileClose}
      //   />
      // )}
    </SidebarContainer>
  );
}
