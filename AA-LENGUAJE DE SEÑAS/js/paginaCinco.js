document.addEventListener("DOMContentLoaded", function () {
    // Función para obtener el parámetro de la URL
    function getParameterByName(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Función para cargar el video correspondiente y mostrar la palabra seleccionada
    function loadVideoAndText() {
        const palabraSeleccionada = getParameterByName('palabra');
        const videoContainer = document.querySelector('.video-container');
        const wordTitle = document.querySelector('.word-title');
        const videoMessage = document.querySelector('.video-message');

        if (palabraSeleccionada && videoContainer) {
            const videoPlayer = document.getElementById('videoPlayer');
            const videoSource = document.getElementById('videoSource');

            if (videoPlayer && videoSource) {
                // Utiliza un switch para asignar la ruta del video según la palabra seleccionada
                switch (palabraSeleccionada) {
                    case 'Gracias':
                        videoSource.src = 'Modelos/Gracias.mp4';
                        break;
                    case 'Mamá':
                        videoSource.src = 'Modelos/Mama.mp4';
                        break;
                    case 'Papá':
                        videoSource.src = 'Modelos/Papa.mp4';
                        break;
                    case 'Hola':
                        videoSource.src = 'Mdelos/G/G.mp4';
                        break;
                    case 'Perdón':
                        videoSource.src = 'Mdelos/G/G.mp4';
                        break;
                    case 'Comida':
                        videoSource.src = 'Mdelos/G/G.mp4';
                        break;
                    case 'Agua':
                        videoSource.src = 'Mdelos/G/G.mp4';
                        break;
                    case 'Te amo':
                        videoSource.src = 'Mdelos/G/G.mp4';
                        break;
                    case 'Popó':
                        videoSource.src = 'Mdelos/G/G.mp4';
                        break;
                    default:
                        console.error('Palabra no reconocida');
                        break;
                }

                videoPlayer.load();

                // Mostrar la palabra seleccionada en el título
                if (wordTitle) {
                    wordTitle.textContent = palabraSeleccionada;
                } else {
                    console.error('Elemento del título de la palabra no encontrado');
                }

                // Mostrar el mensaje encima del video
                if (videoMessage) {
                    videoMessage.textContent = `Video de la palabra "${palabraSeleccionada}" en lenguaje de señas`;
                } else {
                    console.error('Elemento del mensaje de video no encontrado');
                }
            } else {
                console.error('Elementos de video no encontrados');
            }
        }
    }

    // Función para redirigir a la página de inicio
    function redirectToHomePage() {
        window.location.href = 'index.html';
    }

    // Función para redirigir a la página tres
    function goToPaginaTres() {
        window.location.href = 'paginaTres.html';
    }

    // Agregar event listener al botón de inicio
    const startButton = document.querySelector(".start-button");
    startButton.addEventListener("click", redirectToHomePage);

    // Agregar event listener al botón de volver
    const volverButton = document.querySelector(".volver-button");
    volverButton.addEventListener("click", goToPaginaTres);

    // Llama a la función para cargar el video y mostrar la palabra al cargar la página
    loadVideoAndText();
});
