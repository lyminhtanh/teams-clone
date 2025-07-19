# Teams UI Design System

A comprehensive collection of atomic UI components designed for Microsoft Teams-like interfaces. These components are built with React, Material-UI, and Lucide React icons, following atomic design principles.

## 🏗️ Architecture

The UI system follows **Atomic Design** methodology:

```
src/components/teams/ui/
├── buttons/           # Button atoms
├── indicators/        # Badge and status atoms
├── typography/        # Text and title atoms
├── tabs/             # Tab navigation atoms
├── layout/           # Layout container atoms
├── menus/            # Menu and dropdown atoms
└── index.ts          # Main exports
```

## 📦 Components

### 🔘 Buttons (`/buttons/`)

#### `ActionButton`

Icon button for toolbar actions with tooltip support.

```tsx
import { ActionButton } from "@/components/teams/ui";
import { Search } from "lucide-react";

<ActionButton
  icon={Search}
  label="Search in conversation"
  variant="default" // "default" | "compact"
  size="medium" // "small" | "medium" | "large"
  onClick={handleSearch}
  showTooltip={true}
  tooltipPlacement="bottom"
/>;
```

**Variants:**

- `default` - Standard action button
- `compact` - Borderless, minimal style

#### `PrimaryButton`

Main action button with Teams branding.

```tsx
<PrimaryButton
  color="teams" // "primary" | "secondary" | "teams"
  variant="contained" // "contained" | "outlined" | "text"
  size="medium" // "small" | "medium" | "large"
  onClick={handleJoin}
>
  Join Meeting
</PrimaryButton>
```

#### `BackButton`

Navigation back button with arrow icon.

```tsx
<BackButton
  onClick={handleBack}
  label="Go back"
  size="medium"
  showTooltip={true}
/>
```

### 🏷️ Indicators (`/indicators/`)

#### `Badge`

Count badges and status indicators with animation support.

```tsx
import { Badge } from "@/components/teams/ui";

{
  /* Count badge */
}
<Badge count={5} variant="count" color="error" size="medium">
  <SomeComponent />
</Badge>;

{
  /* Live indicator with pulse animation */
}
<Badge variant="live" color="error" size="small">
  <TabComponent />
</Badge>;

{
  /* Simple dot indicator */
}
<Badge variant="dot" color="success" size="small">
  <StatusComponent />
</Badge>;
```

**Variants:**

- `count` - Shows numerical count (with 99+ overflow)
- `dot` - Simple circular indicator
- `live` - Animated pulsing dot

**Colors:**

- `primary`, `secondary`, `error`, `warning`, `success`

### ✍️ Typography (`/typography/`)

#### `Title`

Page and section titles with ellipsis and tooltip support.

```tsx
import { Title } from "@/components/teams/ui";

<Title
  variant="compact" // "compact" | "full" | "large"
  component="h1" // HTML element
  showTooltip={true}
  tooltipTitle="Full title text"
  maxWidth="300px"
>
  Long title that will be truncated...
</Title>;
```

**Variants:**

- `compact` - 16px, for action bars
- `full` - 18px, standard titles
- `large` - 24px, page headers

### 🗂️ Tabs (`/tabs/`)

#### `Tab`

Individual tab with badge and live indicator support.

```tsx
import { Tab } from "@/components/teams/ui";

<Tab
  active={isActive}
  onClick={handleTabClick}
  badge={5} // Number badge
  showLive={true} // Live indicator
  variant="underline" // "underline" | "pill" | "minimal"
  size="medium" // "small" | "medium" | "large"
>
  Chat
</Tab>;
```

#### `TabList`

Container for tab groups with layout control.

```tsx
import { TabList } from "@/components/teams/ui";

<TabList
  orientation="horizontal" // "horizontal" | "vertical"
  spacing="normal" // "compact" | "normal" | "wide"
  align="left" // "left" | "center" | "right"
  variant="default" // "default" | "contained" | "minimal"
>
  {tabs.map((tab) => (
    <Tab key={tab.id} {...tab} />
  ))}
</TabList>;
```

### 📐 Layout (`/layout/`)

#### `ActionBar`

Main container for action toolbars.

```tsx
import { ActionBar } from "@/components/teams/ui";

<ActionBar
  variant="elevated" // "elevated" | "flat" | "minimal"
  size="normal" // "compact" | "normal" | "large"
  sticky={true}
  background="white" // "white" | "transparent" | "subtle"
>
  {/* ActionBar content */}
</ActionBar>;
```

#### `ActionBarRow`

Horizontal layout row with responsive spacing.

```tsx
import { ActionBarRow } from "@/components/teams/ui";

<ActionBarRow
  justify="between" // "start" | "end" | "center" | "between" | "around" | "evenly"
  align="center" // "start" | "end" | "center" | "stretch"
  spacing="medium" // "none" | "small" | "medium" | "large"
  isMobile={isMobile} // Responsive spacing
>
  {/* Row content */}
</ActionBarRow>;
```

#### `ActionBarSection`

Flexible sections within rows (start, center, end).

```tsx
import { ActionBarSection } from "@/components/teams/ui";

<ActionBarSection
  variant="start" // "start" | "center" | "end"
  flex={1} // Flex grow/shrink
  minWidth={0} // For ellipsis support
  spacing="medium" // Gap between children
>
  {/* Section content */}
</ActionBarSection>;
```

### 📋 Menus (`/menus/`)

#### `MoreMenu`

Three-dot overflow menu with icon support.

```tsx
import { MoreMenu } from "@/components/teams/ui";
import { Search, Users, Settings } from "lucide-react";

const menuItems = [
  {
    id: "search",
    label: "Search",
    icon: Search,
    onClick: handleSearch,
  },
  {
    id: "users",
    label: "Members",
    icon: Users,
    onClick: handleMembers,
    divider: true, // Add divider after this item
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    onClick: handleSettings,
    disabled: true,
  },
];

<MoreMenu
  items={menuItems}
  label="More options"
  size="medium"
  placement="bottom-end" // Anchor position
/>;
```

## 🎨 Design Tokens

### Colors

```css
--teams-primary: rgb(98, 100, 167) --teams-primary-hover: rgb(88, 90, 157)
  --teams-text-primary: rgb(32, 31, 30) --teams-text-secondary: rgb(97, 97, 97)
  --teams-error: rgb(196, 49, 75) --teams-surface: rgb(255, 255, 255)
  --teams-surface-subtle: rgb(250, 249, 248) --teams-border: rgb(224, 224, 224);
```

### Typography

```css
--teams-font-family:
  -apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji",
  "Segoe UI Emoji",
  sans-serif --teams-font-size-small: 12px --teams-font-size-medium: 14px
    --teams-font-size-large: 16px --teams-font-weight-normal: 400
    --teams-font-weight-medium: 600 --teams-font-weight-bold: 700;
```

### Spacing

```css
--teams-spacing-xs: 4px --teams-spacing-sm: 8px --teams-spacing-md: 12px
  --teams-spacing-lg: 16px --teams-spacing-xl: 24px;
```

## 🚀 Usage Examples

### Complete Action Bar

```tsx
import {
  ActionBar,
  ActionBarRow,
  ActionBarSection,
  BackButton,
  Title,
  PrimaryButton,
  ActionButton,
  MoreMenu,
  TabList,
  Tab,
} from "@/components/teams/ui";

function ChatActionBar() {
  return (
    <ActionBar variant="elevated" size="normal" sticky>
      {/* Top row */}
      <ActionBarRow justify="between" align="center">
        <ActionBarSection variant="start" flex={1} minWidth={0}>
          <BackButton onClick={handleBack} />
          <Title variant="compact" showTooltip>
            Long conversation title...
          </Title>
        </ActionBarSection>

        <ActionBarSection variant="end">
          <PrimaryButton color="teams">Join</PrimaryButton>
          <ActionButton icon={Search} label="Search" />
          <ActionButton icon={Users} label="Members" />
          <MoreMenu items={moreItems} />
        </ActionBarSection>
      </ActionBarRow>

      {/* Bottom row */}
      <ActionBarRow justify="start">
        <ActionBarSection variant="start" flex={1}>
          <TabList spacing="normal">
            <Tab active badge={5}>
              Chat
            </Tab>
            <Tab showLive>Files</Tab>
            <Tab>Summary</Tab>
          </TabList>
        </ActionBarSection>
      </ActionBarRow>
    </ActionBar>
  );
}
```

## 🔧 Development Guidelines

### Component Principles

1. **Single Responsibility** - Each component has one clear purpose
2. **Composition over Inheritance** - Build complex UIs by combining simple components
3. **Prop-driven Variants** - Use props for variations, not separate components
4. **Accessibility First** - ARIA labels, keyboard navigation, screen reader support
5. **TypeScript** - Full type safety with exported interfaces

### Naming Conventions

- **Components**: PascalCase (`ActionButton`)
- **Props**: camelCase (`showTooltip`)
- **Variants**: lowercase strings (`"primary"`, `"secondary"`)
- **Files**: PascalCase matching component name

### Styling Approach

- **Material-UI styled components** for performance and theme integration
- **CSS-in-JS** with TypeScript support
- **Design tokens** for consistent spacing, colors, typography
- **Responsive design** with mobile-first approach

## 🎯 Best Practices

### Performance

- Use `shouldForwardProp` to avoid unnecessary DOM attributes
- Implement proper React.memo for expensive components
- Leverage Material-UI's theme system for consistent styling

### Accessibility

- Always provide `aria-label` for icon-only buttons
- Use semantic HTML elements when possible
- Support keyboard navigation (Tab, Enter, Space, Arrow keys)
- Provide clear focus indicators

### Testing

- Unit tests for component logic and props
- Accessibility tests with @testing-library/jest-dom
- Visual regression tests for style consistency
- Integration tests for complex interactions

## 📋 Component Checklist

When creating new atomic components:

- [ ] TypeScript interface with exported props
- [ ] Proper prop validation and defaults
- [ ] Responsive design support
- [ ] Accessibility attributes (ARIA, roles, etc.)
- [ ] Consistent styling with design tokens
- [ ] Documentation with usage examples
- [ ] Unit tests for core functionality
- [ ] Export from appropriate index.ts file

## 🔄 Migration Guide

### From old ChatActionBar to atomic components:

**Before:**

```tsx
// Large monolithic component with styled components
const StyledActionButton = styled(IconButton)({ ... });
const CompactTitle = styled(Typography)({ ... });
```

**After:**

```tsx
// Composed from atomic components
import { ActionButton, Title } from "@/components/teams/ui";

<ActionButton icon={Search} label="Search" />
<Title variant="compact">Page Title</Title>
```

This atomic approach provides:

- ✅ **Reusability** across different components
- ✅ **Consistency** in design and behavior
- ✅ **Maintainability** with centralized component logic
- ✅ **Testability** with isolated component units
- ✅ **Type Safety** with comprehensive TypeScript support
