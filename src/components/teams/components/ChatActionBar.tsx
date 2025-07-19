import React, { useState } from "react";
import {
  Box,
  IconButton,
  Button,
  Typography,
  Divider,
  useMediaQuery,
  Menu,
  MenuItem,
  MenuList,
  Tooltip,
  Badge,
} from "@mui/material";
import {
  Calendar,
  Search,
  Users,
  List,
  MoreHorizontal,
  PanelRightOpen,
  Plus,
  Megaphone,
  ArrowLeft,
} from "lucide-react";
import { styled, useTheme } from "@mui/material/styles";

const ActionBarContainer = styled(Box)(({ theme }) => ({
  height: "auto",
  minHeight: "56px",
  backgroundColor: "rgb(255, 255, 255)",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  borderBottom: "1px solid rgb(224, 224, 224)",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
}));

const ActionBarContent = styled(Box)(({ theme }) => ({
  backgroundColor: "rgb(255, 255, 255)",
  display: "flex",
  flexDirection: "column",
  padding: "12px 16px 8px 16px",
  fontFamily:
    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
  fontSize: "14px",
  lineHeight: "20px",
}));

const TopRow = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: isMobile ? "4px" : "8px",
}));

const LeftSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flex: 1,
  minWidth: 0,
}));

const BackButton = styled(IconButton)(({ theme }) => ({
  color: "rgb(97, 97, 97)",
  fontSize: "20px",
  height: "32px",
  width: "32px",
  minWidth: "32px",
  padding: "4px",
  marginRight: "12px",
  border: "none",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

const CompactTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "24px",
  color: "rgb(32, 31, 30)",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  flex: 1,
  minWidth: 0,
}));

const TabsRow = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: isMobile ? "44px" : "44px", // Align with title (back button width + margin)
}));

const TabsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "24px",
  flex: 1,
}));

const CompactTab = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
  color: active ? "rgb(98, 100, 167)" : "rgb(97, 97, 97)",
  fontWeight: active ? 600 : 400,
  fontSize: "14px",
  lineHeight: "20px",
  padding: "4px 0",
  minWidth: "auto",
  textTransform: "none",
  borderBottom: active
    ? "2px solid rgb(98, 100, 167)"
    : "2px solid transparent",
  borderRadius: 0,
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

const RightActions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));

const MainButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgb(98, 100, 167)",
  color: "rgb(255, 255, 255)",
  fontSize: "14px",
  fontWeight: 600,
  padding: "8px 16px",
  borderRadius: "4px",
  textTransform: "none",
  minWidth: "auto",
  "&:hover": {
    backgroundColor: "rgb(88, 90, 157)",
  },
}));

const ActionButton = styled(IconButton)(({ theme }) => ({
  color: "rgb(97, 97, 97)",
  height: "32px",
  width: "32px",
  padding: "4px",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

const CompactMoreButton = styled(IconButton)(({ theme }) => ({
  color: "rgb(97, 97, 97)",
  height: "32px",
  width: "32px",
  padding: "4px",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

const TabBadge = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-2px",
  right: "-8px",
  backgroundColor: "rgb(196, 49, 75)",
  color: "white",
  borderRadius: "10px",
  fontSize: "10px",
  fontWeight: 600,
  minWidth: "16px",
  height: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 4px",
}));

const LiveDot = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "2px",
  right: "-4px",
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "rgb(196, 49, 75)",
  animation: "pulse 2s infinite",
  "@keyframes pulse": {
    "0%": {
      transform: "scale(0.95)",
      boxShadow: "0 0 0 0 rgba(196, 49, 75, 0.7)",
    },
    "70%": {
      transform: "scale(1)",
      boxShadow: "0 0 0 10px rgba(196, 49, 75, 0)",
    },
    "100%": {
      transform: "scale(0.95)",
      boxShadow: "0 0 0 0 rgba(196, 49, 75, 0)",
    },
  },
}));

const TabWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
}));

const tabs = [
  { id: "chat", label: "Trò chuyện", active: true, badge: 5 },
  { id: "shared", label: "Đã chia sẻ", active: false, live: true },
  { id: "recap", label: "Tóm tắt", active: false },
];

const actionItems = [
  {
    id: "details",
    icon: List,
    label: "Chi tiết cuộc họp",
    ariaLabel: "Chi tiết cuộc họp",
  },
  {
    id: "search",
    icon: Search,
    label: "Tìm trong cuộc trò chuyện",
    ariaLabel: "Tìm trong cuộc trò chuyện (⌘ F)",
    keyshortcuts: "⌘ F",
  },
  {
    id: "panel",
    icon: PanelRightOpen,
    label: "Mở chi tiết cuộc trò chuyện",
    ariaLabel: "Mở chi tiết cuộc trò chuyện (⌃ ⌘ E)",
    keyshortcuts: "⌃ ⌘ E",
  },
  {
    id: "users",
    icon: Users,
    label: "Thành viên",
    ariaLabel: "Xem thành viên",
  },
  { id: "add", icon: Plus, label: "Thêm mới", ariaLabel: "Thêm mới" },
];

export default function ChatActionBar() {
  const [activeTab, setActiveTab] = useState("chat");
  const [moreMenuAnchorEl, setMoreMenuAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Desktop: show first 3 actions directly, rest in more menu
  const maxVisibleActions = 3;
  const visibleActions = actionItems.slice(0, maxVisibleActions);
  const hiddenActions = actionItems.slice(maxVisibleActions);

  const handleMoreMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMoreMenuAnchorEl(event.currentTarget);
  };

  const handleMoreMenuClose = () => {
    setMoreMenuAnchorEl(null);
  };

  const handleBackClick = () => {
    // Handle back navigation
    console.log("Back button clicked");
  };

  const moreMenuOpen = Boolean(moreMenuAnchorEl);

  return (
    <ActionBarContainer>
      <ActionBarContent>
        {/* Top Row: Back + Title + Actions */}
        <TopRow isMobile={isMobile}>
          <LeftSection>
            <BackButton onClick={handleBackClick} aria-label="Quay lại">
              <ArrowLeft size={20} />
            </BackButton>
            <Tooltip
              title="Vietnam team daily Trò chuyện - This is a very long title to test ellipsis behavior"
              placement="bottom-start"
              arrow
            >
              <CompactTitle component="h1">
                Vietnam team daily Trò chuyện - This is a very long title to
                test ellipsis behavior
              </CompactTitle>
            </Tooltip>
          </LeftSection>

          <RightActions>
            <MainButton variant="contained">Tham gia</MainButton>

            {/* Desktop: Show individual action icons */}
            {!isMobile && (
              <>
                {visibleActions.map((action) => {
                  const IconComponent = action.icon;
                  return (
                    <Tooltip
                      key={action.id}
                      title={action.label}
                      placement="bottom"
                      arrow
                    >
                      <ActionButton
                        aria-label={action.ariaLabel}
                        aria-keyshortcuts={action.keyshortcuts}
                      >
                        <IconComponent size={20} />
                      </ActionButton>
                    </Tooltip>
                  );
                })}
              </>
            )}

            {/* Show more menu if there are hidden actions (desktop) or on mobile */}
            {((!isMobile && hiddenActions.length > 0) || isMobile) && (
              <>
                <Tooltip title="Xem thêm tùy chọn" placement="bottom" arrow>
                  <CompactMoreButton
                    aria-haspopup="menu"
                    aria-expanded={moreMenuOpen}
                    onClick={handleMoreMenuOpen}
                  >
                    <MoreHorizontal size={20} />
                  </CompactMoreButton>
                </Tooltip>

                <Menu
                  open={moreMenuOpen}
                  anchorEl={moreMenuAnchorEl}
                  onClose={handleMoreMenuClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  slotProps={{
                    paper: {
                      sx: { minWidth: 200 },
                    },
                  }}
                >
                  {(isMobile ? actionItems : hiddenActions).map((action) => {
                    const IconComponent = action.icon;
                    return (
                      <MenuItem
                        key={action.id}
                        dense
                        onClick={handleMoreMenuClose}
                      >
                        <IconComponent size={16} style={{ marginRight: 8 }} />
                        {action.label}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </>
            )}
          </RightActions>
        </TopRow>

        {/* Bottom Row: Tabs */}
        <TabsRow isMobile={isMobile}>
          <TabsContainer>
            {tabs.map((tab) => (
              <TabWrapper key={tab.id}>
                <CompactTab
                  active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </CompactTab>
                {tab.badge && tab.badge > 0 && (
                  <TabBadge>{tab.badge > 99 ? "99+" : tab.badge}</TabBadge>
                )}
                {tab.live && <LiveDot />}
              </TabWrapper>
            ))}
          </TabsContainer>
        </TabsRow>
      </ActionBarContent>
    </ActionBarContainer>
  );
}
