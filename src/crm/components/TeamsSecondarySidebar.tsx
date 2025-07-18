import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Badge,
  Chip,
  Divider,
  IconButton,
  Fade,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Plus,
  MoreVertical,
  Circle,
  Video,
  Phone,
  Filter,
} from "lucide-react";
import { styled, useTheme } from "@mui/material/styles";
import { useMenu } from "../context/MenuContext";

const SECONDARY_WIDTH = 320;

const SecondaryContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isVisible",
})<{ isVisible: boolean }>(({ theme, isVisible }) => ({
  width: isVisible ? SECONDARY_WIDTH : 0,
  height: "calc(100vh - 48px)",
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  transition: theme.transitions.create(["width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  position: "sticky",
  top: 48,
  [theme.breakpoints.down("md")]: {
    height: "100%",
    position: "relative",
    top: 0,
  },
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 2, 1, 2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const SearchField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 4,
    fontSize: "0.875rem",
    backgroundColor: theme.palette.mode === "dark" ? "#3b3a39" : "#f3f2f1",
    border: "none",
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },
}));

const conversationData = [
  {
    id: "1",
    name: "General",
    type: "channel",
    lastMessage: "New project update available",
    time: "2m ago",
    unread: 3,
    avatar: "#",
    avatarColor: "#6264a7",
  },
  {
    id: "2",
    name: "Tanh Minh Ly",
    type: "chat",
    lastMessage: "Can we schedule a meeting?",
    time: "5m ago",
    unread: 1,
    status: "online",
    avatar: "TL",
    avatarColor: "#e74c3c",
  },
  {
    id: "3",
    name: "Automic IT Team",
    type: "group",
    lastMessage: "Sprint planning session tomorrow",
    time: "1h ago",
    unread: 0,
    avatar: "AI",
    avatarColor: "#8e44ad",
  },
  {
    id: "4",
    name: "Vietnam team daily",
    type: "meeting",
    lastMessage: "Daily standup in 30 minutes",
    time: "2h ago",
    unread: 0,
    avatar: "📅",
  },
];

const customerData = [
  {
    id: "1",
    name: "Acme Corporation",
    email: "contact@acme.com",
    status: "active",
    value: "$125,000",
    avatar: "AC",
    avatarColor: "#2196f3",
  },
  {
    id: "2",
    name: "TechStart Inc",
    email: "hello@techstart.com",
    status: "prospect",
    value: "$85,000",
    avatar: "TS",
    avatarColor: "#ff9800",
  },
];

interface TeamsSecondarySidebarProps {
  activeSection: string;
  onMobileClose?: () => void;
}

export default function TeamsSecondarySidebar({
  activeSection,
  onMobileClose,
}: TeamsSecondarySidebarProps) {
  const { isOpen, closeMenu } = useMenu();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMobileItemClick = () => {
    if (isMobile) {
      closeMenu();
      onMobileClose?.();
    }
  };

  const renderChatContent = () => (
    <Fade in={true} timeout={300}>
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <SectionHeader>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Chat
            </Typography>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <IconButton size="small">
                <Plus size={16} />
              </IconButton>
              <IconButton size="small">
                <Filter size={16} />
              </IconButton>
              <IconButton size="small">
                <MoreVertical size={16} />
              </IconButton>
            </Box>
          </Box>

          <SearchField
            fullWidth
            size="small"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={16} />
                </InputAdornment>
              ),
            }}
          />

          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            <Chip label="Recent" size="small" variant="outlined" />
            <Chip label="Pinned" size="small" variant="outlined" />
            <Chip label="Unread" size="small" variant="outlined" />
          </Box>
        </SectionHeader>

        <List sx={{ flex: 1, overflow: "auto", p: 1 }}>
          {conversationData.map((conversation) => (
            <ListItem key={conversation.id} disablePadding>
              <ListItemButton
                onClick={handleMobileItemClick}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  "&:hover": {
                    backgroundColor: "action.hover",
                  },
                }}
              >
                <ListItemAvatar>
                  <Badge
                    badgeContent={conversation.unread || null}
                    color="error"
                    overlap="circular"
                  >
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        backgroundColor: conversation.avatarColor,
                        fontSize: "0.875rem",
                        fontWeight: 600,
                      }}
                    >
                      {conversation.avatar}
                    </Avatar>
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      {conversation.status === "online" && (
                        <Circle size={8} fill="#6bb700" color="#6bb700" />
                      )}
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {conversation.name}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        display: "block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {conversation.lastMessage}
                    </Typography>
                  }
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 0.5,
                  }}
                >
                  <Typography variant="caption" color="text.secondary">
                    {conversation.time}
                  </Typography>
                  {conversation.type === "meeting" && (
                    <Video size={16} color="#5b5fc7" />
                  )}
                </Box>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Fade>
  );

  const renderCustomersContent = () => (
    <Fade in={true} timeout={300}>
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <SectionHeader>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Customers
            </Typography>
            <IconButton size="small">
              <Plus size={16} />
            </IconButton>
          </Box>

          <SearchField
            fullWidth
            size="small"
            placeholder="Search customers"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={16} />
                </InputAdornment>
              ),
            }}
          />
        </SectionHeader>

        <List sx={{ flex: 1, overflow: "auto", p: 1 }}>
          {customerData.map((customer) => (
            <ListItem key={customer.id} disablePadding>
              <ListItemButton
                onClick={handleMobileItemClick}
                sx={{ borderRadius: 1, mb: 0.5 }}
              >
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      backgroundColor: customer.avatarColor,
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    {customer.avatar}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {customer.name}
                    </Typography>
                  }
                  secondary={
                    <Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                      >
                        {customer.email}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mt: 0.5,
                        }}
                      >
                        <Chip
                          label={customer.status}
                          size="small"
                          color={
                            customer.status === "active" ? "success" : "warning"
                          }
                          sx={{ height: 16, fontSize: "0.6875rem" }}
                        />
                        <Typography
                          variant="caption"
                          sx={{ fontWeight: 600, color: "success.main" }}
                        >
                          {customer.value}
                        </Typography>
                      </Box>
                    </Box>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Fade>
  );

  const renderDefaultContent = () => (
    <Fade in={true} timeout={300}>
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <SectionHeader>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, textTransform: "capitalize" }}
          >
            {activeSection}
          </Typography>
        </SectionHeader>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {activeSection} content coming soon
          </Typography>
        </Box>
      </Box>
    </Fade>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "chat":
        return renderChatContent();
      case "customers":
        return renderCustomersContent();
      default:
        return renderDefaultContent();
    }
  };

  return (
    <SecondaryContainer isVisible={isOpen}>
      {renderContent()}
    </SecondaryContainer>
  );
}
