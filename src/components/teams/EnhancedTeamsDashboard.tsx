import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  InterfaceModeProvider,
  useInterfaceMode,
} from "./context/InterfaceModeContext";
import { MenuProvider } from "./context/MenuContext";
import { logDeviceInfo } from "../../utils/deviceDetection";
import TeamsDashboard from "./TeamsDashboard";
import AndroidTeamsDashboard from "./android/AndroidTeamsDashboard";
import IOSTeamsDashboard from "./ios/IOSTeamsDashboard";
import { Badge, Box } from "@mui/material";

interface TeamsDashboardProps {
  themeComponents?: any;
}

const TeamsInterface: React.FC<TeamsDashboardProps> = ({ themeComponents }) => {
  const { activeMode, detectedMode, isCanaryActive } = useInterfaceMode();
  const location = useLocation();

  useEffect(() => {
    // Log interface selection in development
    if (process.env.NODE_ENV === "development") {
      console.group("🎯 Enhanced Teams Dashboard - Interface Selection");
      console.log("📍 Route:", location.pathname);
      console.log("🔍 Detected Mode:", detectedMode);
      console.log("🎯 Active Mode:", activeMode);
      console.log("🚩 Canary Active:", isCanaryActive);
      logDeviceInfo();
      console.groupEnd();
    }
  }, [activeMode, detectedMode, isCanaryActive, location.pathname]);

  // Render appropriate interface based on active mode
  const renderInterface = () => {
    switch (activeMode) {
      case "ios":
        return <IOSTeamsDashboard />;
      case "android":
        return <AndroidTeamsDashboard />;
      default:
        return <TeamsDashboard themeComponents={themeComponents} />;
    }
  };

  return (
    <MenuProvider>
      <Box sx={{ position: "relative", height: "100vh" }}>
        {/* Canary Flag Indicator */}
        {isCanaryActive && (
          <Badge
            badgeContent={`CANARY: ${activeMode.toUpperCase()} MODE`}
            color="warning"
            sx={{
              position: "fixed",
              top: 16,
              right: 16,
              zIndex: 9999,
              "& .MuiBadge-badge": {
                fontSize: "0.75rem",
                fontWeight: 600,
                padding: "4px 8px",
                borderRadius: "12px",
                backgroundColor: "#ff9800",
                color: "white",
                boxShadow: "0 2px 8px rgba(255, 152, 0, 0.3)",
              },
            }}
          >
            <Box sx={{ width: 1, height: 1 }} />
          </Badge>
        )}

        {/* Interface Content */}
        {renderInterface()}
      </Box>
    </MenuProvider>
  );
};

const EnhancedTeamsDashboard: React.FC<TeamsDashboardProps> = (props) => {
  return (
    <InterfaceModeProvider>
      <TeamsInterface {...props} />
    </InterfaceModeProvider>
  );
};

export default EnhancedTeamsDashboard;
