import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface ActionBarRowProps {
  children: React.ReactNode;
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  align?: "start" | "end" | "center" | "stretch";
  spacing?: "none" | "small" | "medium" | "large";
  wrap?: boolean;
  isMobile?: boolean;
}

const StyledActionBarRow = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "justify" &&
    prop !== "align" &&
    prop !== "spacing" &&
    prop !== "wrap" &&
    prop !== "isMobile",
})<{
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  align?: "start" | "end" | "center" | "stretch";
  spacing?: "none" | "small" | "medium" | "large";
  wrap?: boolean;
  isMobile?: boolean;
}>(({
  theme,
  justify = "between",
  align = "center",
  spacing = "medium",
  wrap = false,
  isMobile = false,
}) => {
  const justifyValues = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
  };

  const alignValues = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    stretch: "stretch",
  };

  const spacingValues = {
    none: "0px",
    small: isMobile ? "2px" : "4px",
    medium: isMobile ? "4px" : "8px",
    large: isMobile ? "6px" : "12px",
  };

  return {
    display: "flex",
    alignItems: alignValues[align],
    justifyContent: justifyValues[justify],
    marginBottom: spacingValues[spacing],
    flexWrap: wrap ? "wrap" : "nowrap",
  };
});

export const ActionBarRow: React.FC<ActionBarRowProps> = ({
  children,
  justify = "between",
  align = "center",
  spacing = "medium",
  wrap = false,
  isMobile = false,
}) => {
  return (
    <StyledActionBarRow
      justify={justify}
      align={align}
      spacing={spacing}
      wrap={wrap}
      isMobile={isMobile}
    >
      {children}
    </StyledActionBarRow>
  );
};

export default ActionBarRow;
