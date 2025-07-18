import React, { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
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
  const [activeSection, setActiveSection] = useState("dashboard");
  const { isOpen } = useMenu();

  const handleSectionChange = (sectionId: string) => {
    if (activeSection === sectionId && isOpen) {
      // If clicking the same section and sidebar is open, close it
      setActiveSection("");
    } else {
      // Otherwise, open the new section
      setActiveSection(sectionId);
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
