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
import {
  Search,
  Settings,
  HelpCircle,
  Bell,
  MoreHorizontal,
  Grid3X3,
  Circle,
} from "lucide-react";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#2b2b2b" : "#ebeaea",
  color: theme.palette.mode === "dark" ? "white" : "#424242",
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.divider}`,
  position: "sticky",
  top: 0,
  zIndex: theme.zIndex.drawer + 2,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  minHeight: 48,
  height: 48,
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "#ffffff",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 4,
  width: "100%",
  maxWidth: 540,
  height: 32,
  margin: `0 ${theme.spacing(2)}`,
}));

const SearchField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    color: theme.palette.mode === "dark" ? "white" : "#424242",
    fontSize: "0.875rem",
    border: "none",
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
    "& input::placeholder": {
      color:
        theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.7)" : "#757575",
      opacity: 1,
    },
  },
}));

const HeaderButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "white" : "#616161",
  padding: theme.spacing(0.75),
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.04)",
  },
}));

export default function TeamsHeader() {
  return (
    <StyledAppBar>
      <StyledToolbar>
        {/* Left Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <HeaderButton>
            <Grid3X3 size={20} />
          </HeaderButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Teams Logo */}
            <Box
              sx={{
                width: 20,
                height: 20,
                background: "linear-gradient(135deg, #5b5fc7 0%, #7b83eb 100%)",
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              T
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                color: (theme) =>
                  theme.palette.mode === "dark" ? "white" : "#424242",
              }}
            >
              Microsoft Teams
            </Typography>
          </Box>
        </Box>

        {/* Center Section - Search */}
        <SearchContainer>
          <SearchField
            fullWidth
            size="small"
            placeholder="Search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={16} color={"#757575"} />
                </InputAdornment>
              ),
            }}
          />
        </SearchContainer>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
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
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgba(255, 255, 255, 0.2)"
                  : "rgba(0, 0, 0, 0.12)",
            }}
          />

          <HeaderButton sx={{ p: 0.5, ml: 0.5, position: "relative" }}>
            <Avatar
              sx={{
                width: 28,
                height: 28,
                fontSize: "12px",
                fontWeight: "bold",
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
            >
              <Circle size={4} fill="#92c353" color="#92c353" />
            </Box>
          </HeaderButton>
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
}
