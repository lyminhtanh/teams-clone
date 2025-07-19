import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface ActionBarSectionProps {
  children: React.ReactNode;
  variant?: "start" | "center" | "end";
  spacing?: "none" | "small" | "medium" | "large";
  align?: "start" | "center" | "end" | "stretch";
  flex?: boolean | number | string;
  minWidth?: number | string;
}

const StyledActionBarSection = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "sectionVariant" &&
    prop !== "spacing" &&
    prop !== "align" &&
    prop !== "flex" &&
    prop !== "minWidth",
})<{
  sectionVariant?: "start" | "center" | "end";
  spacing?: "none" | "small" | "medium" | "large";
  align?: "start" | "center" | "end" | "stretch";
  flex?: boolean | number | string;
  minWidth?: number | string;
}>(({
  theme,
  sectionVariant = "start",
  spacing = "medium",
  align = "center",
  flex,
  minWidth,
}) => {
  const spacingValues = {
    none: "0px",
    small: "4px",
    medium: "8px",
    large: "16px",
  };

  const alignValues = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    stretch: "stretch",
  };

  const variants = {
    start: {
      justifyContent: "flex-start",
      marginRight: "auto",
    },
    center: {
      justifyContent: "center",
      flex: "0 0 auto",
    },
    end: {
      justifyContent: "flex-end",
      marginLeft: "auto",
    },
  };

  return {
    display: "flex",
    alignItems: alignValues[align],
    gap: spacingValues[spacing],
    ...variants[sectionVariant],
    ...(flex !== undefined && {
      flex: typeof flex === "boolean" ? (flex ? 1 : "none") : flex,
    }),
    ...(minWidth !== undefined && { minWidth }),
    ...(sectionVariant === "start" && { minWidth: 0 }), // Allow ellipsis in start section
  };
});

export const ActionBarSection: React.FC<ActionBarSectionProps> = ({
  children,
  variant = "start",
  spacing = "medium",
  align = "center",
  flex,
  minWidth,
}) => {
  return (
    <StyledActionBarSection
      sectionVariant={variant}
      spacing={spacing}
      align={align}
      flex={flex}
      minWidth={minWidth}
    >
      {children}
    </StyledActionBarSection>
  );
};

export default ActionBarSection;
