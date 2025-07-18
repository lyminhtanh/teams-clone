import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  Popover,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Typography,
  ClickAwayListener,
} from "@mui/material";
import { Search, MoreHorizontal, X, ChevronRight } from "lucide-react";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "rgb(235, 235, 235)",
  color: "rgb(36, 36, 36)",
  boxShadow: "none",
  borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
  position: "sticky",
  top: 0,
  zIndex: theme.zIndex.drawer + 2,
  fontFamily:
    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
  minHeight: 48,
  maxHeight: 48,
  height: 48,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "8px",
  paddingRight: "8px",
  minHeight: 48,
  height: 48,
  maxHeight: "100%",
  userSelect: "none",
  textWrap: "nowrap",
  whiteSpace: "nowrap",
  backgroundColor: "rgb(235, 235, 235)",
  borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
}));

const AppLauncherButton = styled(IconButton)(({ theme }) => ({
  alignItems: "center",
  appearance: "button",
  borderColor: "rgb(36, 36, 36)",
  color: "rgb(36, 36, 36)",
  cursor: "pointer",
  display: "flex",
  fontFamily:
    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
  fontWeight: 600,
  justifyContent: "center",
  lineHeight: "20px",
  marginLeft: "2px",
  marginTop: 0,
  maxWidth: "32px",
  minWidth: "32px",
  overflowX: "hidden",
  overflowY: "hidden",
  paddingBottom: "8px",
  paddingLeft: "8px",
  paddingRight: "8px",
  paddingTop: "8px",
  textAlign: "center",
  textWrap: "nowrap",
  userSelect: "none",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
  backgroundColor: "rgba(0, 0, 0, 0)",
  border: "none",
  outline: "none",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  "&:focus": {
    outline: "none",
  },
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "rgb(250, 250, 250)",
  borderRadius: "4px",
  color: "rgb(66, 66, 66)",
  display: "flex",
  fontFamily:
    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
  height: "32px",
  justifyContent: "space-between",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "600px",
  outline: "rgb(224, 224, 224) solid 1px",
  position: "relative",
  textAlign: "left",
  textWrap: "nowrap",
  userSelect: "none",
  whiteSpace: "nowrap",
  width: "100%",
  marginTop: 0,
  marginBottom: 0,
  cursor: "pointer",
}));

const SearchButton = styled(IconButton)(({ theme }) => ({
  alignItems: "center",
  appearance: "button",
  borderBottomLeftRadius: "4px",
  borderTopLeftRadius: "4px",
  borderColor: "rgb(0, 0, 0)",
  color: "rgb(97, 97, 97)",
  cursor: "pointer",
  display: "flex",
  fill: "rgb(91, 95, 199)",
  fontSize: "16px",
  height: "100%",
  justifyContent: "center",
  lineHeight: "18.4px",
  minWidth: "51px",
  paddingLeft: "20px",
  paddingRight: "2px",
  backgroundColor: "rgba(0, 0, 0, 0)",
  border: "none",
  outline: "none",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  "&:focus": {
    outline: "none",
  },
}));

const HeaderButton = styled(IconButton)(({ theme }) => ({
  alignItems: "center",
  appearance: "button",
  borderRadius: "4px",
  color: "rgb(97, 97, 97)",
  cursor: "pointer",
  display: "inline-flex",
  fontFamily:
    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
  fontWeight: 600,
  justifyContent: "center",
  lineHeight: "20px",
  maxWidth: "32px",
  minWidth: "32px",
  paddingBottom: "5px",
  paddingLeft: "8px",
  paddingRight: "8px",
  paddingTop: "5px",
  position: "relative",
  textAlign: "center",
  textWrap: "nowrap",
  transitionDuration: "0.1s",
  transitionProperty: "background, border, color",
  transitionTimingFunction: "cubic-bezier(0.33, 0, 0.67, 1)",
  userSelect: "none",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
  backgroundColor: "rgba(0, 0, 0, 0)",
  border: "none",
  outline: "none",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  "&:focus": {
    outline: "none",
  },
}));

const ProfileButton = styled(IconButton)(({ theme }) => ({
  alignItems: "center",
  appearance: "button",
  borderRadius: "50%",
  color: "rgb(66, 66, 66)",
  cursor: "pointer",
  display: "inline-flex",
  fontFamily:
    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
  fontWeight: 600,
  justifyContent: "center",
  lineHeight: "20px",
  marginLeft: "5px",
  marginRight: "0px",
  maxHeight: "40px",
  maxWidth: "40px",
  minHeight: "40px",
  minWidth: "40px",
  overflowX: "hidden",
  overflowY: "hidden",
  textAlign: "center",
  textWrap: "nowrap",
  transitionDuration: "0.1s",
  transitionProperty: "background, border, color",
  transitionTimingFunction: "cubic-bezier(0.33, 0, 0.67, 1)",
  userSelect: "none",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
  backgroundColor: "rgba(0, 0, 0, 0)",
  border: "none",
  outline: "none",
  padding: 0,
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  "&:focus": {
    outline: "none",
  },
}));

// App Launcher Drawer styled
const AppLauncherDrawer = styled(Paper)(({ theme }) => ({
  position: "absolute",
  left: 0,
  top: "48px",
  width: "320px",
  maxHeight: "832px",
  backgroundColor: "rgb(255, 255, 255)",
  borderColor: "rgb(36, 36, 36)",
  color: "rgb(36, 36, 36)",
  filter:
    "drop-shadow(rgba(0, 0, 0, 0.12) 0px 2px 8px) drop-shadow(rgba(0, 0, 0, 0.14) 0px 8px 16px)",
  fontFamily:
    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
  lineHeight: "20px",
  overflowX: "auto",
  overflowY: "auto",
  textAlign: "left",
  zIndex: theme.zIndex.modal,
  animation: "slideIn 0.4s cubic-bezier(0, 0, 0, 1)",
  "@keyframes slideIn": {
    from: {
      transform: "matrix(1, 0, 0, 1, 0, -10)",
      opacity: 0,
    },
    to: {
      transform: "matrix(1, 0, 0, 1, 0, 0)",
      opacity: 1,
    },
  },
}));

// Search Popover styled
const SearchPopover = styled(Paper)(({ theme }) => ({
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  marginTop: "2px",
  maxHeight: "400px",
  backgroundColor: "rgb(255, 255, 255)",
  borderRadius: "4px",
  boxShadow:
    "rgba(0, 0, 0, 0.12) 0px 2px 8px, rgba(0, 0, 0, 0.14) 0px 8px 16px",
  overflowX: "hidden",
  overflowY: "auto",
  zIndex: 1010,
  width: "100%",
}));

// Teams Logo SVG Component
const TeamsLogo = () => (
  <svg
    width="20"
    height="20"
    viewBox="2 2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
    style={{
      marginLeft: "4px",
      verticalAlign: "middle",
      color: "rgb(91, 95, 199)",
      fill: "rgb(91, 95, 199)",
    }}
  >
    <path
      d="M21.0344 10.0012H16.8734L15.7124 10.9402V15.5972C15.7124 17.3262 17.1134 18.7282 18.8424 18.7282C20.5724 18.7282 21.9734 17.3262 21.9734 15.5972V10.9402C21.9734 10.4222 21.5534 10.0012 21.0344 10.0012Z"
      fill="#5059C9"
    />
    <path
      d="M22 7C22 8.104 21.105 9 20 9C18.895 9 18 8.104 18 7C18 5.896 18.895 5 20 5C21.105 5 22 5.896 22 7Z"
      fill="#5059C9"
    />
    <path
      d="M9.89214 10.0046H17.0961C17.5921 10.0046 17.9941 10.4066 17.9941 10.9026V16.5946C17.9941 19.0306 16.0201 21.0046 13.5841 21.0046H13.4041C10.9681 21.0046 8.99414 19.0306 8.99414 16.5946V10.9026C8.99414 10.4066 9.39614 10.0046 9.89214 10.0046Z"
      fill="#7B83EB"
    />
    <path
      d="M16.9065 5.99999C16.9065 7.60499 15.6055 8.90699 13.9995 8.90699C12.3945 8.90699 11.0935 7.60499 11.0935 5.99999C11.0935 4.39499 12.3945 3.09299 13.9995 3.09299C15.6055 3.09299 16.9065 4.39499 16.9065 5.99999Z"
      fill="#7B83EB"
    />
    <path
      opacity="0.5"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.0001 8.6814V8.0004C15.0001 7.4504 14.5281 7.0004 13.9511 7.0004H11.2711C11.6881 8.0944 12.7391 8.8754 13.9801 8.8754C14.3401 8.8754 14.6821 8.8014 15.0001 8.6814ZM8.99414 10.9024C8.99414 10.4064 9.39614 10.0044 9.89214 10.0044H15.0001V17.8394C15.0001 18.3894 14.3821 19.0004 13.7451 19.0004H9.71514C9.26214 18.3074 8.99414 17.4834 8.99414 16.5944V10.9024Z"
      fill="black"
    />
    <path
      d="M3 18C2.45 18 2 17.55 2 17V7C2 6.45 2.45 6 3 6H13C13.55 6 14 6.45 14 7V17C14 17.55 13.55 18 13 18H3Z"
      fill="#4B53BC"
    />
    <path
      d="M11.0001 10H8.83511V15.82H7.41211V10H5.23511V8.57001H11.0001V10Z"
      fill="white"
    />
  </svg>
);

// App Launcher Icon (3x3 grid of dots)
const AppLauncherIcon = () => (
  <svg
    fontSize="20px"
    fill="currentColor"
    aria-hidden="true"
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.25 4a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm12 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM16 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM17.25 4a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM10 17.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM11.25 10a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM10 5.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM5.25 16a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM4 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
      fill="currentColor"
    />
  </svg>
);

// Microsoft Office Apps data
const officeApps = [
  { name: "Outlook", icon: "📧", color: "#0078d4" },
  { name: "OneDrive", icon: "☁️", color: "#0078d4" },
  { name: "Word", icon: "📄", color: "#185abd" },
  { name: "Excel", icon: "📊", color: "#107c41" },
  { name: "PowerPoint", icon: "📽️", color: "#d24726" },
  { name: "OneNote", icon: "📝", color: "#7719aa" },
  { name: "SharePoint", icon: "🌐", color: "#038387" },
  { name: "Teams", icon: "👥", color: "#4b53bc" },
  { name: "Engage", icon: "💬", color: "#0472d8" },
];

// Search categories and recent results
const searchCategories = [
  "Tin nhắn",
  "Tệp",
  "Cuộc trò chuyện Nhóm",
  "Teams và Kênh",
];
const recentSearches = [
  {
    type: "TL",
    content: "mysql -u root -p",
    time: "02:04 PM",
    user: "Neha Malhotra",
  },
  { type: "TL", content: "yes", time: "01:55 PM", user: "Neha Malhotra" },
  {
    type: "NM",
    content: "you can guide me what steps I need to perform",
    time: "01:54 PM",
    user: "Tanh Minh Ly",
  },
  {
    type: "NM",
    content: "can i call please",
    time: "01:54 PM",
    user: "Tanh Minh Ly",
  },
  {
    type: "TL",
    content: "I think there's no constraint left for IDPConfigurationAdmin ?",
    time: "01:54 PM",
    user: "Neha Malhotra",
  },
  {
    type: "NM",
    content: "can I call you ?",
    time: "01:54 PM",
    user: "Tanh Minh Ly",
  },
];

export default function TeamsHeader() {
  const [appLauncherOpen, setAppLauncherOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const appLauncherRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleAppLauncherToggle = () => {
    setAppLauncherOpen(!appLauncherOpen);
    setSearchOpen(false);
  };

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
    setAppLauncherOpen(false);
  };

  const handleClickAway = () => {
    setAppLauncherOpen(false);
    setSearchOpen(false);
  };

  // Close popovers on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setAppLauncherOpen(false);
        setSearchOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <StyledAppBar>
        <StyledToolbar>
          {/* Left Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              height: "100%",
              position: "relative",
            }}
            ref={appLauncherRef}
          >
            <AppLauncherButton
              onClick={handleAppLauncherToggle}
              aria-expanded={appLauncherOpen}
              aria-label={
                appLauncherOpen ? "Close app launcher" : "Open app launcher"
              }
            >
              <AppLauncherIcon />
            </AppLauncherButton>
            <TeamsLogo />

            {/* App Launcher Drawer */}
            {appLauncherOpen && (
              <AppLauncherDrawer elevation={8}>
                {/* Header */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "64px",
                    paddingX: "16px",
                    borderBottom: "1px solid rgb(240, 240, 240)",
                  }}
                >
                  <IconButton
                    onClick={() => setAppLauncherOpen(false)}
                    sx={{
                      color: "rgb(36, 36, 36)",
                      padding: "5px",
                      "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
                    }}
                  >
                    <X size={20} />
                  </IconButton>
                  <Box
                    component="a"
                    href="https://m365.cloud.microsoft/"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      color: "rgb(79, 82, 178)",
                      textDecoration: "none",
                      paddingRight: "16px",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    <span>Microsoft 365</span>
                    <ChevronRight size={16} />
                  </Box>
                </Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    paddingLeft: "28px",
                    paddingTop: "16px",
                    paddingBottom: "8px",
                    color: "rgb(36, 36, 36)",
                  }}
                >
                  Apps
                </Typography>

                {/* Apps Grid */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    paddingX: "16px",
                    paddingBottom: "16px",
                    minHeight: "240px",
                    width: "320px",
                  }}
                >
                  {officeApps.map((app) => (
                    <Box
                      key={app.name}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "48px",
                        justifyContent: "space-between",
                        width: "50%",
                      }}
                    >
                      <Box
                        component="button"
                        sx={{
                          alignItems: "center",
                          appearance: "button",
                          backgroundColor: "rgb(255, 255, 255)",
                          border: "none",
                          color: "rgb(36, 36, 36)",
                          cursor: "pointer",
                          display: "flex",
                          fontFamily: "inherit",
                          justifyContent: "flex-start",
                          lineHeight: "16px",
                          minHeight: "48px",
                          minWidth: "144px",
                          paddingBottom: "8px",
                          paddingLeft: "18px",
                          paddingRight: "4px",
                          paddingTop: "8px",
                          textAlign: "left",
                          transitionDuration: "0.1s",
                          transitionProperty: "background, border, color",
                          transitionTimingFunction:
                            "cubic-bezier(0.33, 0, 0.67, 1)",
                          "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.04)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            alignItems: "center",
                            display: "flex",
                            fontSize: "28px",
                            height: "28px",
                            justifyContent: "center",
                            marginRight: "12px",
                            width: "28px",
                          }}
                        >
                          {app.icon}
                        </Box>
                        <span
                          style={{
                            color: "rgb(36, 36, 36)",
                            fontSize: "14px",
                            lineHeight: "16px",
                            textAlign: "left",
                          }}
                        >
                          {app.name}
                        </span>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </AppLauncherDrawer>
            )}
          </Box>

          {/* Center Section - Search */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              justifyContent: "center",
              maxWidth: "600px",
              marginX: "16px",
              position: "relative",
            }}
            ref={searchRef}
          >
            <SearchContainer onClick={handleSearchToggle}>
              <SearchButton>
                <Search size={20} />
              </SearchButton>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                }}
              >
                <input
                  placeholder="Search"
                  style={{
                    appearance: "textfield",
                    border: "none",
                    color: "rgb(36, 36, 36)",
                    cursor: "pointer",
                    display: "flex",
                    fontFamily: "inherit",
                    height: "100%",
                    lineHeight: "16.1px",
                    outline: "none",
                    width: "100%",
                    backgroundColor: "transparent",
                    fontSize: "14px",
                  }}
                  readOnly
                />
              </Box>

              {/* Search Popover */}
              {searchOpen && (
                <SearchPopover>
                  <Box sx={{ padding: "16px" }}>
                    {/* Search Categories */}
                    <Box sx={{ marginBottom: "16px" }}>
                      <Box
                        sx={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
                      >
                        {searchCategories.map((category) => (
                          <Chip
                            key={category}
                            label={category}
                            size="small"
                            sx={{
                              backgroundColor: "rgb(245, 245, 245)",
                              color: "rgb(36, 36, 36)",
                              border: "1px solid rgb(224, 224, 224)",
                              "&:hover": {
                                backgroundColor: "rgb(240, 240, 240)",
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    {/* Recent Searches */}
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "rgb(97, 97, 97)",
                        fontSize: "12px",
                        fontWeight: 600,
                        marginBottom: "8px",
                        textTransform: "uppercase",
                      }}
                    >
                      Suggested for you
                    </Typography>

                    <List sx={{ padding: 0 }}>
                      {recentSearches.map((search, index) => (
                        <ListItem
                          key={index}
                          sx={{
                            padding: "8px 0",
                            cursor: "pointer",
                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.04)",
                            },
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: "40px" }}>
                            <Box
                              sx={{
                                width: "28px",
                                height: "28px",
                                borderRadius: "50%",
                                backgroundColor:
                                  search.type === "TL"
                                    ? "rgb(235, 153, 153)"
                                    : "rgb(153, 153, 235)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                                fontSize: "12px",
                                fontWeight: 600,
                              }}
                            >
                              {search.type}
                            </Box>
                          </ListItemIcon>
                          <ListItemText
                            primary={search.content}
                            secondary={search.user}
                            sx={{
                              "& .MuiListItemText-primary": {
                                fontSize: "14px",
                                color: "rgb(36, 36, 36)",
                                fontWeight: 400,
                              },
                              "& .MuiListItemText-secondary": {
                                fontSize: "12px",
                                color: "rgb(97, 97, 97)",
                              },
                            }}
                          />
                          <Typography
                            variant="caption"
                            sx={{
                              color: "rgb(97, 97, 97)",
                              fontSize: "12px",
                            }}
                          >
                            {search.time}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </SearchPopover>
              )}
            </SearchContainer>
          </Box>

          {/* Right Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              height: "100%",
            }}
          >
            <HeaderButton>
              <MoreHorizontal size={20} />
            </HeaderButton>

            <ProfileButton>
              <Box
                sx={{
                  position: "relative",
                  width: "28px",
                  height: "28px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundColor: "rgb(230, 230, 230)",
                    color: "rgb(97, 97, 97)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  TL
                </Box>
                {/* Status indicator */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "rgb(19, 161, 14)",
                    border: "2px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="6" height="6" viewBox="0 0 10 10" fill="white">
                    <path d="M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10Zm2.1-5.9L4.85 6.35a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.9-1.9a.5.5 0 0 1 .7.71Z" />
                  </svg>
                </Box>
              </Box>
            </ProfileButton>
          </Box>
        </StyledToolbar>
      </StyledAppBar>
    </ClickAwayListener>
  );
}
