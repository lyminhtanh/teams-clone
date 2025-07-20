import React from "react";
import { Button, Fab, Snackbar, Alert } from "@mui/material";
import { Download, X, Smartphone } from "lucide-react";
import { usePWAInstall } from "../hooks/usePWAInstall";

const PWAInstallPrompt: React.FC = () => {
  const { isInstallable, isInstalled, installApp } = usePWAInstall();
  const [showPrompt, setShowPrompt] = React.useState(false);

  React.useEffect(() => {
    if (isInstallable && !isInstalled) {
      const timer = setTimeout(() => setShowPrompt(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [isInstallable, isInstalled]);

  const handleInstall = async () => {
    await installApp();
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  // Don't show anything if app is already installed or not installable
  if (isInstalled || !isInstallable) {
    return null;
  }

  return (
    <>
      {/* Floating Install Button */}
      {isInstallable && !showPrompt && (
        <Fab
          color="primary"
          onClick={() => setShowPrompt(true)}
          sx={{
            position: "fixed",
            bottom: 80,
            right: 16,
            zIndex: 1000,
            backgroundColor: "#6264a7",
            "&:hover": {
              backgroundColor: "#5a5c9e",
            },
          }}
        >
          <Download size={24} />
        </Fab>
      )}

      {/* Install Prompt Snackbar */}
      <Snackbar
        open={showPrompt}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ mb: 2 }}
      >
        <Alert
          severity="info"
          icon={<Smartphone size={20} />}
          action={
            <div style={{ display: "flex", gap: 8 }}>
              <Button
                color="inherit"
                size="small"
                onClick={handleInstall}
                startIcon={<Download size={16} />}
              >
                Install
              </Button>
              <Button color="inherit" size="small" onClick={handleDismiss}>
                <X size={16} />
              </Button>
            </div>
          }
          sx={{
            backgroundColor: "#6264a7",
            color: "white",
            "& .MuiAlert-icon": {
              color: "white",
            },
            "& .MuiAlert-action .MuiButton-root": {
              color: "white",
            },
          }}
        >
          Install Teams Dashboard as an app for the best mobile experience!
        </Alert>
      </Snackbar>
    </>
  );
};

export default PWAInstallPrompt;
