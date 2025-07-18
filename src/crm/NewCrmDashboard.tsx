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
import NewCrmHeader from "./components/NewCrmHeader";
import NewSideMenu from "./components/NewSideMenu";
import CrmMainDashboard from "./components/CrmMainDashboard";
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
import { menuConfig } from "./config/menuConfig";
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "../dashboard/theme/customizations";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function NewCrmDashboard() {
  return (
    <AppTheme themeComponents={xThemeComponents}>
      <MenuProvider>
        <CssBaseline enableColorScheme />
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          {/* Header */}
          <NewCrmHeader />

          {/* Main Layout */}
          <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
            {/* Sidebar */}
            <NewSideMenu config={menuConfig} />

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
              })}
            >
              <Stack
                spacing={2}
                sx={{
                  alignItems: "center",
                  mx: 3,
                  pb: 5,
                  pt: 2,
                }}
              >
                <Routes>
                  <Route index element={<CrmMainDashboard />} />
                  <Route path="customers/*" element={<Customers />} />
                  <Route
                    path="customers/individual"
                    element={<CustomersIndividual />}
                  />
                  <Route
                    path="customers/corporate"
                    element={<CustomersCorporate />}
                  />
                  <Route path="deals/*" element={<Deals />} />
                  <Route
                    path="deals/analytics"
                    element={<div>Sales Analytics Page</div>}
                  />
                  <Route
                    path="deals/forecasting"
                    element={<div>Sales Forecasting Page</div>}
                  />
                  <Route path="contacts" element={<Contacts />} />
                  <Route path="tasks/*" element={<Tasks />} />
                  <Route
                    path="tasks/calendar"
                    element={<div>Calendar Page</div>}
                  />
                  <Route
                    path="tasks/emails"
                    element={<div>Email Management Page</div>}
                  />
                  <Route
                    path="tasks/reminders"
                    element={<div>Reminders Page</div>}
                  />
                  <Route path="reports" element={<Reports />} />
                  <Route path="settings/*" element={<Settings />} />
                  <Route
                    path="settings/general"
                    element={<div>General Settings Page</div>}
                  />
                  <Route
                    path="settings/security"
                    element={<div>Security Settings Page</div>}
                  />
                  <Route
                    path="settings/billing"
                    element={<div>Billing & Plans Page</div>}
                  />
                  <Route
                    path="settings/integrations"
                    element={<div>Integrations Page</div>}
                  />
                  <Route path="help/*" element={<div>Help Section</div>} />
                  <Route
                    path="help/docs"
                    element={<div>Documentation Page</div>}
                  />
                  <Route
                    path="help/support"
                    element={<div>Contact Support Page</div>}
                  />
                  <Route
                    path="help/feedback"
                    element={<div>Send Feedback Page</div>}
                  />
                  <Route
                    path="help/bugs"
                    element={<div>Report Bug Page</div>}
                  />
                </Routes>
                <Outlet />
              </Stack>
            </Box>
          </Box>
        </Box>
      </MenuProvider>
    </AppTheme>
  );
}
