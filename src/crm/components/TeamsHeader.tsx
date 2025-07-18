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
  minHeight: 48,
  maxHeight: 48,
  height: 48,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "0px",
  paddingRight: "0px",
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
  appRegion: "drag",
  backgroundColor: "rgb(235, 235, 235)",
  borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
  borderColor: "rgb(255, 255, 255)",
  display: "flex",
  fontFamily:
    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
  height: "48px",
  justifyContent: "space-between",
  minHeight: "100%",
  minWidth: "100%",
  textAlign: "left",
  textWrap: "nowrap",
  userSelect: "none",
  whiteSpace: "nowrap",
  borderStyle: "none none solid",
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
  gridArea: "primary",
  gridRow: "primary",
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
  appRegion: "drag",
  borderColor: "rgb(255, 255, 255)",
  color: "rgb(255, 255, 255)",
  display: "flex",
  fontFamily:
    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
  justifyContent: "center",
  textAlign: "left",
  textWrap: "nowrap",
  userSelect: "none",
  whiteSpace: "nowrap",
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "rgb(250, 250, 250)",
  borderBottomLeftRadius: "4px",
  borderBottomRightRadius: "4px",
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
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
  marginTop: 0,
  marginBottom: 0,
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
  appRegion: "drag",
  borderColor: "rgb(255, 255, 255)",
  color: "rgb(255, 255, 255)",
  display: "flex",
  fontFamily:
    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
  height: "100%",
  justifyContent: "flex-end",
  marginLeft: "3px",
  textAlign: "left",
  textWrap: "nowrap",
  userSelect: "none",
  whiteSpace: "nowrap",
}));

const HeaderButton = styled(IconButton)(({ theme }) => ({
  alignItems: "center",
  appRegion: "no-drag",
  appearance: "button",
  borderBottomLeftRadius: "4px",
  borderBottomRightRadius: "4px",
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
  borderRadius: "4px",
  color: "rgb(97, 97, 97)",
  cursor: "default",
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
  appRegion: "no-drag",
  appearance: "button",
  borderBottomLeftRadius: "10000px",
  borderBottomRightRadius: "10000px",
  borderTopLeftRadius: "10000px",
  borderTopRightRadius: "10000px",
  borderRadius: "10000px",
  color: "rgb(66, 66, 66)",
  cursor: "default",
  display: "inline-flex",
  fontFamily:
    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
  fontWeight: 600,
  justifyContent: "center",
  lineHeight: "20px",
  marginLeft: "5px",
  marginRight: "0px",
  maxHeight: "40px",
  maxWidth: "160px",
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

// Teams Logo SVG Component - exact from HTML snippet
const TeamsLogo = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="2 2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
    fontSize="20px"
    fill="currentColor"
    aria-hidden="true"
    style={{
      appRegion: "drag",
      borderColor: "rgb(255, 255, 255)",
      color: "rgb(255, 255, 255)",
      fill: "rgb(255, 255, 255)",
      fontFamily:
        '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
      fontSize: "20px",
      gridArea: "secondary",
      gridRow: "secondary",
      height: "1em",
      lineHeight: "0px",
      marginLeft: "4px",
      textAlign: "left",
      textWrap: "nowrap",
      transformOrigin: "0% 50%",
      transitionBehavior: "allow-discrete",
      transitionDuration: "0.25s",
      transitionProperty: "visibility, width",
      transitionTimingFunction: "cubic-bezier(0.8, 0, 0.78, 1)",
      userSelect: "none",
      verticalAlign: "middle",
      whiteSpace: "nowrap",
      width: "1em",
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

// App Launcher Icon (3x3 grid of dots) - exact from HTML snippet
const AppLauncherIcon = () => (
  <svg
    fontSize="20px"
    fill="currentColor"
    aria-hidden="true"
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    style={{
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
);

export default function TeamsHeader() {
  return (
    <StyledAppBar>
      <StyledToolbar>
        {/* Left Section */}
        <LeftSection>
          <Box
            sx={{
              alignItems: "center",
              appRegion: "drag",
              borderColor: "rgb(255, 255, 255)",
              color: "rgb(255, 255, 255)",
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
                borderColor: "rgb(255, 255, 255)",
                color: "rgb(255, 255, 255)",
                fontFamily:
                  '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                textAlign: "left",
                textWrap: "nowrap",
                userSelect: "none",
                whiteSpace: "nowrap",
                width: "0px",
              }}
            />
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
              <AppLauncherButton
                type="button"
                role="button"
                tabIndex={0}
                aria-expanded="false"
                aria-label="Open app launcher"
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
              <TeamsLogo />
            </Box>
          </Box>
        </LeftSection>

        {/* Center Section - Search */}
        <CenterSection>
          <Box
            sx={{
              alignItems: "center",
              borderColor: "rgb(255, 255, 255)",
              color: "rgb(255, 255, 255)",
              display: "grid",
              flexBasis: "0%",
              flexGrow: 1,
              fontFamily:
                '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
              gridTemplate: '"primary" 1fr',
              gridTemplateAreas: '"primary"',
              gridTemplateRows: "auto",
              textAlign: "left",
              textWrap: "nowrap",
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                appRegion: "drag",
                borderColor: "rgb(255, 255, 255)",
                color: "rgb(255, 255, 255)",
                display: "flex",
                fontFamily:
                  '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                gridArea: "primary",
                gridRow: "primary",
                height: "100%",
                justifyContent: "start",
                maxWidth: "676px",
                textAlign: "left",
                textWrap: "nowrap",
                transformOrigin: "0% 50%",
                transitionBehavior: "allow-discrete",
                transitionDuration: "0.25s",
                transitionProperty: "margin-left",
                transitionTimingFunction: "cubic-bezier(0.8, 0, 0.78, 1)",
                userSelect: "none",
                whiteSpace: "nowrap",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  borderColor: "rgb(255, 255, 255)",
                  color: "rgb(255, 255, 255)",
                  fontFamily:
                    '-apple-system, "system-ui", "Segoe UI", system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
                  marginLeft: "6px",
                  marginRight: "6px",
                  maxWidth: "664px",
                  minWidth: "468px",
                  textAlign: "left",
                  textWrap: "nowrap",
                  transformOrigin: "0% 50%",
                  transitionBehavior: "allow-discrete",
                  transitionDuration: "0.25s",
                  transitionProperty: "visibility, width",
                  transitionTimingFunction: "cubic-bezier(0.8, 0, 0.78, 1)",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                  width: "100%",
                }}
              >
                <SearchContainer>
                  <Box
                    component="form"
                    role="search"
                    sx={{
                      alignItems: "center",
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                      borderTopLeftRadius: "4px",
                      borderTopRightRadius: "4px",
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
                    <SearchButton
                      aria-hidden="true"
                      type="button"
                      tabIndex={-1}
                    >
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
                                  textWrap: "nowrap",
                                  userSelect: "none",
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
                  </Box>
                </SearchContainer>
              </Box>
            </Box>
          </Box>
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
                aria-label="Settings and more options"
              >
                <span
                  style={{
                    alignItems: "center",
                    appRegion: "no-drag",
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
                      appRegion: "no-drag",
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
                appRegion: "no-drag",
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
                  appRegion: "no-drag",
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
                  aria-label="Your profile, Online status"
                  role="button"
                  tabIndex={0}
                  aria-expanded="false"
                >
                  <span
                    role="img"
                    aria-label="Profile picture"
                    style={{
                      appRegion: "no-drag",
                      borderBottomLeftRadius: "10000px",
                      borderBottomRightRadius: "10000px",
                      borderTopLeftRadius: "10000px",
                      borderTopRightRadius: "10000px",
                      borderRadius: "10000px",
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
                        appRegion: "no-drag",
                        backgroundColor: "rgb(230, 230, 230)",
                        borderBottomLeftRadius: "10000px",
                        borderBottomRightRadius: "10000px",
                        borderTopLeftRadius: "10000px",
                        borderTopRightRadius: "10000px",
                        borderRadius: "10000px",
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
                        appRegion: "no-drag",
                        backgroundClip: "content-box",
                        backgroundColor: "rgb(255, 255, 255)",
                        borderBottomLeftRadius: "10000px",
                        borderBottomRightRadius: "10000px",
                        borderTopLeftRadius: "10000px",
                        borderTopRightRadius: "10000px",
                        borderRadius: "10000px",
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
                          appRegion: "no-drag",
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
                            appRegion: "no-drag",
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
              appRegion: "drag",
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
  );
}
