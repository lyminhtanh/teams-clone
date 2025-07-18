import React from "react";
import {
  Box,
  IconButton,
  Tooltip,
  Badge,
  Divider,
  Avatar,
} from "@mui/material";
import {
  ChatRounded,
  CalendarTodayRounded,
  CallRounded,
  FolderRounded,
  MoreHorizRounded,
  DashboardRounded,
  PeopleRounded,
  BusinessCenterRounded,
  AssessmentRounded,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useMenu } from "../context/MenuContext";

const RAIL_WIDTH = 64;

const RailContainer = styled(Box)(({ theme }) => ({
  width: RAIL_WIDTH,
  height: "calc(100vh - 48px)",
  backgroundColor: theme.palette.mode === "dark" ? "#2b2b2b" : "#f3f2f1",
  borderRight: `1px solid ${theme.palette.divider}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(1, 0),
  position: "sticky",
  top: 48,
  zIndex: theme.zIndex.drawer + 1,
}));

const RailButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
  width: 48,
  height: 48,
  margin: theme.spacing(0.25, 0),
  borderRadius: 8,
  backgroundColor: active ? theme.palette.primary.main : "transparent",
  color: active
    ? theme.palette.primary.contrastText
    : theme.palette.text.secondary,
  border: active
    ? `2px solid ${theme.palette.primary.main}`
    : "2px solid transparent",
  position: "relative",

  "&:hover": {
    backgroundColor: active
      ? theme.palette.primary.dark
      : theme.palette.action.hover,
  },

  "&:before": active
    ? {
        content: '""',
        position: "absolute",
        left: -8,
        top: "50%",
        transform: "translateY(-50%)",
        width: 4,
        height: 24,
        backgroundColor: theme.palette.primary.main,
        borderRadius: "0 2px 2px 0",
      }
    : {},
}));

const railItems = [
  {
    id: "dashboard",
    icon: <DashboardRounded />,
    label: "Dashboard",
    badge: null,
  },
  {
    id: "chat",
    icon: <ChatRounded />,
    label: "Chat",
    badge: 3,
  },
  {
    id: "calendar",
    icon: <CalendarTodayRounded />,
    label: "Calendar",
    badge: null,
  },
  {
    id: "calls",
    icon: <CallRounded />,
    label: "Calls",
    badge: null,
  },
  {
    id: "customers",
    icon: <PeopleRounded />,
    label: "Customers",
    badge: 12,
  },
  {
    id: "deals",
    icon: <BusinessCenterRounded />,
    label: "Deals",
    badge: null,
  },
  {
    id: "files",
    icon: <FolderRounded />,
    label: "Files",
    badge: null,
  },
  {
    id: "reports",
    icon: <AssessmentRounded />,
    label: "Reports",
    badge: null,
  },
];

interface TeamsIconRailProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export default function TeamsIconRail({
  activeSection,
  onSectionChange,
}: TeamsIconRailProps) {
  const { isOpen } = useMenu();

  return (
    <RailContainer>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
        {railItems.map((item) => (
          <Tooltip key={item.id} title={item.label} placement="right">
            <Badge
              badgeContent={item.badge}
              color="error"
              overlap="circular"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "0.625rem",
                  height: 16,
                  minWidth: 16,
                  right: 4,
                  top: 4,
                },
              }}
            >
              <RailButton
                active={activeSection === item.id}
                onClick={() => onSectionChange(item.id)}
                size="large"
              >
                {item.icon}
              </RailButton>
            </Badge>
          </Tooltip>
        ))}

        <Divider sx={{ width: 32, my: 1 }} />

        <Tooltip title="More apps" placement="right">
          <RailButton size="large">
            <MoreHorizRounded />
          </RailButton>
        </Tooltip>
      </Box>

      {/* User Avatar at bottom */}
      <Tooltip title="Account" placement="right">
        <IconButton sx={{ mt: "auto", mb: 1 }}>
          <Avatar
            sx={{ width: 32, height: 32 }}
            src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/62be5649228c59d8da1b0e2e/1069c4dc-ca51-4ade-89f5-497d300f5004/128"
          />
        </IconButton>
      </Tooltip>
    </RailContainer>
  );
}
