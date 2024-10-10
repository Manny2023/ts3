importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA4TDdmsxfthFR4PTuBAhEQdutP06i9c2I",
    authDomain: "telesecundaria-ts.firebaseapp.com",
    projectId: "telesecundaria-ts",
    storageBucket: "telesecundaria-ts.appspot.com",
    messagingSenderId: "572048540410",
    appId: "1:572048540410:web:e08e9c3971b191e92cbf43",
    measurementId: "G-T6V43KVHRX"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Manejar mensajes en segundo plano
messaging.onBackgroundMessage((payload) => {
    console.log('Mensaje recibido en segundo plano: ', payload);

    const notificationTitle = payload.notification.title || 'Título por defecto';
    const notificationOptions = {
        body: payload.notification.body || 'Cuerpo de notificación por defecto',
        icon: payload.notification.icon || 'https://i.ibb.co/T1jVqPw/favicon-32x32.png',
    };

    // Mostrar la notificación
    self.registration.showNotification(notificationTitle, notificationOptions);
});
