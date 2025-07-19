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
  height: "61px",
  backgroundColor: "rgb(245, 245, 245)",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  borderBottom: "1px solid rgb(224, 224, 224)",
}));

const ActionBarContent = styled(Box)(({ theme }) => ({
  backgroundColor: "rgb(255, 255, 255)",
  height: "100%",
  display: "flex",
  padding: "0 20px 0 20px",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid rgb(224, 224, 224)",
  fontFamily:
    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
  fontSize: "12px",
  lineHeight: "17px",
}));

const LeftSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "100%",
  minWidth: "90px",
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginRight: "10px",
  minWidth: "32px",
}));

const LogoIcon = styled(Calendar, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  backgroundColor: "rgb(197, 203, 250)",
  borderRadius: "50%",
  color: "rgb(91, 95, 199)",
  padding: isMobile ? "4px" : "6px",
  fontSize: isMobile ? "20px" : "32px",
}));

const TitleSection = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  display: "flex",
  height: "100%",
  width: "100%",
  flexDirection: isMobile ? "row" : "column",
  alignItems: isMobile ? "center" : "initial",
  "@media (max-width: 640px)": {
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "100%",
  width: "100%",
  "@media (max-width: 640px)": {
    height: "auto",
    margin: "-4px 0",
  },
}));

const TitleText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  fontWeight: 700,
  fontSize: isMobile ? "12px" : "18px",
  lineHeight: isMobile ? "16px" : "26px",
  marginLeft: "2px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: isMobile ? "200px" : "300px",
  "@media (max-width: 640px)": {
    paddingTop: "3px",
    fontSize: "14px",
    lineHeight: "20px",
    maxWidth: "150px",
  },
}));

const TabsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  height: "100%",
  maxWidth: "100%",
  minWidth: "241px",
  width: "100%",
}));

const TabList = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
  alignItems: "stretch",
  flexShrink: 0,
}));

const Tab = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
  alignItems: "center",
  borderRadius: "4px",
  color: active ? "rgb(36, 36, 36)" : "rgb(66, 66, 66)",
  fontWeight: active ? 600 : 400,
  cursor: "pointer",
  display: "grid",
  gridTemplate: "auto / auto",
  justifyContent: "center",
  position: "relative",
  textAlign: "center",
  whiteSpace: "nowrap",
  backgroundColor: "rgba(0, 0, 0, 0)",
  padding: "0 6px",
  fontSize: "12px",
  lineHeight: "20px",
  flexShrink: 0,
  textTransform: "none",
  minHeight: "auto",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

const TabContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "18px",
  marginBottom: "17px",
  maxWidth: "150px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}));

const ActionsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  padding: "0 4px",
}));

const ActionButton = styled(IconButton)(({ theme }) => ({
  alignItems: "center",
  borderRadius: "4px",
  color: "rgb(66, 66, 66)",
  display: "flex",
  fontWeight: 600,
  justifyContent: "center",
  lineHeight: "20px",
  maxWidth: "32px",
  minWidth: "32px",
  overflow: "hidden",
  textAlign: "center",
  height: "32px",
  width: "32px",
  padding: "5px",
  backgroundColor: "rgba(0, 0, 0, 0)",
  border: "1px solid rgba(0, 0, 0, 0)",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

const JoinButton = styled(Button)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: "rgb(91, 95, 199)",
  borderRadius: "4px",
  color: "rgb(255, 255, 255)",
  cursor: "pointer",
  display: "flex",
  height: "32px",
  justifyContent: "center",
  marginLeft: "16px",
  maxWidth: "280px",
  position: "relative",
  textAlign: "center",
  userSelect: "none",
  padding: "0 8px",
  fontSize: "12px",
  lineHeight: "13.8px",
  fontWeight: 600,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgb(81, 85, 189)",
  },
}));

const ParticipantButton = styled(Button)(({ theme }) => ({
  alignItems: "center",
  borderRadius: "4px",
  color: "rgb(66, 66, 66)",
  display: "flex",
  height: "32px",
  justifyContent: "center",
  minWidth: "28px",
  overflow: "hidden",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "12px",
  lineHeight: "20px",
  backgroundColor: "rgba(0, 0, 0, 0)",
  padding: "0 1px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

const MobileBackButton = styled(IconButton)(({ theme }) => ({
  color: "rgb(87, 90, 178)",
  fontSize: "20px",
  fontWeight: 600,
  height: "32px",
  width: "32px",
  minWidth: "32px",
  padding: "6px",
  marginRight: "8px",
  "&:hover": {
    backgroundColor: "rgba(87, 90, 178, 0.04)",
  },
}));

const tabs = [
  { id: "chat", label: "Trò chuyện", active: true },
  { id: "shared", label: "Đã chia sẻ", active: false },
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
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] =
    useState<null | HTMLElement>(null);
  const [moreMenuAnchorEl, setMoreMenuAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

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

  const mobileMenuOpen = Boolean(mobileMenuAnchorEl);
  const moreMenuOpen = Boolean(moreMenuAnchorEl);

  // Desktop: show first 3 actions directly, rest in more menu
  const maxVisibleActions = 3;
  const visibleActions = actionItems.slice(0, maxVisibleActions);
  const hiddenActions = actionItems.slice(maxVisibleActions);

  return (
    <ActionBarContainer>
      <ActionBarContent>
        {/* Left Section */}
        <LeftSection>
          {!isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LogoContainer>
                <LogoIcon size={20} isMobile={false} />
              </LogoContainer>
              <TitleSection isMobile={false}>
                <TitleContainer>
                  <Tooltip
                    title="Hop dong chu dau tu tu"
                    placement="bottom-start"
                    arrow
                  >
                    <TitleText component="h2" isMobile={false}>
                      Hop dong chu dau tu tu
                    </TitleText>
                  </Tooltip>
                </TitleContainer>
              </TitleSection>
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <MobileBackButton onClick={handleBackClick} aria-label="Quay lại">
                <ArrowLeft size={20} />
              </MobileBackButton>
              <Tooltip title="Chat" placement="bottom-start" arrow>
                <TitleText
                  component="h2"
                  isMobile={true}
                  sx={{ fontSize: "20px", fontWeight: 700 }}
                >
                  Chat
                </TitleText>
              </Tooltip>
            </Box>
          )}
        </LeftSection>

        {/* Center Section - Tabs */}
        {!isMobile && (
          <TabsContainer>
            <Box
              sx={{
                display: "flex",
                flexBasis: "0%",
                flexGrow: 1,
                maxWidth: "100%",
                minWidth: "241px",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <TabList
                role="tablist"
                aria-orientation="horizontal"
                sx={{ margin: "9px 0 0 98px" }}
              >
                {tabs.map((tab) => (
                  <Tab
                    key={tab.id}
                    role="tab"
                    type="button"
                    aria-selected={activeTab === tab.id}
                    active={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <TabContent>{tab.label}</TabContent>
                  </Tab>
                ))}
              </TabList>
            </Box>
          </TabsContainer>
        )}

        {/* Right Section - Actions */}
        <ActionsContainer
          role="toolbar"
          aria-label="Hành động trò chuyện"
          isMobile={isMobile}
        >
          {!isMobile ? (
            <>
              {/* Visible action buttons */}
              {visibleActions.map((action) => {
                const IconComponent = action.icon;
                return (
                  <ActionButton
                    key={action.id}
                    type="button"
                    aria-label={action.ariaLabel}
                    aria-keyshortcuts={action.keyshortcuts}
                  >
                    <IconComponent size={20} />
                  </ActionButton>
                );
              })}

              {/* More menu if there are hidden actions */}
              {hiddenActions.length > 0 && (
                <Box sx={{ position: "relative" }}>
                  <ActionButton
                    type="button"
                    aria-haspopup="menu"
                    aria-label="Xem thêm tùy chọn trò chuyện"
                    aria-expanded={moreMenuOpen}
                    onClick={handleMoreMenuOpen}
                  >
                    <MoreHorizontal size={20} />
                  </ActionButton>

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
                    {hiddenActions.map((action) => {
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
                </Box>
              )}
            </>
          ) : (
            <Box sx={{ position: "relative" }}>
              <ActionButton
                type="button"
                aria-haspopup="menu"
                aria-label="Xem thêm tùy chọn"
                aria-expanded={mobileMenuOpen}
                onClick={handleMobileMenuOpen}
              >
                <MoreHorizontal size={20} />
              </ActionButton>

              <Menu
                open={mobileMenuOpen}
                anchorEl={mobileMenuAnchorEl}
                onClose={handleMobileMenuClose}
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
                    sx: { minWidth: 180 },
                  },
                }}
              >
                {actionItems.map((action) => {
                  const IconComponent = action.icon;
                  return (
                    <MenuItem
                      key={action.id}
                      dense
                      onClick={handleMobileMenuClose}
                    >
                      <IconComponent size={16} style={{ marginRight: 8 }} />
                      {action.label}
                    </MenuItem>
                  );
                })}
                <Divider />
                {tabs.map((tab) => (
                  <MenuItem
                    dense
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      handleMobileMenuClose();
                    }}
                  >
                    {tab.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </ActionsContainer>
      </ActionBarContent>
    </ActionBarContainer>
  );
}
