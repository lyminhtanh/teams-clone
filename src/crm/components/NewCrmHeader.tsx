import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Stack,
  TextField,
  InputAdornment,
  Button,
  Badge,
  Avatar,
  Divider,
} from "@mui/material";
import {
  MenuRounded,
  GridViewRounded,
  SearchRounded,
  AddRounded,
  KeyboardArrowDownRounded,
  ChatRounded,
  NotificationsRounded,
  HelpOutlineRounded,
  SettingsRounded,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useMenu } from "../context/MenuContext";
import { CrmLogo } from "./CrmAppNavbar";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxShadow: "none",
  position: "sticky",
  top: 0,
  zIndex: theme.zIndex.drawer + 1,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr minmax(min-content, 780px) 1fr",
  gap: theme.spacing(1),
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5),
  alignItems: "center",
  height: 48,
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  height: 32,
  width: "100%",
  maxWidth: 780,
  position: "relative",
}));

const CreateButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius,
  textTransform: "none",
  fontWeight: 500,
  height: 32,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const ActionButton = styled(IconButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function NewCrmHeader() {
  const { isOpen, toggleMenu } = useMenu();

  return (
    <StyledAppBar>
      <StyledToolbar>
        {/* Left Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            minWidth: 300,
            width: "max-content",
          }}
        >
          <ActionButton onClick={toggleMenu} aria-label="Toggle sidebar">
            <MenuRounded />
          </ActionButton>

          <ActionButton aria-label="Switch sites or apps">
            <GridViewRounded />
          </ActionButton>

          <Box
            sx={{ display: "flex", alignItems: "center", gap: 0.5, ml: 0.5 }}
          >
            <CrmLogo />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 500,
                color: "text.primary",
                display: { xs: "none", sm: "block" },
              }}
            >
              Acme CRM
            </Typography>
          </Box>
        </Box>

        {/* Center Section - Search */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            width: "100%",
          }}
        >
          <SearchContainer>
            <SearchRounded sx={{ color: "text.secondary", ml: 2 }} />
            <TextField
              placeholder="Search"
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: true,
                sx: {
                  px: 1,
                  fontSize: "0.875rem",
                },
              }}
            />
          </SearchContainer>

          <CreateButton
            variant="contained"
            startIcon={<AddRounded />}
            endIcon={<KeyboardArrowDownRounded />}
            sx={{ ml: 2, whiteSpace: "nowrap" }}
          >
            Create
          </CreateButton>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            minWidth: 300,
            width: "max-content",
          }}
        >
          <Stack direction="row" spacing={0.5} alignItems="center">
            <ActionButton>
              <ChatRounded />
            </ActionButton>

            <Badge badgeContent={3} color="error">
              <ActionButton>
                <NotificationsRounded />
              </ActionButton>
            </Badge>

            <ActionButton>
              <HelpOutlineRounded />
            </ActionButton>

            <ActionButton>
              <SettingsRounded />
            </ActionButton>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ mx: 1, height: 24 }}
            />

            <IconButton sx={{ p: 0.5 }}>
              <Avatar
                sx={{ width: 24, height: 24 }}
                src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/62be5649228c59d8da1b0e2e/1069c4dc-ca51-4ade-89f5-497d300f5004/128"
                alt="User Avatar"
              />
            </IconButton>
          </Stack>
        </Box>
      </StyledToolbar>
    </StyledAppBar>
  );
}
