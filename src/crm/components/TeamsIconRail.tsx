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
  Activity,
  MessageCircle,
  Calendar,
  Phone,
  Users,
  FolderOpen,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import { styled } from "@mui/material/styles";
import { useMenu } from "../context/MenuContext";

const RAIL_WIDTH = 64;

const RailContainer = styled(Box)(({ theme }) => ({
  width: RAIL_WIDTH,
  height: "calc(100vh - 48px)",
  backgroundColor: theme.palette.mode === "dark" ? "#2b2b2b" : "#ebeaea",
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
  height: 56,
  margin: theme.spacing(0.5, 0),
  borderRadius: 8,
  backgroundColor: active ? "#5b5fc7" : "transparent",
  color: active
    ? "white"
    : theme.palette.mode === "dark"
      ? "#8a8a8a"
      : "#616161",
  border: "none",
  position: "relative",
  flexDirection: "column",
  fontSize: "10px",
  fontWeight: 400,
  textTransform: "none",
  lineHeight: 1.2,
  gap: 1,

  "&:hover": {
    backgroundColor: active
      ? "#5855c4"
      : theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(0, 0, 0, 0.04)",
  },

  "&:before": active
    ? {
        content: '""',
        position: "absolute",
        left: -8,
        top: "50%",
        transform: "translateY(-50%)",
        width: 3,
        height: 20,
        backgroundColor: "#5b5fc7",
        borderRadius: "0 2px 2px 0",
      }
    : {},
}));

const railItems = [
  {
    id: "activity",
    icon: <Activity size={24} />,
    label: "Activity",
    badge: null,
  },
  {
    id: "chat",
    icon: <MessageCircle size={24} />,
    label: "Chat",
    badge: 3,
  },
  {
    id: "calendar",
    icon: <Calendar size={24} />,
    label: "Calendar",
    badge: null,
  },
  {
    id: "calls",
    icon: <Phone size={24} />,
    label: "Calls",
    badge: null,
  },
  {
    id: "customers",
    icon: <Users size={24} />,
    label: "Teams",
    badge: null,
  },
  {
    id: "files",
    icon: <FolderOpen size={24} />,
    label: "Files",
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
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 0 }}>
        {railItems.map((item) => (
          <Tooltip key={item.id} title={item.label} placement="right">
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Badge
                badgeContent={item.badge}
                color="error"
                overlap="circular"
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: "0.625rem",
                    height: 16,
                    minWidth: 16,
                    right: 8,
                    top: 8,
                    backgroundColor: "#cc4125",
                  },
                }}
              >
                <RailButton
                  active={activeSection === item.id}
                  onClick={() => onSectionChange(item.id)}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5,
                    fontSize: "10px",
                    textTransform: "none",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "10px",
                      lineHeight: 1,
                      textAlign: "center",
                      width: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      maxWidth: 44,
                    }}
                  >
                    {item.label}
                  </Box>
                </RailButton>
              </Badge>
            </Box>
          </Tooltip>
        ))}

        <Divider
          sx={{
            width: 32,
            my: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#444" : "#d1d1d1",
          }}
        />

        <Tooltip title="More apps" placement="right">
          <RailButton
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
              fontSize: "10px",
              textTransform: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MoreHorizontal size={24} />
            </Box>
            <Box
              sx={{
                fontSize: "10px",
                lineHeight: 1,
                textAlign: "center",
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: 44,
              }}
            >
              More
            </Box>
          </RailButton>
        </Tooltip>

        <Divider
          sx={{
            width: 32,
            my: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#444" : "#d1d1d1",
          }}
        />

        <Tooltip title="Apps" placement="right">
          <RailButton
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
              fontSize: "10px",
              textTransform: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Plus size={24} />
            </Box>
            <Box
              sx={{
                fontSize: "10px",
                lineHeight: 1,
                textAlign: "center",
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: 44,
              }}
            >
              Apps
            </Box>
          </RailButton>
        </Tooltip>
      </Box>

      {/* User Avatar at bottom */}
      <Tooltip title="Account" placement="right">
        <IconButton sx={{ mt: "auto", mb: 1, position: "relative" }}>
          <Avatar
            sx={{ width: 28, height: 28, fontSize: "12px", fontWeight: "bold" }}
          >
            TL
          </Avatar>
          {/* Status indicator */}
          <Box
            sx={{
              position: "absolute",
              bottom: 2,
              right: 2,
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#92c353",
              border: "2px solid white",
            }}
          />
        </IconButton>
      </Tooltip>
    </RailContainer>
  );
}
