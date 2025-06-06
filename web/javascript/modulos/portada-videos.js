document.addEventListener('DOMContentLoaded', () => {
    const portadaVideo= document.querySelectorAll('.contenedor-video');

    portadaVideo.forEach(fotoPortada => {
        fotoPortada.addEventListener('click', () => {
            if (fotoPortada.classList.contains('video-cargado')) {
                return;
            }

            const videoId = fotoPortada.dataset.videoId;
            const iframe = document.createElement('iframe');

            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`); 
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'); 
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('title', 'Vídeo de YouTube');
            fotoPortada.innerHTML = '';
            fotoPortada.appendChild(iframe);
            fotoPortada.classList.add('video-cargado');
        });
    });
});