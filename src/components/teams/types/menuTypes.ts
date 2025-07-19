import { ReactNode } from "react";

export interface MenuItem {
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

export interface MenuSection {
  id: string;
  title?: string;
  items: MenuItem[];
  collapsible?: boolean;
  defaultCollapsed?: boolean;
}

export interface MenuConfig {
  sections: MenuSection[];
}

export interface MenuContextType {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;
  expandedItems: Set<string>;
  toggleExpanded: (itemId: string) => void;
  activeItem: string | null;
  setActiveItem: (itemId: string | null) => void;
}

export interface MenuItemProps {
  item: MenuItem;
  level?: number;
  onItemClick?: (item: MenuItem) => void;
}

export interface SideMenuProps {
  config: MenuConfig;
  width?: number;
  className?: string;
}
