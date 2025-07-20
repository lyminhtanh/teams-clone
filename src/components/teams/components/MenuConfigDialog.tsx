import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Switch,
  FormControlLabel,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Chip,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
  Tooltip,
  Alert,
  Collapse,
  Badge,
  Paper,
} from "@mui/material";
import {
  Search,
  Settings,
  X,
  RotateCcw,
  Save,
  Eye,
  EyeOff,
  Info,
  ChevronDown,
  ChevronRight,
  TestTube,
  Smartphone,
  Monitor,
} from "lucide-react";
import {
  MenuItem,
  MenuCategory,
  menuCategories,
  defaultMenuItems,
} from "../data/menuItems";
import { useInterfaceMode } from "../context/InterfaceModeContext";
import { InterfaceMode, getDeviceInfo } from "../../../utils/deviceDetection";

interface MenuConfigDialogProps {
  open: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  onSave: (updatedItems: MenuItem[]) => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`menu-config-tabpanel-${index}`}
      aria-labelledby={`menu-config-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

export default function MenuConfigDialog({
  open,
  onClose,
  menuItems,
  onSave,
}: MenuConfigDialogProps) {
  const [localMenuItems, setLocalMenuItems] = useState<MenuItem[]>(menuItems);
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(menuCategories.map((cat) => cat.id)),
  );
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Interface Mode Context
  const {
    canaryFlagEnabled,
    selectedMode,
    activeMode,
    detectedMode,
    setCanaryFlagEnabled,
    setSelectedMode,
    isCanaryActive,
  } = useInterfaceMode();

  const deviceInfo = getDeviceInfo();

  // Update local state when props change
  useEffect(() => {
    setLocalMenuItems(menuItems);
    setHasUnsavedChanges(false);
  }, [menuItems]);

  // Check for unsaved changes
  useEffect(() => {
    const hasChanges =
      JSON.stringify(localMenuItems) !== JSON.stringify(menuItems);
    setHasUnsavedChanges(hasChanges);
  }, [localMenuItems, menuItems]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleToggleItem = (itemId: string) => {
    setLocalMenuItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, enabled: !item.enabled } : item,
      ),
    );
  };

  const handleResetToDefaults = () => {
    setLocalMenuItems(defaultMenuItems);
  };

  const handleSave = () => {
    onSave(localMenuItems);
    onClose();
  };

  const handleClose = () => {
    if (hasUnsavedChanges) {
      if (
        window.confirm(
          "You have unsaved changes. Are you sure you want to close without saving?",
        )
      ) {
        setLocalMenuItems(menuItems); // Reset to original state
        onClose();
      }
    } else {
      onClose();
    }
  };

  const toggleCategoryExpansion = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const filteredMenuItems = localMenuItems.filter(
    (item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const getEnabledCount = (categoryId: string) => {
    return localMenuItems.filter(
      (item) => item.category === categoryId && item.enabled,
    ).length;
  };

  const getTotalCount = (categoryId: string) => {
    return localMenuItems.filter((item) => item.category === categoryId).length;
  };

  const getCategoryItems = (categoryId: string) => {
    return filteredMenuItems.filter((item) => item.category === categoryId);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: { height: "80vh", display: "flex", flexDirection: "column" },
      }}
    >
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Settings size={24} />
            <Typography variant="h6">Menu Configuration</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {hasUnsavedChanges && (
              <Chip
                label="Unsaved Changes"
                color="warning"
                size="small"
                icon={<Info size={16} />}
              />
            )}
            <IconButton onClick={handleClose} size="small">
              <X size={20} />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="By Category" />
          <Tab label="All Items" />
          <Tab label="Preview" />
          <Tab
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <TestTube size={16} />
                Interface Mode
                {canaryFlagEnabled && (
                  <Chip
                    label="BETA"
                    size="small"
                    color="warning"
                    sx={{ fontSize: "0.625rem", height: 16 }}
                  />
                )}
              </Box>
            }
          />
        </Tabs>
      </Box>

      <DialogContent sx={{ flex: 1, overflow: "hidden", p: 0 }}>
        {/* Search Bar */}
        <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={20} />
                </InputAdornment>
              ),
              endAdornment: searchQuery && (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={() => setSearchQuery("")}>
                    <X size={16} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Tab Content */}
        <Box sx={{ flex: 1, overflow: "auto" }}>
          <TabPanel value={activeTab} index={0}>
            {/* By Category View */}
            <Box sx={{ p: 2 }}>
              {menuCategories.map((category) => {
                const categoryItems = getCategoryItems(category.id);
                const isExpanded = expandedCategories.has(category.id);

                if (searchQuery && categoryItems.length === 0) return null;

                return (
                  <Paper key={category.id} sx={{ mb: 2, overflow: "hidden" }}>
                    <Box
                      sx={{
                        p: 2,
                        backgroundColor: category.color + "10",
                        borderLeft: `4px solid ${category.color}`,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      onClick={() => toggleCategoryExpansion(category.id)}
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ color: category.color, fontWeight: 600 }}
                        >
                          {category.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {category.description}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Chip
                          label={`${getEnabledCount(category.id)}/${getTotalCount(category.id)}`}
                          size="small"
                          sx={{ backgroundColor: category.color + "20" }}
                        />
                        {isExpanded ? (
                          <ChevronDown size={20} />
                        ) : (
                          <ChevronRight size={20} />
                        )}
                      </Box>
                    </Box>
                    <Collapse in={isExpanded}>
                      <List sx={{ py: 0 }}>
                        {categoryItems.map((item) => (
                          <ListItem key={item.id} divider>
                            <ListItemIcon>
                              <item.icon size={20} color={category.color} />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                  }}
                                >
                                  <Typography variant="body2" fontWeight={500}>
                                    {item.label}
                                  </Typography>
                                  {item.badge && (
                                    <Badge
                                      badgeContent={item.badge}
                                      color="error"
                                    />
                                  )}
                                  {item.isCore && (
                                    <Chip
                                      label="Core"
                                      size="small"
                                      color="primary"
                                    />
                                  )}
                                </Box>
                              }
                              secondary={item.description}
                            />
                            <ListItemSecondaryAction>
                              <Tooltip
                                title={
                                  item.isCore
                                    ? "Core items cannot be disabled"
                                    : ""
                                }
                              >
                                <span>
                                  <Switch
                                    checked={item.enabled}
                                    onChange={() => handleToggleItem(item.id)}
                                    disabled={item.isCore}
                                    size="small"
                                  />
                                </span>
                              </Tooltip>
                            </ListItemSecondaryAction>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </Paper>
                );
              })}
            </Box>
          </TabPanel>

          <TabPanel value={activeTab} index={1}>
            {/* All Items View */}
            <List sx={{ p: 1 }}>
              {filteredMenuItems.map((item) => {
                const category = menuCategories.find(
                  (cat) => cat.id === item.category,
                );
                return (
                  <ListItem key={item.id} divider>
                    <ListItemIcon>
                      <item.icon size={20} color={category?.color} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <Typography variant="body2" fontWeight={500}>
                            {item.label}
                          </Typography>
                          {item.badge && (
                            <Badge badgeContent={item.badge} color="error" />
                          )}
                          <Chip
                            label={category?.name}
                            size="small"
                            sx={{
                              backgroundColor: category?.color + "20",
                              color: category?.color,
                              fontSize: "0.6875rem",
                            }}
                          />
                          {item.isCore && (
                            <Chip label="Core" size="small" color="primary" />
                          )}
                        </Box>
                      }
                      secondary={item.description}
                    />
                    <ListItemSecondaryAction>
                      <Tooltip
                        title={
                          item.isCore ? "Core items cannot be disabled" : ""
                        }
                      >
                        <span>
                          <Switch
                            checked={item.enabled}
                            onChange={() => handleToggleItem(item.id)}
                            disabled={item.isCore}
                            size="small"
                          />
                        </span>
                      </Tooltip>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
          </TabPanel>

          <TabPanel value={activeTab} index={2}>
            {/* Preview View */}
            <Box sx={{ p: 2 }}>
              <Alert severity="info" sx={{ mb: 2 }}>
                <Typography variant="body2">
                  This shows how your menu will appear in the sidebar. Only
                  enabled items are displayed, ordered by their position.
                </Typography>
              </Alert>

              <Paper
                sx={{
                  p: 2,
                  backgroundColor: "rgb(235, 235, 235)",
                  width: 68,
                  margin: "0 auto",
                }}
              >
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mb: 2, display: "block", textAlign: "center" }}
                >
                  Menu Preview
                </Typography>
                {localMenuItems
                  .filter((item) => item.enabled)
                  .sort((a, b) => a.order - b.order)
                  .map((item) => (
                    <Box
                      key={item.id}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        p: 1,
                        mb: 0.5,
                        borderRadius: 1,
                        backgroundColor: "white",
                        boxShadow: 1,
                        position: "relative",
                      }}
                    >
                      <item.icon size={24} color="rgb(97, 97, 97)" />
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: "10px",
                          textAlign: "center",
                          mt: 0.5,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          maxWidth: 50,
                        }}
                      >
                        {item.label}
                      </Typography>
                      {item.badge && (
                        <Box
                          sx={{
                            position: "absolute",
                            top: -2,
                            right: -2,
                            backgroundColor: "rgb(204, 65, 37)",
                            color: "white",
                            borderRadius: "50%",
                            width: 16,
                            height: 16,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.625rem",
                            fontWeight: 600,
                          }}
                        >
                          {item.badge}
                        </Box>
                      )}
                    </Box>
                  ))}
              </Paper>

              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                >
                  {localMenuItems.filter((item) => item.enabled).length} of{" "}
                  {localMenuItems.length} items enabled
                </Typography>
              </Box>
            </Box>
          </TabPanel>

          <TabPanel value={activeTab} index={3}>
            {/* Interface Mode View */}
            <Box sx={{ p: 3 }}>
              {/* Canary Flag Warning */}
              {isCanaryActive && (
                <Alert
                  severity="warning"
                  sx={{ mb: 3 }}
                  icon={<TestTube size={20} />}
                >
                  <Typography variant="body2" fontWeight={600}>
                    CANARY MODE ACTIVE
                  </Typography>
                  <Typography variant="body2">
                    Interface mode override is enabled. The app is using{" "}
                    {activeMode.toUpperCase()} interface instead of the detected{" "}
                    {detectedMode.toUpperCase()} mode.
                  </Typography>
                </Alert>
              )}

              {/* Device Information */}
              <Paper sx={{ p: 3, mb: 3, backgroundColor: "grey.50" }}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Monitor size={20} />
                  Device Information
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 2,
                  }}
                >
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Device Type
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      {deviceInfo.deviceType.toUpperCase()}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      PWA Mode
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      {deviceInfo.isPWA ? "Yes" : "No"}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Detected Mode
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      {detectedMode.toUpperCase()}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Active Mode
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight={500}
                      color={isCanaryActive ? "warning.main" : "primary.main"}
                    >
                      {activeMode.toUpperCase()}
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Canary Flag Control */}
              <Paper sx={{ p: 3, mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}
                >
                  <TestTube size={20} />
                  Canary Flag Controls
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Enable interface mode override to test different mobile
                  interfaces regardless of your device type.
                </Typography>

                <FormControlLabel
                  control={
                    <Switch
                      checked={canaryFlagEnabled}
                      onChange={(e) => setCanaryFlagEnabled(e.target.checked)}
                      color="warning"
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="body2" fontWeight={500}>
                        Enable Interface Mode Override
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Override automatic device detection
                      </Typography>
                    </Box>
                  }
                />
              </Paper>

              {/* Interface Mode Selection */}
              {canaryFlagEnabled && (
                <Paper sx={{ p: 3, mb: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Smartphone size={20} />
                    Interface Mode Selection
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3 }}
                  >
                    Choose which interface mode to use. This will override the
                    automatic detection.
                  </Typography>

                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    {[
                      {
                        value: "default" as InterfaceMode,
                        label: "Default Mode",
                        description:
                          "Use automatic device detection (normal behavior)",
                        icon: Monitor,
                      },
                      {
                        value: "ios" as InterfaceMode,
                        label: "iOS Mode",
                        description:
                          "Force iOS-style interface with KonstaUI iOS theme",
                        icon: Smartphone,
                      },
                      {
                        value: "android" as InterfaceMode,
                        label: "Android Mode",
                        description:
                          "Force Android-style interface with KonstaUI Material theme",
                        icon: Smartphone,
                      },
                    ].map((mode) => (
                      <Paper
                        key={mode.value}
                        sx={{
                          p: 2,
                          cursor: "pointer",
                          border: selectedMode === mode.value ? 2 : 1,
                          borderColor:
                            selectedMode === mode.value
                              ? "primary.main"
                              : "divider",
                          backgroundColor:
                            selectedMode === mode.value
                              ? "primary.50"
                              : "transparent",
                          "&:hover": {
                            backgroundColor:
                              selectedMode === mode.value
                                ? "primary.100"
                                : "grey.50",
                          },
                        }}
                        onClick={() => setSelectedMode(mode.value)}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 2,
                          }}
                        >
                          <Box
                            sx={{
                              p: 1,
                              borderRadius: 1,
                              backgroundColor:
                                selectedMode === mode.value
                                  ? "primary.main"
                                  : "grey.200",
                              color:
                                selectedMode === mode.value
                                  ? "white"
                                  : "text.secondary",
                            }}
                          >
                            <mode.icon size={20} />
                          </Box>
                          <Box sx={{ flex: 1 }}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                mb: 0.5,
                              }}
                            >
                              <Typography variant="body1" fontWeight={600}>
                                {mode.label}
                              </Typography>
                              {selectedMode === mode.value && (
                                <Chip
                                  label="SELECTED"
                                  size="small"
                                  color="primary"
                                  sx={{ fontSize: "0.625rem", height: 20 }}
                                />
                              )}
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                              {mode.description}
                            </Typography>
                          </Box>
                        </Box>
                      </Paper>
                    ))}
                  </Box>
                </Paper>
              )}

              {/* Current Status */}
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: isCanaryActive ? "warning.50" : "success.50",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Info size={20} />
                  Current Status
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2" fontWeight={500}>
                    Mode Override:
                  </Typography>
                  <Typography
                    variant="body2"
                    color={canaryFlagEnabled ? "warning.main" : "success.main"}
                  >
                    {canaryFlagEnabled ? "ENABLED" : "DISABLED"}
                  </Typography>

                  <Typography variant="body2" fontWeight={500}>
                    Selected Mode:
                  </Typography>
                  <Typography variant="body2">
                    {selectedMode.toUpperCase()}
                  </Typography>

                  <Typography variant="body2" fontWeight={500}>
                    Active Interface:
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    color={isCanaryActive ? "warning.main" : "primary.main"}
                  >
                    {activeMode.toUpperCase()}
                    {isCanaryActive && " (OVERRIDE)"}
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </TabPanel>
        </Box>
      </DialogContent>

      <Divider />

      <DialogActions sx={{ justifyContent: "space-between", p: 2 }}>
        <Box>
          <Button
            startIcon={<RotateCcw size={16} />}
            onClick={handleResetToDefaults}
            variant="outlined"
            size="small"
          >
            Reset to Defaults
          </Button>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleSave}
            disabled={!hasUnsavedChanges}
            startIcon={<Save size={16} />}
          >
            Save Changes
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
