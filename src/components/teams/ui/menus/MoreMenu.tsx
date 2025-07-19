import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MoreHorizontal, LucideIcon } from "lucide-react";
import { ActionButton } from "../buttons";

export interface MoreMenuProps {
  items: Array<{
    id: string;
    label: string;
    icon?: LucideIcon;
    onClick?: () => void;
    disabled?: boolean;
    divider?: boolean;
  }>;
  label?: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  placement?:
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

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: "14px",
  minHeight: "32px",
  padding: "6px 12px",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

const MenuIconWrapper = styled("div")(({ theme }) => ({
  marginRight: "8px",
  display: "flex",
  alignItems: "center",
  color: "rgb(97, 97, 97)",
}));

export const MoreMenu: React.FC<MoreMenuProps> = ({
  items,
  label = "Xem thêm tùy chọn",
  size = "medium",
  disabled = false,
  placement = "bottom-end",
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (item: (typeof items)[0]) => {
    handleClose();
    if (item.onClick) {
      item.onClick();
    }
  };

  const [vertical, horizontal] = placement.split("-") as [
    "top" | "bottom" | "center",
    "left" | "right" | "center",
  ];

  return (
    <>
      <ActionButton
        icon={MoreHorizontal}
        label={label}
        size={size}
        onClick={handleClick}
        disabled={disabled}
        aria-haspopup="menu"
        aria-expanded={open}
        tooltipPlacement="bottom"
      />

      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: vertical === "top" ? "top" : "bottom",
          horizontal: horizontal === "left" ? "left" : "right",
        }}
        transformOrigin={{
          vertical: vertical === "top" ? "bottom" : "top",
          horizontal: horizontal === "left" ? "left" : "right",
        }}
        slotProps={{
          paper: {
            sx: {
              minWidth: 200,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.12)",
              border: "1px solid rgba(0, 0, 0, 0.04)",
            },
          },
        }}
      >
        {items.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id}>
              <StyledMenuItem
                onClick={() => handleItemClick(item)}
                disabled={item.disabled}
                dense
              >
                {IconComponent && (
                  <MenuIconWrapper>
                    <IconComponent size={16} />
                  </MenuIconWrapper>
                )}
                {item.label}
              </StyledMenuItem>
              {item.divider && (
                <hr
                  style={{
                    margin: "4px 0",
                    border: "none",
                    borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                  }}
                />
              )}
            </div>
          );
        })}
      </Menu>
    </>
  );
};

export default MoreMenu;
