import React, { useState } from "react";
import { Box, IconButton, Button, Typography, Divider } from "@mui/material";
import {
  Calendar,
  Search,
  Users,
  List,
  MoreHorizontal,
  PanelRightOpen,
  Plus,
} from "lucide-react";
import { styled } from "@mui/material/styles";

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

const LogoIcon = styled(Calendar)(({ theme }) => ({
  backgroundColor: "rgb(197, 203, 250)",
  borderRadius: "50%",
  color: "rgb(91, 95, 199)",
  padding: "6px",
  fontSize: "32px",
}));

const TitleSection = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100%",
  width: "100%",
  flexDirection: "column",
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

const TitleText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "26px",
  marginLeft: "2px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  "@media (max-width: 640px)": {
    paddingTop: "3px",
    fontSize: "14px",
    lineHeight: "20px",
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

const ActionsContainer = styled(Box)(({ theme }) => ({
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

const tabs = [
  { id: "chat", label: "Trò chuyện", active: true },
  { id: "shared", label: "Đã chia sẻ", active: false },
  { id: "recap", label: "Tóm tắt", active: false },
];

export default function ChatActionBar() {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <ActionBarContainer>
      <ActionBarContent>
        {/* Left Section */}
        <LeftSection>
          <LogoContainer>
            <LogoIcon size={20} />
          </LogoContainer>
          <TitleSection>
            <TitleContainer>
              <Box
                sx={{
                  fontWeight: 700,
                  maxWidth: "fit-content",
                  overflow: "hidden",
                }}
              >
                <Box sx={{ display: "flex", fontWeight: 700 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <TitleText component="h2" aria-hidden="true">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <span title="ESP/ESS - Stand up">
                          <p>Hop dong chu dau tu tu</p>
                        </span>
                      </Box>
                    </TitleText>
                  </Box>
                  <Box
                    component="ul"
                    role="list"
                    aria-label="Người dự cuộc trò chuyện"
                    sx={{
                      borderRadius: "4px",
                      color: "rgb(66, 66, 66)",
                      display: "flex",
                      fontWeight: 700,
                      lineHeight: "23px",
                      minHeight: "24px",
                      zIndex: 1000,
                      border: "1px solid rgba(0, 0, 0, 0)",
                    }}
                  />
                </Box>
              </Box>
            </TitleContainer>
          </TitleSection>
        </LeftSection>

        {/* Center Section - Tabs */}
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

        {/* Right Section - Actions */}
        <ActionsContainer role="toolbar" aria-label="Hành động trò chuyện">
          <Box
            sx={{ display: "flex", alignItems: "center", marginRight: "8px" }}
          />

          <ActionButton type="button" aria-label="Chi tiết cuộc họp">
            <List size={20} />
          </ActionButton>

          <Box
            role="presentation"
            aria-label="Tính năng Ngăn bên"
            sx={{ display: "flex" }}
          >
            <ActionButton
              type="button"
              aria-label="Tìm trong cuộc trò chuyện (⌘ F)"
              aria-keyshortcuts="⌘ F"
            >
              <Search size={20} />
            </ActionButton>

            <ActionButton
              type="button"
              aria-label="Mở chi tiết cuộc trò chuyện (⌃ ⌘ E)"
              aria-keyshortcuts="⌃ ⌘ E"
            >
              <PanelRightOpen size={20} />
            </ActionButton>
          </Box>

          <Box sx={{ position: "relative" }}>
            <ActionButton
              type="button"
              aria-haspopup="menu"
              aria-label="Xem thêm tùy chọn trò chuyện"
            >
              <MoreHorizontal size={20} />
            </ActionButton>
          </Box>
        </ActionsContainer>
      </ActionBarContent>
    </ActionBarContainer>
  );
}
