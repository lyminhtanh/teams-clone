import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from "react";
import { MenuContextType } from "../types/menuTypes";
import { useResponsiveMenu } from "../hooks/useResponsiveMenu";

const MenuContext = createContext<MenuContextType | undefined>(undefined);

interface MenuProviderProps {
  children: ReactNode;
}

export function MenuProvider({ children }: MenuProviderProps) {
  const responsive = useResponsiveMenu();
  const [isOpen, setIsOpen] = useState(responsive.defaultOpen);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Auto-manage menu state based on screen size for Teams layout
  useEffect(() => {
    if (responsive.isMobile) {
      setIsOpen(false);
    } else if (responsive.isDesktop) {
      // For Teams layout, default to closed state on desktop
      // Users can manually open sections they want
      setIsOpen(false);
    }
  }, [responsive.isMobile, responsive.isDesktop]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setIsOpen(true);
  }, []);

  const toggleExpanded = useCallback((itemId: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  }, []);

  const value: MenuContextType = {
    isOpen,
    toggleMenu,
    closeMenu,
    openMenu,
    expandedItems,
    toggleExpanded,
    activeItem,
    setActiveItem,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
}
