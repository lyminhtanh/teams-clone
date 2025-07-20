import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { registerSW } from 'virtual:pwa-register';

// Register service worker for PWA - pure PWA installation only
registerSW({
  onNeedRefresh() {
    // Auto-update without user intervention for seamless experience
    window.location.reload();
  },
  onOfflineReady() {
    console.log('App ready to work offline');
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
