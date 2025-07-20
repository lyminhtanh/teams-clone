import { useState, useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export const usePWAInstall = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone ||
      document.referrer.includes("android-app://");

    console.log("PWA Install Check:", { isStandalone });
    setIsInstalled(isStandalone);

    const handleBeforeInstallPrompt = (e: Event) => {
      console.log("beforeinstallprompt event triggered", e);
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      console.log("App installed successfully");
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    // For development/testing - set installable after a delay if no prompt
    const fallbackTimer = setTimeout(() => {
      if (!isStandalone && !deferredPrompt) {
        console.log("Fallback: Setting installable to true for testing");
        setIsInstallable(true);
      }
    }, 2000);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const installApp = async () => {
    console.log("Install button clicked", { deferredPrompt, isInstallable });

    if (!deferredPrompt) {
      console.warn("No deferred prompt available. Trying fallback methods...");

      // Fallback for browsers that support manual installation
      if ('serviceWorker' in navigator) {
        alert("To install this app:\n\n1. Click the browser menu (⋮)\n2. Select 'Install app' or 'Add to Home Screen'\n3. Follow the prompts");
        return;
      }
      return;
    }

    try {
      console.log("Triggering install prompt...");
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      console.log("User choice:", choiceResult.outcome);

      if (choiceResult.outcome === "accepted") {
        setDeferredPrompt(null);
        setIsInstallable(false);
      }
    } catch (error) {
      console.error("Error during installation:", error);
    }
  };

  return {
    isInstallable,
    isInstalled,
    installApp,
  };
};
