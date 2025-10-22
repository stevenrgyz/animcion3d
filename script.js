// Obtiene referencias al video y a la primera galería
const videoElement = document.getElementById('videoReel');
const firstGallery = document.getElementById('gallery-section'); // Usaremos la primera galería

if (videoElement && firstGallery) {
    // Opciones del observador: 0.0 de threshold significa que se dispara tan pronto
    // como la galería (el elemento observado) entra en el viewport.
    const observerOptions = {
        root: null, 
        threshold: 0.0 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // La galería es visible, detenemos el video de fondo
                videoElement.pause();
            } else {
                // La galería no es visible (estamos en el reel-spacer o arriba)
                // Iniciamos la reproducción
                videoElement.play().catch(error => {
                    // Manejo de error de Promise (para navegadores que bloquean el autoplay)
                });
            }
        });
    }, observerOptions);

    // Empezar a observar la primera galería
    observer.observe(firstGallery);
}