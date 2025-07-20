import React, { createContext, useContext, useState, useEffect } from "react";
import {
  InterfaceMode,
  getDefaultInterfaceMode,
  logDeviceInfo,
} from "../../../utils/deviceDetection";

interface InterfaceModeState {
  // Canary flag to enable interface mode override
  canaryFlagEnabled: boolean;
  // Selected interface mode (when canary flag is enabled)
  selectedMode: InterfaceMode;
  // Currently active interface mode (respects canary flag)
  activeMode: InterfaceMode;
  // Detected default mode (based on device/PWA)
  detectedMode: InterfaceMode;
}

interface InterfaceModeContextType extends InterfaceModeState {
  setCanaryFlagEnabled: (enabled: boolean) => void;
  setSelectedMode: (mode: InterfaceMode) => void;
  isCanaryActive: boolean;
}

const InterfaceModeContext = createContext<
  InterfaceModeContextType | undefined
>(undefined);

const STORAGE_KEY = "teams-interface-mode";

interface StoredSettings {
  canaryFlagEnabled: boolean;
  selectedMode: InterfaceMode;
}

export const InterfaceModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const detectedMode = getDefaultInterfaceMode();

  const [state, setState] = useState<InterfaceModeState>({
    canaryFlagEnabled: false,
    selectedMode: "default",
    activeMode: detectedMode,
    detectedMode,
  });

  // Load settings from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const settings: StoredSettings = JSON.parse(stored);
        setState((prev) => ({
          ...prev,
          canaryFlagEnabled: settings.canaryFlagEnabled,
          selectedMode: settings.selectedMode,
          activeMode: settings.canaryFlagEnabled
            ? settings.selectedMode
            : prev.detectedMode,
        }));
      }
    } catch (error) {
      console.warn("Failed to load interface mode settings:", error);
    }

    // Log device info in development
    if (process.env.NODE_ENV === "development") {
      logDeviceInfo();
    }
  }, [detectedMode]);

  // Save settings to localStorage when they change
  useEffect(() => {
    const settings: StoredSettings = {
      canaryFlagEnabled: state.canaryFlagEnabled,
      selectedMode: state.selectedMode,
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
      console.warn("Failed to save interface mode settings:", error);
    }
  }, [state.canaryFlagEnabled, state.selectedMode]);

  const setCanaryFlagEnabled = (enabled: boolean) => {
    setState((prev) => ({
      ...prev,
      canaryFlagEnabled: enabled,
      activeMode: enabled ? prev.selectedMode : prev.detectedMode,
    }));

    if (process.env.NODE_ENV === "development") {
      console.log("🚩 Canary flag:", enabled ? "ENABLED" : "DISABLED");
      console.log(
        "🎯 Active mode:",
        enabled ? state.selectedMode : detectedMode,
      );
    }
  };

  const setSelectedMode = (mode: InterfaceMode) => {
    setState((prev) => ({
      ...prev,
      selectedMode: mode,
      activeMode: prev.canaryFlagEnabled ? mode : prev.detectedMode,
    }));

    if (process.env.NODE_ENV === "development") {
      console.log("📱 Selected interface mode:", mode);
      if (state.canaryFlagEnabled) {
        console.log("🎯 Active mode changed to:", mode);
      }
    }
  };

  const isCanaryActive =
    state.canaryFlagEnabled && state.activeMode !== state.detectedMode;

  const contextValue: InterfaceModeContextType = {
    ...state,
    setCanaryFlagEnabled,
    setSelectedMode,
    isCanaryActive,
  };

  return (
    <InterfaceModeContext.Provider value={contextValue}>
      {children}
    </InterfaceModeContext.Provider>
  );
};

export const useInterfaceMode = (): InterfaceModeContextType => {
  const context = useContext(InterfaceModeContext);
  if (context === undefined) {
    throw new Error(
      "useInterfaceMode must be used within an InterfaceModeProvider",
    );
  }
  return context;
};
