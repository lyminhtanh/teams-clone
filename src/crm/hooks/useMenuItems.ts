import { useState, useEffect, useCallback } from "react";
import {
  MenuItem,
  defaultMenuItems,
  getEnabledMenuItems,
} from "../data/menuItems";

const STORAGE_KEY = "teams_menu_configuration";

export interface UseMenuItemsReturn {
  menuItems: MenuItem[];
  enabledMenuItems: MenuItem[];
  updateMenuItems: (items: MenuItem[]) => void;
  resetToDefaults: () => void;
  toggleMenuItem: (itemId: string) => void;
  isMenuItemEnabled: (itemId: string) => boolean;
  getMenuItemById: (itemId: string) => MenuItem | undefined;
  hasCustomConfiguration: boolean;
}

export function useMenuItems(): UseMenuItemsReturn {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    // Load from localStorage on initialization
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsedItems = JSON.parse(stored) as MenuItem[];
        // Validate that the stored items have the expected structure
        if (Array.isArray(parsedItems) && parsedItems.length > 0) {
          // Merge with defaults to ensure new items are included
          return mergeWithDefaults(parsedItems);
        }
      }
    } catch (error) {
      console.warn(
        "Failed to load menu configuration from localStorage:",
        error,
      );
    }
    return defaultMenuItems;
  });

  // Merge stored configuration with defaults to handle new items
  const mergeWithDefaults = useCallback(
    (storedItems: MenuItem[]): MenuItem[] => {
      const storedMap = new Map(storedItems.map((item) => [item.id, item]));

      return defaultMenuItems.map((defaultItem) => {
        const storedItem = storedMap.get(defaultItem.id);
        if (storedItem) {
          // Keep user preferences but update other properties from defaults
          return {
            ...defaultItem,
            enabled: storedItem.enabled,
            order: storedItem.order,
          };
        }
        return defaultItem;
      });
    },
    [],
  );

  // Save to localStorage whenever menuItems changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(menuItems));
    } catch (error) {
      console.warn("Failed to save menu configuration to localStorage:", error);
    }
  }, [menuItems]);

  const enabledMenuItems = getEnabledMenuItems(menuItems);

  const updateMenuItems = useCallback((items: MenuItem[]) => {
    setMenuItems(items);
  }, []);

  const resetToDefaults = useCallback(() => {
    setMenuItems(defaultMenuItems);
  }, []);

  const toggleMenuItem = useCallback((itemId: string) => {
    setMenuItems((prev) =>
      prev.map((item) =>
        item.id === itemId && !item.isCore
          ? { ...item, enabled: !item.enabled }
          : item,
      ),
    );
  }, []);

  const isMenuItemEnabled = useCallback(
    (itemId: string): boolean => {
      const item = menuItems.find((item) => item.id === itemId);
      return item?.enabled ?? false;
    },
    [menuItems],
  );

  const getMenuItemById = useCallback(
    (itemId: string): MenuItem | undefined => {
      return menuItems.find((item) => item.id === itemId);
    },
    [menuItems],
  );

  const hasCustomConfiguration =
    JSON.stringify(menuItems) !== JSON.stringify(defaultMenuItems);

  return {
    menuItems,
    enabledMenuItems,
    updateMenuItems,
    resetToDefaults,
    toggleMenuItem,
    isMenuItemEnabled,
    getMenuItemById,
    hasCustomConfiguration,
  };
}

// Helper hook for menu statistics
export function useMenuStats(menuItems: MenuItem[]) {
  const totalItems = menuItems.length;
  const enabledItems = menuItems.filter((item) => item.enabled).length;
  const coreItems = menuItems.filter((item) => item.isCore).length;
  const customItems = menuItems.filter((item) => !item.isCore).length;
  const enabledCustomItems = menuItems.filter(
    (item) => !item.isCore && item.enabled,
  ).length;

  return {
    totalItems,
    enabledItems,
    disabledItems: totalItems - enabledItems,
    coreItems,
    customItems,
    enabledCustomItems,
    disabledCustomItems: customItems - enabledCustomItems,
    enabledPercentage: Math.round((enabledItems / totalItems) * 100),
  };
}
