import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Typography,
  ClickAwayListener,
} from "@mui/material";
import {
  Search,
  MoreHorizontal,
  X,
  ChevronRight,
  Grip,
  ChartNoAxesGantt,
} from "lucide-react";
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
  paddingLeft: "0px",
  paddingRight: "20px",
  minHeight: 48,
  height: 48,
  maxHeight: "100%",
  userSelect: "none",
  textWrap: "nowrap",
  whiteSpace: "nowrap",
  backgroundColor: "rgb(235, 235, 235)",
  borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
}));

const LeftSection = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  height: "100%",
  paddingLeft: "0px",
  position: "relative",
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
  gridArea: "primary",
  gridRow: "primary",
  justifyContent: "center",
  lineHeight: "20px",
  marginLeft: "-2px",
  marginTop: 0,
  maxWidth: "32px",
  minWidth: "32px",
  overflowX: "hidden",
  overflowY: "hidden",
  paddingBottom: "12px",
  paddingLeft: "8px",
  paddingRight: "8px",
  paddingTop: "13px",
  textAlign: "center",
  textWrap: "nowrap",
  transformOrigin: "0% 50%",
  transitionBehavior: "allow-discrete",
  transitionDuration: "0.25s",
  transitionProperty: "transform, visibility",
  transitionTimingFunction: "cubic-bezier(0.8, 0, 0.78, 1)",
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

const CenterSection = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexGrow: 1,
  justifyContent: "center",
  maxWidth: "676px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "16px",
  paddingRight: "16px",
  position: "relative",
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
  maxWidth: "824px",
  outline: "rgb(224, 224, 224) solid 1px",
  position: "relative",
  textAlign: "left",
  textWrap: "nowrap",
  userSelect: "none",
  whiteSpace: "nowrap",
  width: "100%",
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

const RightSection = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "flex-end",
  marginLeft: "3px",
  paddingRight: "0px",
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
const SearchPopover = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  position: isMobile ? "fixed" : "absolute",
  top: isMobile ? "48px" : "100%",
  left: 0,
  right: 0,
  bottom: isMobile ? 0 : "auto",
  marginTop: isMobile ? "0" : "2px",
  maxHeight: isMobile ? "calc(100vh - 48px)" : "400px",
  height: isMobile ? "calc(100vh - 48px)" : "auto",
  backgroundColor: "rgb(255, 255, 255)",
  borderRadius: isMobile ? "0" : "4px",
  boxShadow:
    "rgba(0, 0, 0, 0.12) 0px 2px 8px, rgba(0, 0, 0, 0.14) 0px 8px 16px",
  overflowX: "hidden",
  overflowY: "auto",
  zIndex: 1010,
  width: isMobile ? "100vw" : "100%",
}));

// App Launcher Icon using Grip from lucide-react
const AppLauncherIcon = () => <Grip size={20} color="rgb(36, 36, 36)" />;

// Close Icon for app launcher
const CloseIcon = () => (
  <>
    {/* Filled state when close button is hovered/focused */}
    <svg
      fontSize="20px"
      fill="currentColor"
      aria-hidden="true"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "none",
        borderColor: "rgb(36, 36, 36)",
        color: "rgb(36, 36, 36)",
        cursor: "default",
        fill: "rgb(36, 36, 36)",
        fontFamily:
          '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
        fontSize: "20px",
        fontWeight: 600,
        height: "1em",
        lineHeight: "0px",
        textAlign: "center",
        textWrap: "nowrap",
        userSelect: "none",
        whiteSpace: "nowrap",
        width: "1em",
      }}
    >
      <path
        d="M5.75 4a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm0 6a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM4 17.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM11.75 4a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM10 11.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM11.75 16a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM16 5.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM17.75 10a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM16 17.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"
        fill="currentColor"
      />
    </svg>
    {/* Regular state by default */}
    <svg
      fontSize="20px"
      fill="currentColor"
      aria-hidden="true"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "block",
        borderColor: "rgb(36, 36, 36)",
        color: "rgb(36, 36, 36)",
        cursor: "default",
        fill: "rgb(36, 36, 36)",
        fontFamily:
          '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
        fontSize: "20px",
        fontWeight: 600,
        height: "1em",
        lineHeight: "0px",
        textAlign: "center",
        textWrap: "nowrap",
        userSelect: "none",
        whiteSpace: "nowrap",
        width: "1em",
      }}
    >
      <path
        d="M5.25 4a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm12 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM16 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM17.25 4a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM10 17.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM11.25 10a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM10 5.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM5.25 16a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM4 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
        fill="currentColor"
      />
    </svg>
  </>
);

// Arrow Right Icon with states
const ArrowRightIcon = () => (
  <>
    {/* Filled state for hover */}
    <svg
      fontSize="16px"
      fill="currentColor"
      aria-hidden="true"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "none",
        borderColor: "rgb(79, 82, 178)",
        color: "rgb(79, 82, 178)",
        cursor: "pointer",
        fill: "rgb(79, 82, 178)",
        fontFamily:
          '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
        fontSize: "16px",
        height: "1em",
        lineHeight: "0px",
        marginBottom: "8px",
        marginLeft: "8px",
        marginRight: "8px",
        marginTop: "8px",
        textAlign: "left",
        userSelect: "text",
        width: "1em",
      }}
    >
      <path
        d="M11.27 3.2a.75.75 0 0 0-1.04 1.1l5.24 4.95H2.75a.75.75 0 0 0 0 1.5h12.73l-5.25 4.96a.75.75 0 1 0 1.04 1.09l6.41-6.07a1 1 0 0 0 0-1.46l-6.41-6.06Z"
        fill="currentColor"
      />
    </svg>
    {/* Regular state by default */}
    <svg
      fontSize="16px"
      fill="currentColor"
      aria-hidden="true"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "block",
        borderColor: "rgb(79, 82, 178)",
        color: "rgb(79, 82, 178)",
        cursor: "pointer",
        fill: "rgb(79, 82, 178)",
        fontFamily:
          '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
        fontSize: "16px",
        height: "1em",
        lineHeight: "0px",
        marginBottom: "8px",
        marginLeft: "8px",
        marginRight: "8px",
        marginTop: "8px",
        textAlign: "left",
        userSelect: "text",
        width: "1em",
      }}
    >
      <path
        d="M10.84 3.13a.5.5 0 0 0-.68.74l6.17 5.63H2.5a.5.5 0 0 0 0 1h13.83l-6.17 5.63a.5.5 0 0 0 .68.74l6.91-6.32a.75.75 0 0 0 0-1.1l-6.91-6.32Z"
        fill="currentColor"
      />
    </svg>
  </>
);

// Microsoft Office Apps data with actual Office icons
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
  "Cuộc trò chuyện Nh��m",
  "Teams và Kênh",
];

const recentSearches = [
  {
    type: "TL",
    content: "Tanh (Bạn): mysql -u root -p",
    time: "02:04 PM",
    user: "Neha Malhotra",
  },
  {
    type: "TL",
    content: "Tanh (Bạn): yes",
    time: "01:55 PM",
    user: "Neha Malhotra",
  },
  {
    type: "NM",
    content: "Neha: you can guide me what steps I need to perform",
    time: "01:54 PM",
    user: "Tanh Minh Ly",
  },
  {
    type: "NM",
    content: "Neha: can i call please",
    time: "01:54 PM",
    user: "Tanh Minh Ly",
  },
  {
    type: "TL",
    content:
      "Tanh (Bạn): I think there's no constraint left for IDPConfigurationAdmin ?",
    time: "01:54 PM",
    user: "Neha Malhotra",
  },
  {
    type: "NM",
    content: "Neha: can I call you ?",
    time: "01:54 PM",
    user: "Tanh Minh Ly",
  },
];

interface TeamsHeaderProps {
  isMobile?: boolean;
  onMobileMenuToggle?: () => void;
}

export default function TeamsHeader(props: TeamsHeaderProps = {}) {
  const { isMobile = false, onMobileMenuToggle } = props;
  const [appLauncherOpen, setAppLauncherOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
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
          <LeftSection ref={appLauncherRef}>
            <Box
              sx={{
                alignItems: "center",
                borderColor: "rgb(255, 255, 255)",
                color: "rgb(255, 255, 255)",
                display: "grid",
                fontFamily:
                  '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                gridTemplate: '"primary secondary" auto / auto auto',
                gridTemplateAreas: '"primary secondary"',
                gridTemplateRows: "auto",
                justifyContent: "space-evenly",
                position: "relative",
                textAlign: "left",
                textWrap: "nowrap",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              {isMobile ? (
                <AppLauncherButton
                  onClick={onMobileMenuToggle}
                  aria-label="Open mobile menu"
                >
                  <span
                    style={{
                      alignItems: "center",
                      borderColor: "rgb(36, 36, 36)",
                      color: "rgb(36, 36, 36)",
                      cursor: "default",
                      display: "flex",
                      fontFamily:
                        '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                      fontSize: "20px",
                      fontWeight: 600,
                      height: "20px",
                      justifyContent: "center",
                      lineHeight: "20px",
                      textAlign: "center",
                      textWrap: "nowrap",
                      userSelect: "none",
                      whiteSpace: "nowrap",
                      width: "20px",
                    }}
                  >
                    <ChartNoAxesGantt size={20} color="rgb(36, 36, 36)" />
                  </span>
                </AppLauncherButton>
              ) : (
                <AppLauncherButton
                  onClick={handleAppLauncherToggle}
                  aria-expanded={appLauncherOpen}
                  aria-label={
                    appLauncherOpen ? "Close app launcher" : "Open app launcher"
                  }
                >
                  <span
                    style={{
                      alignItems: "center",
                      borderColor: "rgb(36, 36, 36)",
                      color: "rgb(36, 36, 36)",
                      cursor: "default",
                      display: "flex",
                      fontFamily:
                        '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                      fontSize: "20px",
                      fontWeight: 600,
                      height: "20px",
                      justifyContent: "center",
                      lineHeight: "20px",
                      textAlign: "center",
                      textWrap: "nowrap",
                      userSelect: "none",
                      whiteSpace: "nowrap",
                      width: "20px",
                    }}
                  >
                    <AppLauncherIcon />
                  </span>
                </AppLauncherButton>
              )}
            </Box>

            {/* App Launcher Drawer */}
            {!isMobile && appLauncherOpen && (
              <AppLauncherDrawer elevation={8}>
                {/* Header */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "64px",
                    width: "320px",
                  }}
                >
                  <IconButton
                    onClick={() => setAppLauncherOpen(false)}
                    aria-label="Close office app launcher"
                    sx={{
                      alignItems: "center",
                      appearance: "button",
                      backgroundColor: "rgb(255, 255, 255)",
                      borderColor: "rgb(36, 36, 36)",
                      color: "rgb(36, 36, 36)",
                      cursor: "default",
                      display: "flex",
                      fontFamily:
                        '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                      fontWeight: 600,
                      justifyContent: "center",
                      lineHeight: "20px",
                      marginBottom: "16px",
                      marginLeft: "16px",
                      marginRight: "16px",
                      marginTop: "16px",
                      maxWidth: "32px",
                      minWidth: "32px",
                      paddingBottom: "5px",
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      paddingTop: "5px",
                      textAlign: "center",
                      transitionDuration: "0.1s",
                      transitionProperty: "background, border, color",
                      transitionTimingFunction:
                        "cubic-bezier(0.33, 0, 0.67, 1)",
                      verticalAlign: "middle",
                      border: "none",
                      "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
                    }}
                  >
                    <span
                      style={{
                        alignItems: "center",
                        borderColor: "rgb(36, 36, 36)",
                        color: "rgb(36, 36, 36)",
                        cursor: "default",
                        display: "flex",
                        fontFamily:
                          '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                        fontSize: "20px",
                        fontWeight: 600,
                        height: "20px",
                        justifyContent: "center",
                        lineHeight: "20px",
                        textAlign: "center",
                        textWrap: "nowrap",
                        userSelect: "none",
                        whiteSpace: "nowrap",
                        width: "20px",
                      }}
                    >
                      <CloseIcon />
                    </span>
                  </IconButton>
                  <Box
                    component="a"
                    href="https://m365.cloud.microsoft/?auth=2&home=1&from=ShellLogo&username=tanhminh.ly@automicgroup.com.au&login_hint=tanhminh.ly@automicgroup.com.au"
                    tabIndex={0}
                    sx={{
                      alignItems: "center",
                      borderColor: "rgb(79, 82, 178)",
                      color: "rgb(79, 82, 178)",
                      cursor: "pointer",
                      display: "flex",
                      fontFamily:
                        '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                      justifyContent: "space-between",
                      lineHeight: "20px",
                      paddingBottom: "1px",
                      paddingRight: "16px",
                      textAlign: "left",
                      textDecoration: "underline 1px solid rgba(0, 0, 0, 0)",
                      textDecorationColor: "rgba(0, 0, 0, 0)",
                      textDecorationLine: "underline",
                      textDecorationThickness: "1px",
                      userSelect: "text",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    <span>Microsoft 365</span>
                    <ArrowRightIcon />
                  </Box>
                </Box>

                {/* Title Section */}
                <Box
                  sx={{
                    borderColor: "rgb(36, 36, 36)",
                    color: "rgb(36, 36, 36)",
                    display: "flex",
                    fontFamily:
                      '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                    lineHeight: "20px",
                    marginBottom: "-3px",
                    marginTop: "-2px",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    component="h2"
                    sx={{
                      borderColor: "rgb(36, 36, 36)",
                      color: "rgb(36, 36, 36)",
                      fontFamily:
                        '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                      fontSize: "18px",
                      lineHeight: "20px",
                      marginBottom: "14.94px",
                      marginTop: "16px",
                      paddingLeft: "28px",
                      textAlign: "left",
                    }}
                  >
                    Ứng dụng
                  </Typography>
                </Box>

                {/* Apps Grid */}
                <Box
                  sx={{
                    borderColor: "rgb(36, 36, 36)",
                    color: "rgb(36, 36, 36)",
                    display: "flex",
                    flexFlow: "row wrap",
                    flexWrap: "wrap",
                    fontFamily:
                      '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                    lineHeight: "20px",
                    minHeight: "240px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    textAlign: "left",
                    width: "320px",
                  }}
                >
                  {officeApps.map((app) => (
                    <Box
                      key={app.name}
                      sx={{
                        borderColor: "rgb(36, 36, 36)",
                        color: "rgb(36, 36, 36)",
                        display: "flex",
                        flexDirection: "column",
                        flexFlow: "column nowrap",
                        fontFamily:
                          '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                        height: "48px",
                        justifyContent: "space-between",
                        lineHeight: "20px",
                        textAlign: "left",
                      }}
                    >
                      <Box
                        component="button"
                        role="link"
                        sx={{
                          alignItems: "center",
                          appearance: "button",
                          backgroundColor: "rgb(255, 255, 255)",
                          border: "none",
                          color: "rgb(36, 36, 36)",
                          cursor: "default",
                          display: "flex",
                          fontFamily:
                            '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
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
                          verticalAlign: "middle",
                          "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.04)",
                          },
                        }}
                      >
                        <span
                          style={{
                            alignItems: "center",
                            borderColor: "rgb(36, 36, 36)",
                            color: "rgb(36, 36, 36)",
                            cursor: "default",
                            display: "flex",
                            fontFamily:
                              '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                            fontSize: "20px",
                            height: "28px",
                            justifyContent: "center",
                            lineHeight: "16px",
                            marginRight: "12px",
                            textAlign: "center",
                            width: "28px",
                          }}
                        >
                          {app.icon}
                        </span>
                        <span
                          style={{
                            borderColor: "rgb(36, 36, 36)",
                            color: "rgb(36, 36, 36)",
                            cursor: "default",
                            fontFamily:
                              '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                            lineHeight: "16px",
                            textAlign: "center",
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
          </LeftSection>

          {/* Center Section - Search */}
          <CenterSection ref={searchRef}>
            <SearchContainer onClick={handleSearchToggle}>
              <Box
                component="form"
                role="search"
                sx={{
                  alignItems: "center",
                  borderRadius: "4px",
                  color: "rgb(66, 66, 66)",
                  display: "flex",
                  fontFamily:
                    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                  textAlign: "left",
                  textWrap: "nowrap",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                  width: "100%",
                }}
              >
                <SearchButton aria-hidden="true" type="button" tabIndex={-1}>
                  <Search size={20} />
                </SearchButton>
                <Box
                  sx={{
                    borderColor: "rgb(36, 36, 36)",
                    color: "rgb(36, 36, 36)",
                    display: "flex",
                    fontFamily:
                      '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                    height: "100%",
                    overflowX: "hidden",
                    overflowY: "auto",
                    textAlign: "left",
                    textWrap: "nowrap",
                    userSelect: "none",
                    whiteSpace: "nowrap",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      borderColor: "rgb(36, 36, 36)",
                      color: "rgb(36, 36, 36)",
                      display: "flex",
                      fontFamily:
                        '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                      overflowX: "hidden",
                      overflowY: "auto",
                      textAlign: "left",
                      textWrap: "nowrap",
                      userSelect: "none",
                      whiteSpace: "nowrap",
                      width: "100%",
                    }}
                  >
                    <Box
                      role="presentation"
                      sx={{
                        alignItems: "center",
                        borderColor: "rgb(36, 36, 36)",
                        color: "rgb(36, 36, 36)",
                        display: "flex",
                        flexBasis: "0px",
                        flexGrow: 1,
                        fontFamily:
                          '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                        justifyContent: "center",
                        position: "relative",
                        textAlign: "left",
                        textWrap: "nowrap",
                        userSelect: "none",
                        whiteSpace: "nowrap",
                        width: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          borderColor: "rgb(36, 36, 36)",
                          color: "rgb(36, 36, 36)",
                          display: "flex",
                          fontFamily:
                            '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                          height: "100%",
                          textAlign: "left",
                          textWrap: "nowrap",
                          userSelect: "none",
                          whiteSpace: "nowrap",
                          width: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            borderColor: "rgb(36, 36, 36)",
                            color: "rgb(36, 36, 36)",
                            fontFamily:
                              '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                            overflowX: "auto",
                            overflowY: "hidden",
                            position: "relative",
                            scrollbarWidth: "none",
                            textAlign: "left",
                            textWrap: "nowrap",
                            userSelect: "none",
                            whiteSpace: "nowrap",
                            width: "100%",
                          }}
                        >
                          <input
                            aria-autocomplete="list"
                            aria-expanded="false"
                            aria-haspopup="listbox"
                            aria-required="false"
                            autoComplete="off"
                            maxLength={150}
                            placeholder="Tìm kiếm (⌥ ⌘ E)"
                            role="combobox"
                            type="search"
                            spellCheck="false"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            style={{
                              appearance: "textfield",
                              border: "none",
                              color: "rgb(36, 36, 36)",
                              cursor: "text",
                              display: "flex",
                              fontFamily:
                                '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                              height: "100%",
                              lineHeight: "16.1px",
                              outline: "none",
                              outlineOffset: "-2px",
                              overflowX: "clip",
                              overflowY: "clip",
                              paddingBottom: "8px",
                              paddingLeft: "8px",
                              paddingRight: "2px",
                              paddingTop: "8px",
                              textWrap: "nowrap",
                              userSelect: "text",
                              whiteSpace: "nowrap",
                              width: "100%",
                              zIndex: 2,
                              backgroundColor: "transparent",
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <button type="submit" hidden style={{ display: "none" }} />
              </Box>

              {/* Search Popover */}
              {searchOpen && (
                <>
                  <SearchPopover isMobile={isMobile}>
                    <Box
                      sx={{ padding: "16px", height: "100%", overflow: "auto" }}
                    >
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
                        Thứ được đề xuất
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
                </>
              )}
            </SearchContainer>
          </CenterSection>

          {/* Right Section */}
          <RightSection>
            <Box
              sx={{
                borderColor: "rgb(255, 255, 255)",
                color: "rgb(255, 255, 255)",
                display: "flex",
                fontFamily:
                  '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                textAlign: "left",
                textWrap: "nowrap",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            />
            <Box
              sx={{
                alignItems: "center",
                borderColor: "rgb(255, 255, 255)",
                color: "rgb(255, 255, 255)",
                display: "flex",
                fontFamily:
                  '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                overflowX: "hidden",
                overflowY: "auto",
                textAlign: "left",
                textWrap: "nowrap",
                transformOrigin: "0% 50%",
                transitionBehavior: "allow-discrete",
                transitionDuration: "0.25s",
                transitionProperty: "visibility, width",
                transitionTimingFunction: "cubic-bezier(0.8, 0, 0.78, 1)",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              <Box
                sx={{
                  borderColor: "rgb(255, 255, 255)",
                  color: "rgb(255, 255, 255)",
                  fontFamily:
                    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                  textAlign: "left",
                  textWrap: "nowrap",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                }}
              >
                <HeaderButton
                  type="button"
                  aria-haspopup="menu"
                  aria-label="Cài đặt và tùy chọn khác"
                >
                  <span
                    style={{
                      alignItems: "center",
                      borderColor: "rgb(97, 97, 97)",
                      color: "rgb(97, 97, 97)",
                      cursor: "default",
                      display: "flex",
                      fontFamily:
                        '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                      fontSize: "20px",
                      fontWeight: 600,
                      height: "20px",
                      justifyContent: "center",
                      lineHeight: "20px",
                      textAlign: "center",
                      textWrap: "nowrap",
                      userSelect: "none",
                      whiteSpace: "nowrap",
                      width: "20px",
                    }}
                  >
                    <span
                      style={{
                        borderColor: "rgb(97, 97, 97)",
                        color: "rgb(97, 97, 97)",
                        cursor: "default",
                        display: "flex",
                        fontFamily:
                          '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "20px",
                        textAlign: "center",
                        textWrap: "nowrap",
                        userSelect: "none",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <MoreHorizontal size={20} />
                    </span>
                  </span>
                </HeaderButton>
              </Box>
              <Box
                sx={{
                  borderColor: "rgb(255, 255, 255)",
                  color: "rgb(255, 255, 255)",
                  fontFamily:
                    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                  textAlign: "left",
                  textWrap: "nowrap",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                }}
              />
              <Box
                sx={{
                  borderColor: "rgb(255, 255, 255)",
                  color: "rgb(255, 255, 255)",
                  fontFamily:
                    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                  textAlign: "left",
                  textWrap: "nowrap",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                }}
              >
                <Box
                  sx={{
                    borderColor: "rgb(255, 255, 255)",
                    color: "rgb(255, 255, 255)",
                    fontFamily:
                      '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                    textAlign: "left",
                    textWrap: "nowrap",
                    userSelect: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  <ProfileButton
                    type="button"
                    aria-label="Hồ sơ của bạn, trạng thái Trực tuyến"
                    role="button"
                    tabIndex={0}
                    aria-expanded="false"
                  >
                    <span
                      role="img"
                      aria-label="Ảnh hồ sơ của Tanh Minh Ly."
                      style={{
                        borderRadius: "50%",
                        borderColor: "rgb(66, 66, 66)",
                        color: "rgb(66, 66, 66)",
                        cursor: "default",
                        flexShrink: 0,
                        fontFamily:
                          '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                        fontSize: "12px",
                        fontWeight: 600,
                        height: "28px",
                        lineHeight: "20px",
                        position: "relative",
                        textAlign: "center",
                        textWrap: "nowrap",
                        userSelect: "none",
                        verticalAlign: "middle",
                        whiteSpace: "nowrap",
                        width: "28px",
                      }}
                    >
                      <span
                        style={{
                          alignItems: "center",
                          backgroundColor: "rgb(230, 230, 230)",
                          borderRadius: "50%",
                          color: "rgb(97, 97, 97)",
                          cursor: "default",
                          display: "flex",
                          fontFamily:
                            '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                          fontSize: "12px",
                          fontWeight: 600,
                          height: "100%",
                          justifyContent: "center",
                          left: "0px",
                          lineHeight: "20px",
                          mask: "radial-gradient(circle at right 5px bottom 5px, rgba(0, 0, 0, 0) calc(5.75px), rgb(255, 255, 255) calc(6.25px))",
                          maskImage:
                            "radial-gradient(circle at right 5px bottom 5px, rgba(0, 0, 0, 0) calc(5.75px), rgb(255, 255, 255) calc(6.25px))",
                          position: "absolute",
                          textAlign: "center",
                          textWrap: "nowrap",
                          top: "0px",
                          userSelect: "none",
                          whiteSpace: "nowrap",
                          width: "100%",
                        }}
                      >
                        TL
                      </span>
                      <Box
                        aria-label="available"
                        role="img"
                        sx={{
                          alignItems: "center",
                          backgroundClip: "content-box",
                          backgroundColor: "rgb(255, 255, 255)",
                          borderRadius: "50%",
                          borderColor: "rgb(19, 161, 14)",
                          bottom: "0px",
                          color: "rgb(19, 161, 14)",
                          cursor: "default",
                          display: "flex",
                          fontFamily:
                            '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                          fontSize: "12px",
                          fontWeight: 600,
                          justifyContent: "center",
                          lineHeight: "20px",
                          paddingBottom: "1px",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                          paddingTop: "1px",
                          position: "absolute",
                          right: "0px",
                          textAlign: "center",
                          textWrap: "nowrap",
                          userSelect: "none",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <span
                          style={{
                            borderColor: "rgb(19, 161, 14)",
                            color: "rgb(19, 161, 14)",
                            cursor: "default",
                            display: "flex",
                            fontFamily:
                              '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                            fontSize: "12px",
                            fontWeight: 600,
                            lineHeight: "20px",
                            marginBottom: "-1px",
                            marginLeft: "-1px",
                            marginRight: "-1px",
                            marginTop: "-1px",
                            textAlign: "center",
                            textWrap: "nowrap",
                            userSelect: "none",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <svg
                            fill="currentColor"
                            aria-hidden="true"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              borderColor: "rgb(19, 161, 14)",
                              color: "rgb(19, 161, 14)",
                              cursor: "default",
                              fill: "rgb(19, 161, 14)",
                              fontFamily:
                                '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                              fontSize: "12px",
                              fontWeight: 600,
                              height: "10px",
                              lineHeight: "0px",
                              textAlign: "center",
                              textWrap: "nowrap",
                              userSelect: "none",
                              whiteSpace: "nowrap",
                              width: "10px",
                            }}
                          >
                            <path
                              d="M5 10A5 5 0 1 0 5 0a5 5 0 0 0 0 10Zm2.1-5.9L4.85 6.35a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l.65.64 1.9-1.9a.5.5 0 0 1 .7.71Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </Box>
                    </span>
                  </ProfileButton>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                borderColor: "rgb(255, 255, 255)",
                color: "rgb(255, 255, 255)",
                display: "flex",
                fontFamily:
                  '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                height: "100%",
                marginLeft: "3px",
                textAlign: "left",
                textWrap: "nowrap",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            />
          </RightSection>
        </StyledToolbar>
      </StyledAppBar>
    </ClickAwayListener>
  );
}
