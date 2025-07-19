import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Calendar,
  Search,
  Users,
  List,
  PanelRightOpen,
  Plus,
  Megaphone,
} from "lucide-react";

// Import our new atomic UI components
import {
  ActionBar,
  ActionBarRow,
  ActionBarSection,
  ActionButton,
  PrimaryButton,
  BackButton,
  Title,
  Tab,
  TabList,
  MoreMenu,
} from "../ui";

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
  {
    id: "add",
    icon: Plus,
    label: "Thêm mới",
    ariaLabel: "Thêm mới",
  },
];

export default function ChatActionBar() {
  const [activeTab, setActiveTab] = useState("chat");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleBackClick = () => {
    // Handle back navigation
    console.log("Back button clicked");
  };

  // Desktop: show first 3 actions directly, rest in more menu
  const maxVisibleActions = 3;
  const visibleActions = actionItems.slice(0, maxVisibleActions);
  const hiddenActions = actionItems.slice(maxVisibleActions);

  // Convert action items to menu format
  const menuItems = (isMobile ? actionItems : hiddenActions).map((action) => ({
    id: action.id,
    label: action.label,
    icon: action.icon,
    onClick: () => console.log(`${action.id} clicked`),
  }));

  return (
    <ActionBar variant="elevated" size="normal" sticky>
      {/* Top Row: Back + Title + Actions */}
      <ActionBarRow
        justify="between"
        align="center"
        spacing={isMobile ? "small" : "medium"}
        isMobile={isMobile}
      >
        {/* Left Section: Back + Title */}
        <ActionBarSection variant="start" flex={1} minWidth={0}>
          <BackButton
            onClick={handleBackClick}
            label="Quay lại"
            size="medium"
          />
          <Title
            variant="compact"
            component="h1"
            showTooltip
            tooltipTitle="Vietnam team daily Trò chuyện - This is a very long title to test ellipsis behavior"
          >
            Vietnam team daily Trò chuyện - This is a very long title to test
            ellipsis behavior
          </Title>
        </ActionBarSection>

        {/* Right Section: Actions */}
        <ActionBarSection variant="end">
          <PrimaryButton
            color="teams"
            size="medium"
            onClick={() => console.log("Join clicked")}
          >
            Tham gia
          </PrimaryButton>

          {/* Desktop: Show individual action icons */}
          {!isMobile &&
            visibleActions.map((action) => (
              <ActionButton
                key={action.id}
                icon={action.icon}
                label={action.label}
                size="medium"
                onClick={() => console.log(`${action.id} clicked`)}
                aria-label={action.ariaLabel}
                aria-keyshortcuts={action.keyshortcuts}
                showTooltip
                tooltipPlacement="bottom"
              />
            ))}

          {/* Show more menu if there are hidden actions (desktop) or on mobile */}
          {((!isMobile && hiddenActions.length > 0) || isMobile) && (
            <MoreMenu
              items={menuItems}
              label="Xem thêm tùy chọn"
              size="medium"
              placement="bottom-end"
            />
          )}
        </ActionBarSection>
      </ActionBarRow>

      {/* Bottom Row: Tabs */}
      <ActionBarRow
        justify="start"
        align="center"
        spacing="none"
        isMobile={isMobile}
      >
        <ActionBarSection variant="start" flex={1} minWidth={44}>
          <TabList spacing="normal" align="left">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                badge={tab.badge}
                showLive={tab.live}
                variant="underline"
                size="medium"
              >
                {tab.label}
              </Tab>
            ))}
          </TabList>
        </ActionBarSection>
      </ActionBarRow>
    </ActionBar>
  );
}
