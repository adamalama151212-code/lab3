window.onload = () => {
    'use strict';
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(() => console.log('Service Worker zarejestrowany poprawnie.'))
            .catch((error) => console.error('Błąd rejestracji:', error));
    }
};

// Prośba o uprawnienia do powiadomień
if ("Notification" in window) {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            console.log("Uprawnienia do powiadomień przyznane.");
            // Wyświetlenie testowego powiadomienia po 3 sekundach
            setTimeout(() => {
                new Notification("Meme-Koty PWA", {
                    body: "Zajrzyj do galerii, czekają nowe koty!",
                    icon: "images/web-app-manifest-192x192.png"
                });
            }, 3000);
        }
    });
}
