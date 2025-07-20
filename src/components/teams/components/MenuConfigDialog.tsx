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
