export type DeviceType = "ios" | "android" | "desktop";
export type InterfaceMode = "ios" | "android" | "default";

/**
 * Detects if the current device is iOS (iPhone, iPad, iPod)
 */
export const isIOS = (): boolean => {
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
};

/**
 * Detects if the current device is Android
 */
export const isAndroid = (): boolean => {
  return /Android/.test(navigator.userAgent);
};

/**
 * Detects if the current device is mobile (iOS or Android)
 */
export const isMobile = (): boolean => {
  return isIOS() || isAndroid();
};

/**
 * Detects if the app is running in PWA mode (standalone)
 */
export const isPWA = (): boolean => {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    (window.navigator as any).standalone === true ||
    document.referrer.includes("android-app://")
  );
};

/**
 * Detects if the app is running in iOS Safari PWA mode
 */
export const isIOSPWA = (): boolean => {
  return isIOS() && isPWA();
};

/**
 * Detects if the app is running in Android PWA mode
 */
export const isAndroidPWA = (): boolean => {
  return isAndroid() && isPWA();
};

/**
 * Gets the device type based on user agent
 */
export const getDeviceType = (): DeviceType => {
  if (isIOS()) return "ios";
  if (isAndroid()) return "android";
  return "desktop";
};

/**
 * Determines the appropriate interface mode based on device and PWA status
 */
export const getDefaultInterfaceMode = (): InterfaceMode => {
  // Only use native interfaces when in PWA mode
  if (isIOSPWA()) return "ios";
  if (isAndroidPWA()) return "android";
  return "default";
};

/**
 * Gets detailed device information for debugging
 */
export const getDeviceInfo = () => {
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    deviceType: getDeviceType(),
    isIOS: isIOS(),
    isAndroid: isAndroid(),
    isMobile: isMobile(),
    isPWA: isPWA(),
    isIOSPWA: isIOSPWA(),
    isAndroidPWA: isAndroidPWA(),
    defaultInterfaceMode: getDefaultInterfaceMode(),
    maxTouchPoints: navigator.maxTouchPoints,
    standalone: (window.navigator as any).standalone,
    displayMode: window.matchMedia("(display-mode: standalone)").matches
      ? "standalone"
      : "browser",
  };
};

/**
 * Logs device detection information to console (for debugging)
 */
export const logDeviceInfo = () => {
  const info = getDeviceInfo();
  console.group("🔍 Device Detection Info");
  console.table(info);
  console.groupEnd();
  return info;
};
