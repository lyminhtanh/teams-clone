import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export interface ResponsiveMenuState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  shouldAutoClose: boolean;
  defaultOpen: boolean;
}

export function useResponsiveMenu() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const [menuState, setMenuState] = useState<ResponsiveMenuState>({
    isMobile,
    isTablet,
    isDesktop,
    shouldAutoClose: isMobile,
    defaultOpen: isDesktop,
  });

  useEffect(() => {
    setMenuState({
      isMobile,
      isTablet,
      isDesktop,
      shouldAutoClose: isMobile,
      defaultOpen: isDesktop,
    });
  }, [isMobile, isTablet, isDesktop]);

  return menuState;
}

export function useMenuWidth() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));

  if (isMobile) return 280; // Smaller width for mobile
  if (isTablet) return 300; // Medium width for tablet
  return 320; // Full width for desktop
}

export function useMenuAnimation() {
  const theme = useTheme();
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
  );

  const getTransitionDuration = (base: number) => {
    if (prefersReducedMotion) return 0;
    return base;
  };

  const getEasing = () => {
    return theme.transitions.easing.easeInOut;
  };

  return {
    transitionDuration: {
      enter: getTransitionDuration(300),
      exit: getTransitionDuration(200),
    },
    easing: getEasing(),
    prefersReducedMotion,
  };
}
