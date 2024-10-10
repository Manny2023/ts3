// Manejar mensajes en primer plano
messaging.onMessage((payload) => {
    console.log('Mensaje recibido en primer plano:', payload);

    const notificationTitle = payload.notification.title || 'Título por defecto';
    const notificationOptions = {
        body: payload.notification.body || 'Cuerpo de notificación por defecto',
        icon: payload.notification.icon || 'https://i.ibb.co/T1jVqPw/favicon-32x32.png'
    };

    // Mostrar la notificación
    new Notification(notificationTitle, notificationOptions);

    // Reproducir sonido
    const audio = new Audio('http://www.sonidosmp3gratis.com/sounds/messenger-tono-mensaje-.mp3');
    audio.play().catch(function(err) {
        console.log('Error al reproducir el sonido:', err);
    });
});
