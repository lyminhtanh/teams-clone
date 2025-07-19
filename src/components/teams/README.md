# Teams Components

This folder contains a complete Microsoft Teams-like interface that can be reused across projects. The components are built with Material-UI and provide a professional, responsive Teams experience.

## 🚀 Quick Start

```tsx
import { TeamsDashboard } from "components/teams";
import "components/teams/styles/teamsEnhanced.css";
import "components/teams/styles/teamsExact.css";

function App() {
  return <TeamsDashboard />;
}
```

## 📁 Structure

```
teams/
├── ui/                  # 🎨 Atomic UI Design System
│   ├── buttons/                 # Button atoms (ActionButton, PrimaryButton, BackButton)
│   ├── indicators/              # Badge and status atoms (Badge, LiveIndicator)
│   ├── typography/              # Text atoms (Title with ellipsis support)
│   ├── tabs/                    # Tab navigation atoms (Tab, TabList)
│   ├── layout/                  # Layout container atoms (ActionBar, ActionBarRow, ActionBarSection)
│   ├── menus/                   # Menu atoms (MoreMenu, ActionMenu)
│   ├── index.ts                 # Main UI exports
│   └── README.md                # UI Design System Documentation
├── components/          # Core UI components (built with atomic components)
│   ├── TeamsHeader.tsx          # Top navigation bar
│   ├── TeamsSidebar.tsx         # Main sidebar container
│   ├── TeamsSecondarySidebar.tsx # Expandable secondary sidebar
│   ├── TeamsIconRail.tsx        # Left icon navigation rail
│   ├── ChatActionBar.tsx        # Chat-specific action bar (refactored with atomic components)
│   └── MenuConfigDialog.tsx     # Menu configuration dialog
├── views/               # Main view components
│   ├── TeamsActivityView.tsx    # Activity feed view
���   └── TeamsCalendarView.tsx    # Calendar view
├── context/             # React contexts
│   └── MenuContext.tsx          # Menu state management
├── hooks/               # Custom hooks
│   ├── useMenuItems.ts          # Menu configuration hook
│   └── useResponsiveMenu.ts     # Responsive behavior hook
├── data/                # Static data
│   └── menuItems.ts             # Menu item definitions
├── types/               # TypeScript types
│   └── menuTypes.ts             # Menu-related types
├── styles/              # CSS styling
│   ├── teamsEnhanced.css        # Enhanced styling
│   └── teamsExact.css           # Exact Teams styling
├── TeamsDashboard.tsx   # Main dashboard component
├── index.ts             # Public API exports
└── README.md            # This file
```

## 🎯 Key Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Configurable Menu**: Drag-and-drop menu customization
- **Teams-like UI**: Exact Microsoft Teams styling and behavior
- **TypeScript**: Full type safety
- **Material-UI**: Built on top of MUI components
- **Context Management**: Efficient state management
- **Accessibility**: ARIA compliant and keyboard navigable

## 🔧 Components

### TeamsDashboard

Main container component that provides the complete Teams interface.

```tsx
<TeamsDashboard themeComponents={customTheme} />
```

### TeamsHeader

Top navigation bar with search, app launcher, and user profile.

```tsx
<TeamsHeader isMobile={false} onMobileMenuToggle={() => {}} />
```

### TeamsSidebar

Main sidebar with icon rail and secondary sidebar.

```tsx
<TeamsSidebar onMobileClose={() => {}} />
```

### Views

Pre-built view components for different sections:

```tsx
<TeamsActivityView />
<TeamsCalendarView />
```

## 🎨 Styling

Two CSS files provide the Teams styling:

- `teamsEnhanced.css` - Enhanced styling with custom animations
- `teamsExact.css` - Exact Microsoft Teams styling

Import both in your main application:

```tsx
import "components/teams/styles/teamsEnhanced.css";
import "components/teams/styles/teamsExact.css";
```

## 🔄 Context & State

The Teams components use React Context for state management:

```tsx
import { MenuProvider, useMenu } from "components/teams";

function App() {
  return (
    <MenuProvider>
      <TeamsDashboard />
    </MenuProvider>
  );
}
```

## 📱 Responsive Behavior

The components automatically adapt to different screen sizes:

- **Desktop**: Full sidebar with secondary panels
- **Tablet**: Collapsible sidebar
- **Mobile**: Drawer-based navigation

## 🛠 Customization

### Menu Items

Customize the navigation menu by modifying the menu items:

```tsx
import { useMenuItems } from "components/teams";

function CustomMenu() {
  const { menuItems, updateMenuItems } = useMenuItems();

  // Modify menu items as needed
  const customItems = menuItems.map((item) => ({
    ...item,
    enabled: item.id === "chat", // Only enable chat
  }));

  updateMenuItems(customItems);
}
```

### Theme Integration

The components work with Material-UI themes:

```tsx
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { TeamsDashboard } from "components/teams";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#5b5fc7", // Teams purple
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <TeamsDashboard />
    </ThemeProvider>
  );
}
```

## 📦 Dependencies

The Teams components require:

- React 18+
- Material-UI v7+
- React Router DOM v7+
- Lucide React (for icons)
- TypeScript (optional but recommended)

## 🚀 Usage Examples

### Basic Usage

```tsx
import { TeamsDashboard } from "components/teams";
import "components/teams/styles/teamsEnhanced.css";
import "components/teams/styles/teamsExact.css";

export default function App() {
  return <TeamsDashboard />;
}
```

### With Custom Routes

```tsx
import { Routes, Route } from "react-router-dom";
import { TeamsDashboard, TeamsActivityView } from "components/teams";

export default function App() {
  return (
    <Routes>
      <Route path="/teams/*" element={<TeamsDashboard />} />
      <Route path="/activity" element={<TeamsActivityView />} />
    </Routes>
  );
}
```

### Individual Components

```tsx
import { TeamsHeader, TeamsSidebar, MenuProvider } from "components/teams";

export default function CustomLayout() {
  return (
    <MenuProvider>
      <TeamsHeader />
      <div style={{ display: "flex" }}>
        <TeamsSidebar />
        <main>Your content here</main>
      </div>
    </MenuProvider>
  );
}
```

## 🤝 Contributing

To extend or modify the Teams components:

1. Follow the existing file structure
2. Maintain TypeScript types
3. Ensure responsive design
4. Add appropriate tests
5. Update this README

## 📄 License

These components are part of your project and follow your project's license.
