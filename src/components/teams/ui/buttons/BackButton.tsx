import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArrowLeft } from "lucide-react";

export interface BackButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
  showTooltip?: boolean;
  size?: "small" | "medium" | "large";
}

const StyledBackButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "buttonSize",
})<{ buttonSize?: "small" | "medium" | "large" }>(({
  theme,
  buttonSize = "medium",
}) => {
  const sizes = {
    small: {
      height: "24px",
      width: "24px",
      padding: "2px",
      marginRight: "8px",
    },
    medium: {
      height: "32px",
      width: "32px",
      padding: "4px",
      marginRight: "12px",
    },
    large: {
      height: "40px",
      width: "40px",
      padding: "8px",
      marginRight: "16px",
    },
  };

  return {
    ...sizes[buttonSize],
    color: "rgb(97, 97, 97)",
    fontSize: "20px",
    border: "none",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  };
});

export const BackButton: React.FC<BackButtonProps> = ({
  onClick,
  disabled = false,
  label = "Quay lại",
  showTooltip = true,
  size = "medium",
}) => {
  const iconSize = size === "small" ? 16 : size === "medium" ? 20 : 24;

  const button = (
    <StyledBackButton
      buttonSize={size}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      <ArrowLeft size={iconSize} />
    </StyledBackButton>
  );

  if (showTooltip && label) {
    return (
      <Tooltip title={label} placement="bottom-start" arrow>
        {button}
      </Tooltip>
    );
  }

  return button;
};

export default BackButton;
