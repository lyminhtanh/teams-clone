import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface TabListProps {
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
  spacing?: "compact" | "normal" | "wide";
  align?: "left" | "center" | "right";
  variant?: "default" | "contained" | "minimal";
}

const StyledTabList = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "orientation" &&
    prop !== "spacing" &&
    prop !== "align" &&
    prop !== "tabVariant",
})<{
  orientation?: "horizontal" | "vertical";
  spacing?: "compact" | "normal" | "wide";
  align?: "left" | "center" | "right";
  tabVariant?: "default" | "contained" | "minimal";
}>(({
  theme,
  orientation = "horizontal",
  spacing = "normal",
  align = "left",
  tabVariant = "default",
}) => {
  const spacingValues = {
    compact: "8px",
    normal: "24px",
    wide: "32px",
  };

  const alignments = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  };

  const variants = {
    default: {
      backgroundColor: "transparent",
    },
    contained: {
      backgroundColor: "rgb(250, 249, 248)",
      borderRadius: "8px",
      padding: "4px",
    },
    minimal: {
      backgroundColor: "transparent",
      borderBottom: "1px solid rgb(237, 235, 233)",
    },
  };

  return {
    display: "flex",
    flexDirection: orientation === "horizontal" ? "row" : "column",
    gap: spacingValues[spacing],
    justifyContent: alignments[align],
    flex: 1,
    ...variants[tabVariant],
  };
});

export const TabList: React.FC<TabListProps> = ({
  children,
  orientation = "horizontal",
  spacing = "normal",
  align = "left",
  variant = "default",
}) => {
  return (
    <StyledTabList
      role="tablist"
      aria-orientation={orientation}
      orientation={orientation}
      spacing={spacing}
      align={align}
      tabVariant={variant}
    >
      {children}
    </StyledTabList>
  );
};

export default TabList;
