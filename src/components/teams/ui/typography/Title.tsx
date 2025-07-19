import React from "react";
import { Typography, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface TitleProps {
  children: React.ReactNode;
  variant?: "compact" | "full" | "large";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span";
  showTooltip?: boolean;
  tooltipTitle?: string;
  maxWidth?: string | number;
  color?: "primary" | "secondary" | "text.primary" | "text.secondary";
}

const StyledTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "titleVariant" && prop !== "maxWidth",
})<{
  titleVariant?: "compact" | "full" | "large";
  maxWidth?: string | number;
}>(({ theme, titleVariant = "full", maxWidth }) => {
  const variants = {
    compact: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      flex: 1,
      minWidth: 0,
    },
    full: {
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "26px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    large: {
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "32px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  };

  return {
    color: "rgb(32, 31, 30)",
    ...variants[titleVariant],
    ...(maxWidth && { maxWidth }),
  };
});

export const Title: React.FC<TitleProps> = ({
  children,
  variant = "full",
  component = "h2",
  showTooltip = true,
  tooltipTitle,
  maxWidth,
  color,
}) => {
  const title = (
    <StyledTitle
      component={component}
      titleVariant={variant}
      maxWidth={maxWidth}
      sx={color ? { color } : undefined}
    >
      {children}
    </StyledTitle>
  );

  if (showTooltip && (tooltipTitle || typeof children === "string")) {
    return (
      <Tooltip title={tooltipTitle || children} placement="bottom-start" arrow>
        {title}
      </Tooltip>
    );
  }

  return title;
};

export default Title;
