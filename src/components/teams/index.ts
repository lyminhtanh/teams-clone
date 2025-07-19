// Main Dashboard
export { default as TeamsDashboard } from "./TeamsDashboard";

// Core Components
export { default as TeamsHeader } from "./components/TeamsHeader";
export { default as TeamsSidebar } from "./components/TeamsSidebar";
export { default as TeamsSecondarySidebar } from "./components/TeamsSecondarySidebar";
export { default as TeamsIconRail } from "./components/TeamsIconRail";
export { default as ChatActionBar } from "./components/ChatActionBar";
export { default as MenuConfigDialog } from "./components/MenuConfigDialog";

// Views
export { default as TeamsActivityView } from "./views/TeamsActivityView";
export { default as TeamsCalendarView } from "./views/TeamsCalendarView";

// Context & Hooks
export { MenuProvider, useMenu } from "./context/MenuContext";
export { useMenuItems, useMenuStats } from "./hooks/useMenuItems";
export {
  useResponsiveMenu,
  useMenuWidth,
  useMenuAnimation,
} from "./hooks/useResponsiveMenu";

// Data & Types
export * from "./data/menuItems";
export * from "./types/menuTypes";

// CSS Styles (import these in your main application)
// import "components/teams/styles/teamsEnhanced.css";
// import "components/teams/styles/teamsExact.css";
