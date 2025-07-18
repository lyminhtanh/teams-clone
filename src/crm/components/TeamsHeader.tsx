import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Divider,
  Badge,
  Button,
} from "@mui/material";
import { Search, Settings, MoreHorizontal, Menu } from "lucide-react";
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
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(2),
  minHeight: 48,
  height: 48,
  userSelect: "none",
  textWrap: "nowrap",
  whiteSpace: "nowrap",
}));

const AppLauncherButton = styled(IconButton)(({ theme }) => ({
  alignItems: "center",
  appearance: "button",
  borderColor: "rgb(36, 36, 36)",
  color: "rgb(36, 36, 36)",
  cursor: "default",
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
  paddingBottom: "13px",
  paddingLeft: "8px",
  paddingRight: "8px",
  paddingTop: "12px",
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
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "rgb(250, 250, 250)",
  borderBottomLeftRadius: "4px",
  borderBottomRightRadius: "4px",
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
  borderRadius: "4px",
  color: "rgb(66, 66, 66)",
  justifyContent: "space-between",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "824px",
  outline: "rgb(224, 224, 224) solid 1px",
  position: "relative",
  width: "100%",
  height: "32px",
  margin: `0 ${theme.spacing(2)}`,
}));

const SearchField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    color: "rgb(36, 36, 36)",
    fontSize: "0.875rem",
    border: "none",
    height: "100%",
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
    "& input": {
      padding: "8px 8px 8px 2px",
      height: "100%",
      boxSizing: "border-box",
    },
    "& input::placeholder": {
      color: "rgb(36, 36, 36)",
      opacity: 0.7,
    },
  },
}));

const SearchButton = styled(IconButton)(({ theme }) => ({
  alignItems: "center",
  appearance: "button",
  borderBottomLeftRadius: "4px",
  borderTopLeftRadius: "4px",
  borderColor: "rgb(0, 0, 0)",
  color: "rgb(97, 97, 97)",
  cursor: "default",
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
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
}));

const HeaderButton = styled(IconButton)(({ theme }) => ({
  color: "rgb(97, 97, 97)",
  padding: theme.spacing(0.75),
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
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

export default function TeamsHeader() {
  return (
    <StyledAppBar>
      <StyledToolbar>
        {/* Left Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplate: '"primary secondary" auto / auto auto',
              gridTemplateAreas: '"primary secondary"',
              gridTemplateRows: "auto",
              justifyContent: "space-evenly",
              alignItems: "center",
              position: "relative",
            }}
          >
            <AppLauncherButton
              sx={{
                gridArea: "primary",
                gridRow: "primary",
              }}
            >
              <AppLauncherIcon />
            </AppLauncherButton>
            <TeamsLogo />
          </Box>
        </Box>

        {/* Center Section - Search */}
        <SearchContainer>
          <SearchButton aria-hidden="true" tabIndex={-1}>
            <Search size={20} />
          </SearchButton>
          <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                overflowX: "hidden",
                overflowY: "auto",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexBasis: "0px",
                  flexGrow: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  width: "100%",
                }}
              >
                <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
                  <Box
                    sx={{
                      position: "relative",
                      scrollbarWidth: "none",
                      overflowX: "auto",
                      overflowY: "hidden",
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
                      placeholder="Search"
                      role="combobox"
                      type="search"
                      spellCheck="false"
                      defaultValue=""
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
        </SearchContainer>

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
            <Settings size={20} />
          </HeaderButton>

          <HeaderButton>
            <MoreHorizontal size={20} />
          </HeaderButton>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              mx: 1,
              height: 24,
              backgroundColor: "rgba(0, 0, 0, 0.12)",
            }}
          />

          <HeaderButton sx={{ p: 0.5, ml: 0.5, position: "relative" }}>
            <Avatar
              sx={{
                width: 28,
                height: 28,
                fontSize: "12px",
                fontWeight: "bold",
                backgroundColor: "rgb(230, 230, 230)",
                color: "rgb(97, 97, 97)",
              }}
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
          </HeaderButton>
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
}
