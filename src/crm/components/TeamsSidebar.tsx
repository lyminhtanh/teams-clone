import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
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
}));

export default function TeamsSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("activity");
  const { isOpen } = useMenu();

  const { toggleMenu, openMenu, closeMenu } = useMenu();

  // Sync active section with current route
  useEffect(() => {
    const path = location.pathname.split("/").pop() || "activity";
    setActiveSection(path);
  }, [location.pathname]);

  const handleSectionChange = (sectionId: string) => {
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
  };

  // Show secondary sidebar only for certain sections
  const showSecondarySidebar =
    ["chat", "customers", "deals", "files"].includes(activeSection) && isOpen;

  return (
    <SidebarContainer>
      <TeamsIconRail
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      {showSecondarySidebar && (
        <TeamsSecondarySidebar activeSection={activeSection} />
      )}
    </SidebarContainer>
  );
}
