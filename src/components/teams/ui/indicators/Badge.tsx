import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface BadgeProps {
  count?: number;
  variant?: "count" | "dot" | "live";
  color?: "primary" | "secondary" | "error" | "warning" | "success";
  size?: "small" | "medium" | "large";
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  children?: React.ReactNode;
  max?: number;
}

const BadgeContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
}));

const StyledBadge = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "variant" &&
    prop !== "color" &&
    prop !== "badgeSize" &&
    prop !== "position",
})<{
  variant?: "count" | "dot" | "live";
  color?: "primary" | "secondary" | "error" | "warning" | "success";
  badgeSize?: "small" | "medium" | "large";
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}>(({
  theme,
  variant = "count",
  color = "error",
  badgeSize = "medium",
  position = "top-right",
}) => {
  const colors = {
    primary: "rgb(0, 120, 212)",
    secondary: "rgb(97, 97, 97)",
    error: "rgb(196, 49, 75)",
    warning: "rgb(255, 185, 0)",
    success: "rgb(16, 124, 16)",
  };

  const sizes = {
    small: {
      minWidth: variant === "dot" ? "6px" : "12px",
      height: variant === "dot" ? "6px" : "12px",
      fontSize: "8px",
      padding: variant === "dot" ? 0 : "0 2px",
    },
    medium: {
      minWidth: variant === "dot" ? "8px" : "16px",
      height: variant === "dot" ? "8px" : "16px",
      fontSize: "10px",
      padding: variant === "dot" ? 0 : "0 4px",
    },
    large: {
      minWidth: variant === "dot" ? "10px" : "20px",
      height: variant === "dot" ? "10px" : "20px",
      fontSize: "12px",
      padding: variant === "dot" ? 0 : "0 6px",
    },
  };

  const positions = {
    "top-right": { top: "-2px", right: "-8px" },
    "top-left": { top: "-2px", left: "-8px" },
    "bottom-right": { bottom: "-2px", right: "-8px" },
    "bottom-left": { bottom: "-2px", left: "-8px" },
  };

  const liveAnimation =
    variant === "live"
      ? {
          animation: "pulse 2s infinite",
          "@keyframes pulse": {
            "0%": {
              transform: "scale(0.95)",
              boxShadow: `0 0 0 0 ${colors[color]}70`,
            },
            "70%": {
              transform: "scale(1)",
              boxShadow: `0 0 0 10px ${colors[color]}00`,
            },
            "100%": {
              transform: "scale(0.95)",
              boxShadow: `0 0 0 0 ${colors[color]}00`,
            },
          },
        }
      : {};

  return {
    position: "absolute",
    ...positions[position],
    backgroundColor: colors[color],
    color: "white",
    borderRadius: "50%",
    ...sizes[badgeSize],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    ...liveAnimation,
  };
});

export const Badge: React.FC<BadgeProps> = ({
  count,
  variant = "count",
  color = "error",
  size = "medium",
  position = "top-right",
  children,
  max = 99,
}) => {
  const shouldShow =
    variant === "dot" ||
    variant === "live" ||
    (count !== undefined && count > 0);

  if (!shouldShow) {
    return <>{children}</>;
  }

  const displayValue =
    variant === "count" && count !== undefined
      ? count > max
        ? `${max}+`
        : count.toString()
      : "";

  return (
    <BadgeContainer>
      {children}
      <StyledBadge
        variant={variant}
        color={color}
        badgeSize={size}
        position={position}
      >
        {displayValue}
      </StyledBadge>
    </BadgeContainer>
  );
};

export default Badge;
