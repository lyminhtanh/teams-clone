// PWA Debug Script
console.log("=== PWA Debug Info ===");

// Check if service worker is registered
navigator.serviceWorker.getRegistrations().then(registrations => {
  console.log("Service Worker Registrations:", registrations.length);
  registrations.forEach((registration, index) => {
    console.log(`SW ${index + 1}:`, registration.scope);
  });
});

// Check if manifest is accessible
fetch('/manifest.webmanifest')
  .then(response => response.json())
  .then(manifest => {
    console.log("Manifest loaded:", manifest);
  })
  .catch(error => {
    console.error("Manifest error:", error);
  });

// Check PWA install criteria
console.log("PWA Install Criteria:");
console.log("- Is HTTPS:", location.protocol === 'https:' || location.hostname === 'localhost');
console.log("- Has Service Worker:", 'serviceWorker' in navigator);
console.log("- Is Standalone:", window.matchMedia('(display-mode: standalone)').matches);

// Listen for beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
  console.log("beforeinstallprompt event fired!", e);
});

// Check if already installed
if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log("App is already installed!");
}
