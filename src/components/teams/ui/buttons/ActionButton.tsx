import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LucideIcon } from "lucide-react";

export interface ActionButtonProps {
  icon: LucideIcon;
  label?: string;
  variant?: "default" | "compact";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
  "aria-keyshortcuts"?: string;
  showTooltip?: boolean;
  tooltipPlacement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
}

const StyledActionButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "variant" && prop !== "buttonSize",
})<{
  variant?: "default" | "compact";
  buttonSize?: "small" | "medium" | "large";
}>(({ theme, variant = "default", buttonSize = "medium" }) => {
  const sizes = {
    small: { height: "24px", width: "24px", padding: "2px" },
    medium: { height: "32px", width: "32px", padding: "4px" },
    large: { height: "40px", width: "40px", padding: "8px" },
  };

  const variants = {
    default: {
      color: "rgb(97, 97, 97)",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
    },
    compact: {
      color: "rgb(97, 97, 97)",
      border: "none",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
    },
  };

  return {
    ...sizes[buttonSize],
    ...variants[variant],
  };
});

export const ActionButton: React.FC<ActionButtonProps> = ({
  icon: Icon,
  label,
  variant = "default",
  size = "medium",
  onClick,
  disabled = false,
  showTooltip = true,
  tooltipPlacement = "bottom",
  ...ariaProps
}) => {
  const iconSize = size === "small" ? 16 : size === "medium" ? 20 : 24;

  const button = (
    <StyledActionButton
      variant={variant}
      buttonSize={size}
      onClick={onClick}
      disabled={disabled}
      {...ariaProps}
    >
      <Icon size={iconSize} />
    </StyledActionButton>
  );

  if (showTooltip && label) {
    return (
      <Tooltip title={label} placement={tooltipPlacement} arrow>
        {button}
      </Tooltip>
    );
  }

  return button;
};

export default ActionButton;
