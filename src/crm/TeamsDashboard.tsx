import * as React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import type {} from "@mui/x-charts/themeAugmentation";
import type {} from "@mui/x-data-grid-pro/themeAugmentation";
import type {} from "@mui/x-tree-view/themeAugmentation";
import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TeamsHeader from "./components/TeamsHeader";
import TeamsSidebar from "./components/TeamsSidebar";
import ChatActionBar from "./components/ChatActionBar";
import CrmMainDashboard from "./components/CrmMainDashboard";
import TeamsCalendarView from "./components/TeamsCalendarView";
import TeamsActivityView from "./components/TeamsActivityView";
import Customers from "./pages/Customers";
import CustomersIndividual from "./pages/CustomersIndividual";
import CustomersCorporate from "./pages/CustomersCorporate";
import Deals from "./pages/Deals";
import Contacts from "./pages/Contacts";
import Tasks from "./pages/Tasks";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import AppTheme from "../shared-theme/AppTheme";
import { MenuProvider } from "./context/MenuContext";
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "../dashboard/theme/customizations";
import "./styles/teamsEnhanced.css";
import "./styles/teamsExact.css";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function TeamsDashboard() {
  return (
    <AppTheme themeComponents={xThemeComponents}>
      <MenuProvider>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          {/* Teams Header */}
          <TeamsHeader />

          {/* Main Layout */}
          <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
            {/* Teams Sidebar */}
            <TeamsSidebar />

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
              })}
            >
              <Routes>
                <Route index element={<TeamsActivityView />} />
                <Route path="activity" element={<TeamsActivityView />} />
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
                <Route path="calendar" element={<TeamsCalendarView />} />
                <Route path="calls" element={<div>Calls History</div>} />
                <Route path="customers" element={<Customers />} />
                <Route path="files" element={<div>File Manager</div>} />
                <Route path="reports" element={<Reports />} />
                <Route path="settings" element={<Settings />} />
              </Routes>
              <Outlet />
            </Box>
          </Box>
        </Box>
      </MenuProvider>
    </AppTheme>
  );
}
