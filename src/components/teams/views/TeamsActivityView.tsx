import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Activity,
  MessageCircle,
  Phone,
  Video,
  Calendar,
  FileText,
  Users,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "lucide-react";
import { styled } from "@mui/material/styles";

const ActivityContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#faf9f8",
  padding: theme.spacing(3),
  overflow: "auto",
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[1],
}));

const ActivityCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderLeft: `3px solid transparent`,
  "&:hover": {
    boxShadow: theme.shadows[4],
  },
  "&.recent": {
    borderLeftColor: "#5b5fc7",
  },
  "&.missed": {
    borderLeftColor: "#cc4125",
  },
  "&.completed": {
    borderLeftColor: "#92c353",
  },
}));

const activityData = [
  {
    id: "1",
    type: "call",
    title: "Missed call from Tanh Minh Ly",
    time: "2 minutes ago",
    status: "missed",
    avatar: "TL",
    avatarColor: "#e74c3c",
    icon: <Phone size={16} />,
  },
  {
    id: "2",
    type: "message",
    title: "New message in General channel",
    description: "Project update available for review",
    time: "5 minutes ago",
    status: "recent",
    avatar: "#",
    avatarColor: "#6264a7",
    icon: <MessageCircle size={16} />,
  },
  {
    id: "3",
    type: "meeting",
    title: "Daily Standup completed",
    description: "Meeting lasted 25 minutes",
    time: "1 hour ago",
    status: "completed",
    avatar: "DS",
    avatarColor: "#107c10",
    icon: <Video size={16} />,
  },
  {
    id: "4",
    type: "file",
    title: "Document shared: Q4 Report.pdf",
    description: "Shared by Automic IT Team",
    time: "2 hours ago",
    status: "recent",
    avatar: "AI",
    avatarColor: "#8e44ad",
    icon: <FileText size={16} />,
  },
  {
    id: "5",
    type: "calendar",
    title: "Upcoming meeting reminder",
    description: "Client Presentation in 30 minutes",
    time: "3 hours ago",
    status: "recent",
    avatar: "📅",
    avatarColor: "#d83b01",
    icon: <Calendar size={16} />,
  },
  {
    id: "6",
    type: "team",
    title: "New team member added",
    description: "John Smith joined the Development team",
    time: "1 day ago",
    status: "completed",
    avatar: "JS",
    avatarColor: "#0078d4",
    icon: <Users size={16} />,
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "missed":
      return <AlertCircle size={16} color="#cc4125" />;
    case "completed":
      return <CheckCircle2 size={16} color="#92c353" />;
    default:
      return <Clock size={16} color="#5b5fc7" />;
  }
};

export default function TeamsActivityView() {
  return (
    <ActivityContainer className="teams-scrollbar">
      <HeaderSection>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Activity size={24} color="#5b5fc7" />
          <Typography
            variant="h5"
            sx={{ fontWeight: 600 }}
            className="teams-title"
          >
            Activity
          </Typography>
          <Chip
            label="Live"
            size="small"
            sx={{
              backgroundColor: "#92c353",
              color: "white",
              fontWeight: 600,
              animation: "pulse 2s infinite",
            }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              borderColor: "#5b5fc7",
              color: "#5b5fc7",
              "&:hover": {
                backgroundColor: "rgba(91, 95, 199, 0.04)",
              },
            }}
          >
            Filter
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{
              borderColor: "#5b5fc7",
              color: "#5b5fc7",
              "&:hover": {
                backgroundColor: "rgba(91, 95, 199, 0.04)",
              },
            }}
          >
            Mark all as read
          </Button>
        </Box>
      </HeaderSection>

      <Box
        sx={{
          backgroundColor: "background.paper",
          borderRadius: 1,
          boxShadow: 1,
          overflow: "hidden",
        }}
        className="teams-card"
      >
        <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600 }}
            className="teams-subtitle"
          >
            Recent Activity
          </Typography>
        </Box>

        <List sx={{ p: 0 }}>
          {activityData.map((activity, index) => (
            <React.Fragment key={activity.id}>
              <ListItem
                className="teams-fade-in"
                sx={{
                  py: 2,
                  px: 3,
                  "&:hover": {
                    backgroundColor: "action.hover",
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: activity.avatarColor,
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    {activity.avatar}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 0.5,
                      }}
                    >
                      {activity.icon}
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {activity.title}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Box>
                      {activity.description && (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 0.5 }}
                          className="teams-subtitle"
                        >
                          {activity.description}
                        </Typography>
                      )}
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        {getStatusIcon(activity.status)}
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          className="teams-caption"
                        >
                          {activity.time}
                        </Typography>
                      </Box>
                    </Box>
                  }
                />
              </ListItem>
              {index < activityData.length - 1 && (
                <Divider className="teams-divider" />
              )}
            </React.Fragment>
          ))}
        </List>

        <Box
          sx={{
            p: 2,
            textAlign: "center",
            borderTop: 1,
            borderColor: "divider",
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "#5b5fc7",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "rgba(91, 95, 199, 0.04)",
              },
            }}
            className="teams-button-hover"
          >
            View all activity
          </Button>
        </Box>
      </Box>

      {/* Quick Actions Section */}
      <Box
        sx={{
          mt: 3,
          backgroundColor: "background.paper",
          borderRadius: 1,
          p: 3,
          boxShadow: 1,
        }}
        className="teams-card"
      >
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 600 }}
          className="teams-subtitle"
        >
          Quick Actions
        </Typography>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            startIcon={<Phone size={16} />}
            sx={{
              backgroundColor: "#5b5fc7",
              "&:hover": {
                backgroundColor: "#5855c4",
              },
            }}
            className="teams-button-hover"
          >
            Make a call
          </Button>
          <Button
            variant="contained"
            startIcon={<Video size={16} />}
            sx={{
              backgroundColor: "#107c10",
              "&:hover": {
                backgroundColor: "#0e6e0e",
              },
            }}
            className="teams-button-hover"
          >
            Start meeting
          </Button>
          <Button
            variant="outlined"
            startIcon={<MessageCircle size={16} />}
            sx={{
              borderColor: "#5b5fc7",
              color: "#5b5fc7",
              "&:hover": {
                backgroundColor: "rgba(91, 95, 199, 0.04)",
              },
            }}
            className="teams-button-hover"
          >
            New chat
          </Button>
        </Box>
      </Box>
    </ActivityContainer>
  );
}
