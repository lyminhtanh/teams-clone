import * as React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import { alpha, useTheme } from "@mui/material/styles";
import { useMediaQuery, Drawer, IconButton, Backdrop } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { ChartNoAxesGantt } from "lucide-react";
import TeamsHeader from "./components/TeamsHeader";
import TeamsSidebar from "./components/TeamsSidebar";
import ChatActionBar from "./components/ChatActionBar";
import TeamsCalendarView from "./views/TeamsCalendarView";
import TeamsActivityView from "./views/TeamsActivityView";
import { MenuProvider } from "./context/MenuContext";
import "./styles/teamsEnhanced.css";
import "./styles/teamsExact.css";

interface TeamsDashboardProps {
  themeComponents?: any;
}

export default function TeamsDashboard({
  themeComponents,
}: TeamsDashboardProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <MenuProvider>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        {/* Teams Header */}
        <TeamsHeader
          isMobile={isMobile}
          onMobileMenuToggle={handleMobileMenuToggle}
        />

        {/* Main Layout */}
        <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
          {/* Desktop Sidebar */}
          {!isMobile && <TeamsSidebar />}

          {/* Mobile Floating Sidebar */}
          {isMobile && (
            <>
              <Backdrop
                open={mobileMenuOpen}
                onClick={handleMobileMenuClose}
                sx={{ zIndex: theme.zIndex.drawer - 1 }}
              />
              <Drawer
                anchor="left"
                open={mobileMenuOpen}
                onClose={handleMobileMenuClose}
                variant="temporary"
                sx={{
                  "& .MuiDrawer-paper": {
                    top: "48px",
                    height: "calc(100vh - 48px)",
                    width: "auto",
                    border: "none",
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <TeamsSidebar onMobileClose={handleMobileMenuClose} />
              </Drawer>
            </>
          )}

          {/* Main content */}
          <Box
            component="main"
            sx={(theme) => ({
              flexGrow: 1,
              backgroundColor: theme.vars
                ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                : alpha(theme.palette.background.default, 1),
              overflow: "auto",
              transition: theme.transitions.create(["margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
              marginTop: "15px",
              width: isMobile ? "100vw" : "auto",
              maxWidth: isMobile ? "100vw" : "none",
              height: isMobile ? "calc(100vh - 48px)" : "auto",
            })}
          >
            <Routes>
              <Route
                index
                element={
                  <Stack
                    spacing={2}
                    sx={{
                      alignItems: "center",
                      mx: 3,
                      pb: 5,
                      pt: 2,
                    }}
                  >
                    <TeamsActivityView />
                  </Stack>
                }
              />
              <Route
                path="activity"
                element={
                  <Stack
                    spacing={2}
                    sx={{
                      alignItems: "center",
                      mx: 3,
                      pb: 5,
                      pt: 2,
                    }}
                  >
                    <TeamsActivityView />
                  </Stack>
                }
              />
              <Route
                path="chat"
                element={
                  <>
                    <ChatActionBar />
                    <Stack
                      spacing={2}
                      sx={{
                        alignItems: "center",
                        mx: 3,
                        pb: 5,
                        pt: 2,
                      }}
                    >
                      <div>Chat Interface</div>
                    </Stack>
                  </>
                }
              />
              <Route
                path="calendar"
                element={
                  <Stack
                    spacing={2}
                    sx={{
                      alignItems: "center",
                      mx: 3,
                      pb: 5,
                      pt: 2,
                    }}
                  >
                    <TeamsCalendarView />
                  </Stack>
                }
              />
              <Route
                path="calls"
                element={
                  <Stack
                    spacing={2}
                    sx={{
                      alignItems: "center",
                      mx: 3,
                      pb: 5,
                      pt: 2,
                    }}
                  >
                    <div>Calls History</div>
                  </Stack>
                }
              />
              <Route
                path="customers"
                element={
                  <Stack
                    spacing={2}
                    sx={{
                      alignItems: "center",
                      mx: 3,
                      pb: 5,
                      pt: 2,
                    }}
                  >
                    <div>Customer Management</div>
                  </Stack>
                }
              />
              <Route
                path="files"
                element={
                  <Stack
                    spacing={2}
                    sx={{
                      alignItems: "center",
                      mx: 3,
                      pb: 5,
                      pt: 2,
                    }}
                  >
                    <div>File Manager</div>
                  </Stack>
                }
              />
              <Route
                path="reports"
                element={
                  <Stack
                    spacing={2}
                    sx={{
                      alignItems: "center",
                      mx: 3,
                      pb: 5,
                      pt: 2,
                    }}
                  >
                    <div>Reports</div>
                  </Stack>
                }
              />
              <Route
                path="settings"
                element={
                  <Stack
                    spacing={2}
                    sx={{
                      alignItems: "center",
                      mx: 3,
                      pb: 5,
                      pt: 2,
                    }}
                  >
                    <div>Settings</div>
                  </Stack>
                }
              />
            </Routes>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </MenuProvider>
  );
}
