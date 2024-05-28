document.addEventListener("DOMContentLoaded", function () {
    // Función para obtener el parámetro de la URL
    function getParameterByName(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Función para redirigir a la página de inicio (index.html)
    function redirectToHomePage() {
        window.location.href = 'index.html';
    }

    // Función para redirigir a la página dos
    function goToPaginaDos() {
        window.location.href = 'paginaDos.html';
    }

    // Función para actualizar el título en la página cuatro
    function updateTitle() {
        // Obtén la letra seleccionada de la URL
        const letter = getParameterByName('letra');
        // Actualiza el contenido del título en la página cuatro
        const letterTitle = document.querySelector(".letter-title");
        letterTitle.textContent = `Letra ${letter}`;
    }

    // Función para cargar el video correspondiente a la letra
    function loadVideoAndText() {
        const videoLetter = getParameterByName('letra');
        const videoContainer = document.querySelector('.video-container');

        if (videoLetter && videoContainer) {
            const videoPlayer = document.getElementById('videoPlayer');
            const videoSource = document.getElementById('videoSource');

            // Verificar si los elementos del video existen
            if (videoPlayer && videoSource) {
                switch (videoLetter) {
                    case 'A':
                        videoSource.src = 'Modelos/A/LETRA A.mp4';

                        const img1 = document.createElement('img');
                        img1.src = 'Modelos/A/FRONTAL.png';
                        img1.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img1);

                        const img2 = document.createElement('img');
                        img2.src = 'Modelos/A/TRASERA.png';
                        img2.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img2);

                        const img3 = document.createElement('img');
                        img3.src = 'Modelos/A/LATERAL2.png';
                        img3.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img3);

                        const img4 = document.createElement('img');
                        img4.src = 'Modelos/A/LATERAL1.png';
                        img4.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img4);
                        break;
                    case 'B':
                        videoSource.src = 'Modelos/B/LETRA B.mp4';

                        const img11 = document.createElement('img');
                        img11.src = 'Modelos/B/FRONTAL.png';
                        img11.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img11);

                        const img22 = document.createElement('img');
                        img22.src = 'Modelos/B/TRASERA.png';
                        img22.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img22);

                        const img33 = document.createElement('img');
                        img33.src = 'Modelos/B/LATERAL1.png';
                        img33.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img33);

                        const img44 = document.createElement('img');
                        img44.src = 'Modelos/B/LATERAL2.png';
                        img44.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img44);
                        break;
                    case 'C':
                        videoSource.src = 'Modelos/C/LETRA C.mp4';

                        const img111 = document.createElement('img');
                        img111.src = 'Modelos/C/FRONTAL.png';
                        img111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img111);

                        const img222 = document.createElement('img');
                        img222.src = 'Modelos/C/TRASERA.png';
                        img222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img222);

                        const img333 = document.createElement('img');
                        img333.src = 'Modelos/C/LATERAL1.png';
                        img333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img333);

                        const img444 = document.createElement('img');
                        img444.src = 'Modelos/C/LATERAL2.png';
                        img444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img444);
                        break;
                    case 'D':
                        videoSource.src = 'Modelos/D/LETRA D.mp4';

                        const img1111 = document.createElement('img');
                        img1111.src = 'Modelos/D/FRONTAL.png';
                        img1111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img1111);

                        const img2222 = document.createElement('img');
                        img2222.src = 'Modelos/D/TRASERA.png';
                        img2222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img2222);

                        const img3333 = document.createElement('img');
                        img3333.src = 'Modelos/D/LATERAL2.png';
                        img3333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img3333);

                        const img4444 = document.createElement('img');
                        img4444.src = 'Modelos/D/LATERAL1.png';
                        img4444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img4444);
                        break;
                    case 'E':
                        videoSource.src = 'Modelos/E/E.mp4';

                        const img11111 = document.createElement('img');
                        img11111.src = 'Modelos/E/FRONTAL.png';
                        img11111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img11111);

                        const img22222 = document.createElement('img');
                        img22222.src = 'Modelos/E/TRASERA.png';
                        img22222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img22222);

                        const img33333 = document.createElement('img');
                        img33333.src = 'Modelos/E/LATERAL2.png';
                        img33333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img33333);

                        const img44444 = document.createElement('img');
                        img44444.src = 'Modelos/E/LATERAL1.png';
                        img44444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img44444);
                        break;
                    case 'F':
                        videoSource.src = 'Modelos/F/F.mp4';

                        const img111111 = document.createElement('img');
                        img111111.src = 'Modelos/F/FRONTAL.png';
                        img111111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img111111);

                        const img222222 = document.createElement('img');
                        img222222.src = 'Modelos/F/TRASERA.png';
                        img222222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img222222);

                        const img333333 = document.createElement('img');
                        img333333.src = 'Modelos/F/LATERAL2.png';
                        img333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img333333);

                        const img444444 = document.createElement('img');
                        img444444.src = 'Modelos/F/LATERAL1.png';
                        img444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img444444);
                        break;
                    case 'G':
                        videoSource.src = 'Modelos/G/G.mp4';

                        const img1111111 = document.createElement('img');
                        img1111111.src = 'Modelos/G/FRONTAL.png';
                        img1111111.classList.add('Letra_Frontal_G'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img1111111);

                        const img2222222 = document.createElement('img');
                        img2222222.src = 'Modelos/G/TRASERA.png';
                        img2222222.classList.add('Letra_Trasera_G'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img2222222);

                        const img3333333 = document.createElement('img');
                        img3333333.src = 'Modelos/G/LATERAL2.png';
                        img3333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img3333333);

                        const img4444444 = document.createElement('img');
                        img4444444.src = 'Modelos/G/LATERAL1.png';
                        img4444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img4444444);
                        break;
                    case 'H':
                        videoSource.src = 'Modelos/H/H.mp4';

                        const img11111111 = document.createElement('img');
                        img11111111.src = 'Modelos/H/FRONTAL.png';
                        img11111111.classList.add('Letra_Frontal_G'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img11111111);

                        const img22222222 = document.createElement('img');
                        img22222222.src = 'Modelos/H/TRASERA.png';
                        img22222222.classList.add('Letra_Trasera_G'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img22222222);

                        const img33333333 = document.createElement('img');
                        img33333333.src = 'Modelos/H/LATERAL1.png';
                        img33333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img33333333);

                        const img44444444 = document.createElement('img');
                        img44444444.src = 'Modelos/H/LATERAL2.png';
                        img44444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img44444444);
                        break;
                    case 'I':
                        videoSource.src = 'Modelos/I/I.mp4';

                        const img111111111 = document.createElement('img');
                        img111111111.src = 'Modelos/I/FRONTAL.png';
                        img111111111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img111111111);

                        const img222222222 = document.createElement('img');
                        img222222222.src = 'Modelos/I/TRASERA.png';
                        img222222222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img222222222);

                        const img333333333 = document.createElement('img');
                        img333333333.src = 'Modelos/I/LATERA2.png';
                        img333333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img333333333);

                        const img444444444 = document.createElement('img');
                        img444444444.src = 'Modelos/I/LATERAL1.png';
                        img444444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img444444444);
                        break;
                    case 'J':
                        videoSource.src = 'Modelos/J/J.mp4';

                        const img1111111111 = document.createElement('img');
                        img1111111111.src = 'Modelos/J/FRONTAL.png';
                        img1111111111.classList.add('Letra_Frontal_J'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img1111111111);

                        const img2222222222 = document.createElement('img');
                        img2222222222.src = 'Modelos/J/TRASERA.png';
                        img2222222222.classList.add('Letra_Trasera_J'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img2222222222);

                        const img3333333333 = document.createElement('img');
                        img3333333333.src = 'Modelos/J/LATERAL2.png';
                        img3333333333.classList.add('Letra_Derecha_J'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img3333333333);

                        const img4444444444 = document.createElement('img');
                        img4444444444.src = 'Modelos/J/LATERAL1.png';
                        img4444444444.classList.add('Letra_Izquierda_J'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img4444444444);
                        break;
                    case 'K':
                        videoSource.src = 'Modelos/K/K.mp4';

                        const img11111111111 = document.createElement('img');
                        img11111111111.src = 'Modelos/K/FRONTAL.png';
                        img11111111111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img11111111111);

                        const img22222222222 = document.createElement('img');
                        img22222222222.src = 'Modelos/K/TRASERA.png';
                        img22222222222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img22222222222);

                        const img33333333333 = document.createElement('img');
                        img33333333333.src = 'Modelos/K/LATERAL2.png';
                        img33333333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img33333333333);

                        const img44444444444 = document.createElement('img');
                        img44444444444.src = 'Modelos/K/LATERAL1.png';
                        img44444444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img44444444444);
                        break;
                    case 'L':
                        videoSource.src = 'Modelos/L/L.mp4';

                        const img111111111111 = document.createElement('img');
                        img111111111111.src = 'Modelos/L/FRONTAL.png';
                        img111111111111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img111111111111);

                        const img222222222222 = document.createElement('img');
                        img222222222222.src = 'Modelos/L/TRASERA.png';
                        img222222222222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img222222222222);

                        const img333333333333 = document.createElement('img');
                        img333333333333.src = 'Modelos/L/LATERAL2.png';
                        img333333333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img333333333333);

                        const img444444444444 = document.createElement('img');
                        img444444444444.src = 'Modelos/L/LATERAL1.png';
                        img444444444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img444444444444);
                        break;
                    case 'M':
                        videoSource.src = 'Modelos/M/M.mp4';

                        const img1111111111111 = document.createElement('img');
                        img1111111111111.src = 'Modelos/M/FRONTAL.png';
                        img1111111111111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img1111111111111);

                        const img2222222222222 = document.createElement('img');
                        img2222222222222.src = 'Modelos/M/TRASERA.png';
                        img2222222222222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img2222222222222);

                        const img3333333333333 = document.createElement('img');
                        img3333333333333.src = 'Modelos/M/LATERAL1.png';
                        img3333333333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img3333333333333);

                        const img4444444444444 = document.createElement('img');
                        img4444444444444.src = 'Modelos/M/LATERAL2.png';
                        img4444444444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img4444444444444);
                        break;
                    case 'N':
                        videoSource.src = 'Modelos/N/N.mp4';

                        const img11111111111111 = document.createElement('img');
                        img11111111111111.src = 'Modelos/N/FRONTAL.png';
                        img11111111111111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img11111111111111);

                        const img22222222222222 = document.createElement('img');
                        img22222222222222.src = 'Modelos/N/TRASERA.png';
                        img22222222222222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img22222222222222);

                        const img33333333333333 = document.createElement('img');
                        img33333333333333.src = 'Modelos/N/LATERAL1.png';
                        img33333333333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img33333333333333);

                        const img44444444444444 = document.createElement('img');
                        img44444444444444.src = 'Modelos/N/LATERAL2.png';
                        img44444444444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img44444444444444);
                        break;
                    case 'Ñ':
                        videoSource.src = 'Modelos/Ñ/Ñ.mp4';

                        const img111111111111111 = document.createElement('img');
                        img111111111111111.src = 'Modelos/Ñ/FRONTAL.png';
                        img111111111111111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img111111111111111);

                        const img222222222222222 = document.createElement('img');
                        img222222222222222.src = 'Modelos/Ñ/TRASERA.png';
                        img222222222222222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img222222222222222);

                        const img333333333333333 = document.createElement('img');
                        img333333333333333.src = 'Modelos/Ñ/LATERAL1.png';
                        img333333333333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img333333333333333);

                        const img444444444444444 = document.createElement('img');
                        img444444444444444.src = 'Modelos/Ñ/LATERAL2.png';
                        img444444444444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img444444444444444);
                        break;
                    case 'O':
                        videoSource.src = 'Modelos/O/O.mp4';

                        const img1111111111111111 = document.createElement('img');
                        img1111111111111111.src = 'Modelos/O/FRONTAL.png';
                        img1111111111111111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img1111111111111111);

                        const img2222222222222222 = document.createElement('img');
                        img2222222222222222.src = 'Modelos/O/TRASERA.png';
                        img2222222222222222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img2222222222222222);

                        const img3333333333333333 = document.createElement('img');
                        img3333333333333333.src = 'Modelos/O/LATERAL1.png';
                        img3333333333333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img3333333333333333);

                        const img4444444444444444 = document.createElement('img');
                        img4444444444444444.src = 'Modelos/O/LATERAL2.png';
                        img4444444444444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img4444444444444444);
                        break;
                    case 'P':
                        videoSource.src = 'Modelos/P/P.mp4';

                        const img11111111111111111 = document.createElement('img');
                        img11111111111111111.src = 'Modelos/P/FRONTAL.png';
                        img11111111111111111.classList.add('Letra_Frontal_G'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img11111111111111111);

                        const img22222222222222222 = document.createElement('img');
                        img22222222222222222.src = 'Modelos/P/TRASERA.png';
                        img22222222222222222.classList.add('Letra_Trasera_G'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img22222222222222222);

                        const img33333333333333333 = document.createElement('img');
                        img33333333333333333.src = 'Modelos/P/LATERAL1.png';
                        img33333333333333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img33333333333333333);

                        const img44444444444444444 = document.createElement('img');
                        img44444444444444444.src = 'Modelos/P/LATERAL2.png';
                        img44444444444444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img44444444444444444);
                        break;
                    case 'Q':
                        videoSource.src = 'Modelos/Q/Q.mp4';

                        const img111111111111111111 = document.createElement('img');
                        img111111111111111111.src = 'Modelos/Q/FRONTAL.png';
                        img111111111111111111.classList.add('Letra_Frontal_G'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img111111111111111111);

                        const img222222222222222222 = document.createElement('img');
                        img222222222222222222.src = 'Modelos/Q/TRASERA.png';
                        img222222222222222222.classList.add('Letra_Trasera_G'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img222222222222222222);

                        const img333333333333333333 = document.createElement('img');
                        img333333333333333333.src = 'Modelos/Q/LATERAL2.png';
                        img333333333333333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img333333333333333333);

                        const img444444444444444444 = document.createElement('img');
                        img444444444444444444.src = 'Modelos/Q/LATERAL1.png';
                        img444444444444444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img444444444444444444);
                        break;
                    case 'R':
                        videoSource.src = 'Modelos/R/R.mp4';

                        const img1111111111111111111 = document.createElement('img');
                        img1111111111111111111.src = 'Modelos/R/FRONTAL.png';
                        img1111111111111111111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img1111111111111111111);

                        const img2222222222222222222 = document.createElement('img');
                        img2222222222222222222.src = 'Modelos/R/TRASERA.png';
                        img2222222222222222222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img2222222222222222222);

                        const img3333333333333333333 = document.createElement('img');
                        img3333333333333333333.src = 'Modelos/R/LATERAL1.png';
                        img3333333333333333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img3333333333333333333);

                        const img4444444444444444444 = document.createElement('img');
                        img4444444444444444444.src = 'Modelos/R/LATERAL2.png';
                        img4444444444444444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img4444444444444444444);
                        break;
                    case 'S':
                        videoSource.src = 'Modelos/S/S.mp4';

                        const img11111111111111111111 = document.createElement('img');
                        img11111111111111111111.src = 'Modelos/S/FRONTAL.png';
                        img11111111111111111111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img111111111111111111111);

                        const img222222222222222222222 = document.createElement('img');
                        img222222222222222222222.src = 'Modelos/S/TRASERA.png';
                        img222222222222222222222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img22222222222222222222);

                        const img33333333333333333333 = document.createElement('img');
                        img33333333333333333333.src = 'Modelos/S/LATERAL1.png';
                        img33333333333333333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img33333333333333333333);

                        const img44444444444444444444 = document.createElement('img');
                        img44444444444444444444.src = 'Modelos/S/LATERAL2.png';
                        img44444444444444444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img44444444444444444444);
                        break;
                    case 'T':
                        videoSource.src = 'Modelos/T/T.mp4';

                        const img1111111111111111111111 = document.createElement('img');
                        img1111111111111111111111.src = 'Modelos/T/FRONTAL.png';
                        img1111111111111111111111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img1111111111111111111111);

                        const img2222222222222222222222 = document.createElement('img');
                        img2222222222222222222222.src = 'Modelos/T/TRASERA.png';
                        img2222222222222222222222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img2222222222222222222222);

                        const img3333333333333333333333 = document.createElement('img');
                        img3333333333333333333333.src = 'Modelos/T/LATERAL1.png';
                        img3333333333333333333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img3333333333333333333333);

                        const img4444444444444444444444 = document.createElement('img');
                        img4444444444444444444444.src = 'Modelos/T/LATERAL2.png';
                        img4444444444444444444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img4444444444444444444444);
                        break;
                    case 'U':
                        videoSource.src = 'Modelos/U/U.mp4';

                        const img11111111111111111111111 = document.createElement('img');
                        img11111111111111111111111.src = 'Modelos/U/FRONTAL.png';
                        img11111111111111111111111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img11111111111111111111111);

                        const img22222222222222222222222 = document.createElement('img');
                        img22222222222222222222222.src = 'Modelos/U/TRASERA.png';
                        img22222222222222222222222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img22222222222222222222222);

                        const img33333333333333333333333 = document.createElement('img');
                        img33333333333333333333333.src = 'Modelos/U/LATERAL1.png';
                        img33333333333333333333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img33333333333333333333333);

                        const img444444444444444444444444 = document.createElement('img');
                        img444444444444444444444444.src = 'Modelos/U/LATERAL2.png';
                        img444444444444444444444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img444444444444444444444444);
                        break;
                    case 'V':
                        videoSource.src = 'Modelos/V/V.mp4';
                        const img111111111111111111111111 = document.createElement('img');
                        img111111111111111111111111.src = 'Modelos/V/FRONTAL.png';
                        img111111111111111111111111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img111111111111111111111111);

                        const img222222222222222222222222 = document.createElement('img');
                        img222222222222222222222222.src = 'Modelos/V/TRASERA.png';
                        img222222222222222222222222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img222222222222222222222222);

                        const img333333333333333333333333 = document.createElement('img');
                        img333333333333333333333333.src = 'Modelos/V/LATERAL2.png';
                        img333333333333333333333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img333333333333333333333333);

                        const img4444444444444444444444444 = document.createElement('img');
                        img4444444444444444444444444.src = 'Modelos/V/LATERAL1.png';
                        img4444444444444444444444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img4444444444444444444444444);
                        break;
                    case 'W':
                        videoSource.src = 'Modelos/W/W.mp4';

                        const img1111111111111111111111111 = document.createElement('img');
                        img1111111111111111111111111.src = 'Modelos/W/FRONTAL.png';
                        img1111111111111111111111111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img1111111111111111111111111);

                        const img2222222222222222222222222 = document.createElement('img');
                        img2222222222222222222222222.src = 'Modelos/W/TRASERA.png';
                        img2222222222222222222222222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img2222222222222222222222222);

                        const img3333333333333333333333333 = document.createElement('img');
                        img3333333333333333333333333.src = 'Modelos/W/LATERAL1.png';
                        img3333333333333333333333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img3333333333333333333333333);

                        const img44444444444444444444444444 = document.createElement('img');
                        img44444444444444444444444444.src = 'Modelos/W/LATERAL2.png';
                        img44444444444444444444444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img44444444444444444444444444);
                        break;
                    case 'X':
                        videoSource.src = 'Modelos/X/X.mp4';

                        const img11111111111111111111111111 = document.createElement('img');
                        img11111111111111111111111111.src = 'Modelos/X/FRONTAL.png';
                        img11111111111111111111111111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img11111111111111111111111111);

                        const img22222222222222222222222222 = document.createElement('img');
                        img22222222222222222222222222.src = 'Modelos/X/TRASERA.png';
                        img22222222222222222222222222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img22222222222222222222222222);

                        const img33333333333333333333333333 = document.createElement('img');
                        img33333333333333333333333333.src = 'Modelos/X/LATERAL1.png';
                        img33333333333333333333333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img33333333333333333333333333);

                        const img444444444444444444444444444 = document.createElement('img');
                        img444444444444444444444444444.src = 'Modelos/X/LATERAL2.png';
                        img444444444444444444444444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img444444444444444444444444444);
                        break;
                    case 'Y':
                        videoSource.src = 'Modelos/Y/Y.mp4';

                        const img111111111111111111111111111 = document.createElement('img');
                        img111111111111111111111111111.src = 'Modelos/Y/FRONTAL.png';
                        img111111111111111111111111111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img111111111111111111111111111);

                        const img222222222222222222222222222 = document.createElement('img');
                        img222222222222222222222222222.src = 'Modelos/Y/TRASERA.png';
                        img222222222222222222222222222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img222222222222222222222222222);

                        const img333333333333333333333333333 = document.createElement('img');
                        img333333333333333333333333333.src = 'Modelos/Y/LATERAL1.png';
                        img333333333333333333333333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img333333333333333333333333333);

                        const img4444444444444444444444444444 = document.createElement('img');
                        img4444444444444444444444444444.src = 'Modelos/Y/LATERAL2.png';
                        img4444444444444444444444444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img4444444444444444444444444444);
                        break;
                    case 'Z':
                        videoSource.src = 'Modelos/Z/Z.mp4';

                        const img1111111111111111111111111111 = document.createElement('img');
                        img1111111111111111111111111111.src = 'Modelos/Z/FRONTAL.png';
                        img1111111111111111111111111111.classList.add('Letra_Frontal'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img1111111111111111111111111111);

                        const img2222222222222222222222222222 = document.createElement('img');
                        img2222222222222222222222222222.src = 'Modelos/Z/TRASERA.png';
                        img2222222222222222222222222222.classList.add('Letra_Trasera'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img2222222222222222222222222222);

                        const img3333333333333333333333333333 = document.createElement('img');
                        img3333333333333333333333333333.src = 'Modelos/Z/LATERAL1.png';
                        img3333333333333333333333333333.classList.add('Letra_Derecha'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img3333333333333333333333333333);

                        const img44444444444444444444444444444 = document.createElement('img');
                        img44444444444444444444444444444.src = 'Modelos/Z/LATERAL2.png';
                        img44444444444444444444444444444.classList.add('Letra_Izquierda'); // Reemplaza 'mi-clase' con el nombre de la clase que desees asignar
                        document.body.appendChild(img44444444444444444444444444444);
                        break;
                    default:
                        console.error('Letra no reconocida');
                        break;
                }

                videoPlayer.load();
            } else {
                console.error('Elementos de video no encontrados');
            }

            // Mostrar el texto dinámico debajo del cuadro de video
            const videoText = document.createElement('p');
            videoText.textContent = `Video de la letra ${videoLetter} en lenguaje de señas`;
            videoText.classList.add('video-text');
            videoContainer.appendChild(videoText);

            const vistas = document.createElement('p');
            vistas.textContent = `Vistas de la letra ${videoLetter} en lenguaje de señas`;
            vistas.classList.add('vistas');
            videoContainer.appendChild(vistas);
        }
    }

    // Agregar event listener al botón de inicio
    const inicioButton = document.querySelector(".start-button");
    inicioButton.addEventListener("click", redirectToHomePage);

    // Agregar event listener al botón de volver
    const volverButton = document.querySelector(".volver-button");
    volverButton.addEventListener("click", goToPaginaDos);

    // Llama a las funciones para actualizar el título, cargar el video y mostrar el texto al cargar la página
    updateTitle();
    loadVideoAndText();

});