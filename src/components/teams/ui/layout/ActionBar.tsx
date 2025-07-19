import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface ActionBarProps {
  children: React.ReactNode;
  variant?: "elevated" | "flat" | "minimal";
  size?: "compact" | "normal" | "large";
  sticky?: boolean;
  background?: "white" | "transparent" | "subtle";
}

const StyledActionBar = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "barVariant" &&
    prop !== "barSize" &&
    prop !== "sticky" &&
    prop !== "background",
})<{
  barVariant?: "elevated" | "flat" | "minimal";
  barSize?: "compact" | "normal" | "large";
  sticky?: boolean;
  background?: "white" | "transparent" | "subtle";
}>(({
  theme,
  barVariant = "elevated",
  barSize = "normal",
  sticky = true,
  background = "white",
}) => {
  const sizes = {
    compact: {
      minHeight: "48px",
      padding: "8px 12px 6px 12px",
    },
    normal: {
      minHeight: "56px",
      padding: "12px 16px 8px 16px",
    },
    large: {
      minHeight: "64px",
      padding: "16px 20px 12px 20px",
    },
  };

  const backgrounds = {
    white: "rgb(255, 255, 255)",
    transparent: "transparent",
    subtle: "rgb(250, 249, 248)",
  };

  const variants = {
    elevated: {
      borderBottom: "1px solid rgb(224, 224, 224)",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    },
    flat: {
      borderBottom: "1px solid rgb(224, 224, 224)",
    },
    minimal: {
      borderBottom: "none",
    },
  };

  return {
    height: "auto",
    backgroundColor: backgrounds[background],
    display: "flex",
    flexDirection: "column",
    fontFamily:
      '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
    fontSize: "14px",
    lineHeight: "20px",
    ...(sticky && {
      position: "sticky",
      top: 0,
      zIndex: 1000,
    }),
    ...sizes[barSize],
    ...variants[barVariant],
  };
});

export const ActionBar: React.FC<ActionBarProps> = ({
  children,
  variant = "elevated",
  size = "normal",
  sticky = true,
  background = "white",
}) => {
  return (
    <StyledActionBar
      barVariant={variant}
      barSize={size}
      sticky={sticky}
      background={background}
    >
      {children}
    </StyledActionBar>
  );
};

export default ActionBar;
