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
  SearchRounded,
  SettingsRounded,
  HelpOutlineRounded,
  NotificationsRounded,
  MoreVertRounded,
  AppsRounded,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#2b2b2b" : "#464775",
  color: "white",
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
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: 4,
  width: "100%",
  maxWidth: 540,
  height: 32,
  margin: `0 ${theme.spacing(2)}`,
}));

const SearchField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    color: "white",
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
      color: "rgba(255, 255, 255, 0.7)",
      opacity: 1,
    },
  },
}));

const HeaderButton = styled(IconButton)(({ theme }) => ({
  color: "white",
  padding: theme.spacing(0.75),
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

export default function TeamsHeader() {
  return (
    <StyledAppBar>
      <StyledToolbar>
        {/* Left Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <HeaderButton>
            <AppsRounded />
          </HeaderButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 600,
              fontSize: "1.125rem",
              color: "white",
            }}
          >
            Microsoft Teams
          </Typography>
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
                  <SearchRounded sx={{ color: "rgba(255, 255, 255, 0.7)" }} />
                </InputAdornment>
              ),
            }}
          />
        </SearchContainer>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <HeaderButton>
            <HelpOutlineRounded />
          </HeaderButton>

          <Badge badgeContent={3} color="error">
            <HeaderButton>
              <NotificationsRounded />
            </HeaderButton>
          </Badge>

          <HeaderButton>
            <SettingsRounded />
          </HeaderButton>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              mx: 1,
              height: 24,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
          />

          <HeaderButton>
            <MoreVertRounded />
          </HeaderButton>

          <HeaderButton sx={{ p: 0.5, ml: 0.5 }}>
            <Avatar
              sx={{ width: 28, height: 28 }}
              src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/62be5649228c59d8da1b0e2e/1069c4dc-ca51-4ade-89f5-497d300f5004/128"
            />
          </HeaderButton>
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
}
