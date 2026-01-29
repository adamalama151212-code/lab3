window.onload = () => {
    'use strict';
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(() => console.log('Service Worker zarejestrowany poprawnie.'))
            .catch((error) => console.error('Błąd rejestracji:', error));
    }
};
