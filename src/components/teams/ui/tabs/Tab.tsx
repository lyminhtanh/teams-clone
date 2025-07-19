import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Badge } from "../indicators";

export interface TabProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  badge?: number;
  showLive?: boolean;
  variant?: "underline" | "pill" | "minimal";
  size?: "small" | "medium" | "large";
}

const TabWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "inline-block",
}));

const StyledTab = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== "active" && prop !== "tabVariant" && prop !== "tabSize",
})<{
  active?: boolean;
  tabVariant?: "underline" | "pill" | "minimal";
  tabSize?: "small" | "medium" | "large";
}>(({
  theme,
  active = false,
  tabVariant = "underline",
  tabSize = "medium",
}) => {
  const sizes = {
    small: {
      fontSize: "12px",
      lineHeight: "16px",
      padding: "2px 0",
    },
    medium: {
      fontSize: "14px",
      lineHeight: "20px",
      padding: "4px 0",
    },
    large: {
      fontSize: "16px",
      lineHeight: "24px",
      padding: "6px 0",
    },
  };

  const variants = {
    underline: {
      color: active ? "rgb(98, 100, 167)" : "rgb(97, 97, 97)",
      fontWeight: active ? 600 : 400,
      textTransform: "none",
      minWidth: "auto",
      borderRadius: 0,
      borderBottom: active
        ? "2px solid rgb(98, 100, 167)"
        : "2px solid transparent",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
    },
    pill: {
      color: active ? "rgb(255, 255, 255)" : "rgb(97, 97, 97)",
      backgroundColor: active ? "rgb(98, 100, 167)" : "transparent",
      fontWeight: active ? 600 : 400,
      textTransform: "none",
      minWidth: "auto",
      borderRadius: "16px",
      padding: "4px 12px",
      "&:hover": {
        backgroundColor: active ? "rgb(88, 90, 157)" : "rgba(0, 0, 0, 0.04)",
      },
    },
    minimal: {
      color: active ? "rgb(98, 100, 167)" : "rgb(97, 97, 97)",
      fontWeight: active ? 600 : 400,
      textTransform: "none",
      minWidth: "auto",
      borderRadius: "4px",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
    },
  };

  return {
    ...sizes[tabSize],
    ...variants[tabVariant],
  };
});

export const Tab: React.FC<TabProps> = ({
  children,
  active = false,
  onClick,
  disabled = false,
  badge,
  showLive = false,
  variant = "underline",
  size = "medium",
}) => {
  const tab = (
    <StyledTab
      active={active}
      tabVariant={variant}
      tabSize={size}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledTab>
  );

  if (badge !== undefined || showLive) {
    return (
      <TabWrapper>
        <Badge
          count={badge}
          variant={showLive ? "live" : "count"}
          color="error"
          size="small"
          position="top-right"
        >
          {tab}
        </Badge>
      </TabWrapper>
    );
  }

  return tab;
};

export default Tab;
