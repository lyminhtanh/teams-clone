import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface PrimaryButtonProps {
  children: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "teams";
  onClick?: () => void;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const StyledPrimaryButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "color" && prop !== "buttonSize",
})<{
  color?: "primary" | "secondary" | "teams";
  buttonSize?: "small" | "medium" | "large";
}>(({ theme, color = "teams", buttonSize = "medium" }) => {
  const sizes = {
    small: {
      fontSize: "12px",
      padding: "6px 12px",
      height: "28px",
    },
    medium: {
      fontSize: "14px",
      padding: "8px 16px",
      height: "32px",
    },
    large: {
      fontSize: "16px",
      padding: "12px 24px",
      height: "40px",
    },
  };

  const colors = {
    primary: {
      backgroundColor: "rgb(0, 120, 212)",
      color: "rgb(255, 255, 255)",
      "&:hover": {
        backgroundColor: "rgb(0, 108, 190)",
      },
    },
    secondary: {
      backgroundColor: "rgb(243, 242, 241)",
      color: "rgb(32, 31, 30)",
      "&:hover": {
        backgroundColor: "rgb(237, 235, 233)",
      },
    },
    teams: {
      backgroundColor: "rgb(98, 100, 167)",
      color: "rgb(255, 255, 255)",
      "&:hover": {
        backgroundColor: "rgb(88, 90, 157)",
      },
    },
  };

  return {
    ...sizes[buttonSize],
    ...colors[color],
    fontWeight: 600,
    borderRadius: "4px",
    textTransform: "none",
    minWidth: "auto",
    boxShadow: "none",
    "&:hover": {
      ...colors[color]["&:hover"],
      boxShadow: "none",
    },
  };
});

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  variant = "contained",
  size = "medium",
  color = "teams",
  onClick,
  disabled = false,
  startIcon,
  endIcon,
  fullWidth = false,
}) => {
  return (
    <StyledPrimaryButton
      variant={variant}
      buttonSize={size}
      color={color}
      onClick={onClick}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
    >
      {children}
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;
