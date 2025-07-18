# Multi-Level Nested Menu System

A flexible, configurable sidebar menu system with slide animations and responsive behavior for React applications using Material-UI.

## Features

- 🎯 **Multi-level nested menus** - Support for unlimited nesting depth
- 🎨 **Smooth animations** - Slide in/out effects with staggered transitions
- 📱 **Responsive design** - Adapts to mobile, tablet, and desktop screens
- ⚙️ **JSON configuration** - Easy menu structure definition
- 🎭 **Customizable styling** - Material-UI theming support
- 🔧 **TypeScript support** - Full type safety
- ♿ **Accessibility** - ARIA compliant and keyboard navigation

## Quick Start

### 1. Basic Usage

```tsx
import { MenuProvider } from "./context/MenuContext";
import NewSideMenu from "./components/NewSideMenu";
import NewCrmHeader from "./components/NewCrmHeader";
import { menuConfig } from "./config/menuConfig";

function App() {
  return (
    <MenuProvider>
      <NewCrmHeader />
      <NewSideMenu config={menuConfig} />
      {/* Your main content */}
    </MenuProvider>
  );
}
```

### 2. Menu Configuration

Create your menu structure using the `MenuConfig` interface:

```tsx
import { MenuConfig } from "./types/menuTypes";
import { DashboardRounded, PeopleRounded } from "@mui/icons-material";

export const myMenuConfig: MenuConfig = {
  sections: [
    {
      id: "main",
      title: "Navigation",
      items: [
        {
          id: "dashboard",
          label: "Dashboard",
          icon: <DashboardRounded />,
          path: "/",
        },
        {
          id: "customers",
          label: "Customers",
          icon: <PeopleRounded />,
          badge: "24",
          children: [
            {
              id: "customers-all",
              label: "All Customers",
              path: "/customers",
            },
            {
              id: "customers-vip",
              label: "VIP Customers",
              path: "/customers/vip",
              badge: "VIP",
            },
          ],
        },
      ],
    },
  ],
};
```

## Component API

### MenuProvider

The context provider that manages menu state.

```tsx
<MenuProvider>{/* Your app components */}</MenuProvider>
```

### NewSideMenu

The main sidebar menu component.

**Props:**

- `config: MenuConfig` - Menu configuration object
- `className?: string` - Additional CSS classes

```tsx
<NewSideMenu config={menuConfig} className="custom-menu" />
```

### NewCrmHeader

The header component with menu toggle button.

```tsx
<NewCrmHeader />
```

## Menu Configuration

### MenuConfig Interface

```tsx
interface MenuConfig {
  sections: MenuSection[];
}

interface MenuSection {
  id: string;
  title?: string;
  items: MenuItem[];
  collapsible?: boolean;
  defaultCollapsed?: boolean;
}

interface MenuItem {
  id: string;
  label: string;
  icon?: ReactNode;
  path?: string;
  badge?: string | number;
  disabled?: boolean;
  children?: MenuItem[];
  section?: string;
  divider?: boolean;
  onClick?: () => void;
}
```

### Example Configurations

#### Simple Menu

```tsx
const simpleConfig: MenuConfig = {
  sections: [
    {
      id: "main",
      items: [
        { id: "home", label: "Home", path: "/" },
        { id: "about", label: "About", path: "/about" },
      ],
    },
  ],
};
```

#### Nested Menu with Badges

```tsx
const nestedConfig: MenuConfig = {
  sections: [
    {
      id: "main",
      title: "Main Navigation",
      items: [
        {
          id: "orders",
          label: "Orders",
          badge: "42",
          children: [
            {
              id: "pending",
              label: "Pending",
              path: "/orders/pending",
              badge: "15",
            },
            { id: "completed", label: "Completed", path: "/orders/completed" },
          ],
        },
      ],
    },
  ],
};
```

## Customization

### Styling

The menu system uses Material-UI's styling system. You can customize colors, spacing, and animations:

```tsx
import { styled } from "@mui/material/styles";

const CustomMenu = styled(NewSideMenu)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.primary.main,
  },
}));
```

### Animation Configuration

Animations can be customized using the CSS classes in `menuAnimations.css`:

```css
.menu-item-enter {
  opacity: 0;
  transform: translateX(-20px);
}

.menu-item-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition:
    opacity 300ms ease-in-out,
    transform 300ms ease-in-out;
}
```

### Responsive Behavior

The menu automatically adapts to different screen sizes:

- **Desktop (≥1200px)**: Persistent sidebar, full width
- **Tablet (768px-1199px)**: Persistent sidebar, medium width
- **Mobile (<768px)**: Temporary sidebar, overlay mode

## Hooks

### useMenu

Access menu state and controls:

```tsx
import { useMenu } from "./context/MenuContext";

function MyComponent() {
  const { isOpen, toggleMenu, expandedItems, activeItem } = useMenu();

  return (
    <button onClick={toggleMenu}>{isOpen ? "Close Menu" : "Open Menu"}</button>
  );
}
```

### useResponsiveMenu

Get responsive menu state:

```tsx
import { useResponsiveMenu } from "./hooks/useResponsiveMenu";

function MyComponent() {
  const { isMobile, isTablet, isDesktop } = useResponsiveMenu();

  return (
    <div>
      Current screen: {isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop"}
    </div>
  );
}
```

## Advanced Features

### Dynamic Menu Updates

You can update the menu configuration dynamically:

```tsx
const [config, setConfig] = useState(initialConfig);

// Add new menu item
const addMenuItem = (newItem: MenuItem) => {
  setConfig((prevConfig) => ({
    ...prevConfig,
    sections: prevConfig.sections.map((section) => ({
      ...section,
      items: [...section.items, newItem],
    })),
  }));
};
```

### Custom Menu Items

Create custom menu item components:

```tsx
const CustomMenuItem = ({ item, level }: MenuItemProps) => {
  return (
    <ListItemButton>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.label} />
      {item.badge && <Chip label={item.badge} size="small" />}
    </ListItemButton>
  );
};
```

### Integration with Routing

The menu integrates seamlessly with React Router:

```tsx
import { useNavigate, useLocation } from "react-router-dom";

// Menu items automatically highlight based on current route
// Navigation is handled automatically when path is provided
```

## Accessibility

The menu system includes comprehensive accessibility features:

- ARIA labels and roles
- Keyboard navigation (Tab, Enter, Arrow keys)
- Screen reader support
- Focus management
- High contrast support

## Performance

- Virtualized rendering for large menus
- Lazy loading of nested items
- Optimized animations with `will-change`
- Reduced motion support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Common Issues

**Menu not opening on mobile:**

```tsx
// Ensure MenuProvider wraps your app
<MenuProvider>
  <App />
</MenuProvider>
```

**Icons not displaying:**

```tsx
// Import Material-UI icons
import { DashboardRounded } from "@mui/icons-material";
```

**Animations not working:**

```tsx
// Import CSS animations
import "./crm/styles/menuAnimations.css";
```

## Examples

See the demo configurations in:

- `src/crm/config/menuConfig.tsx` - CRM example
- `src/crm/config/demoMenuConfig.tsx` - E-commerce example

## Contributing

When adding new features:

1. Update TypeScript interfaces
2. Add proper accessibility attributes
3. Include responsive behavior
4. Update documentation
5. Add tests for new functionality

## License

This menu system is part of the CRM dashboard project.
