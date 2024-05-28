document.addEventListener("DOMContentLoaded", function() {
    // Función para redirigir a la página de inicio (index.html)
    function redirectToHomePage() {
        window.location.href = 'index.html';
    }

    // Función para redirigir a la página cuatro y pasar la letra como parámetro
    function goToPaginaCuatro(letter) {
        window.location.href = `paginaCuatro.html?letra=${letter}`;
    }

    // Agregar event listener al botón de inicio
    const inicioButton = document.querySelector(".start-button");
    inicioButton.addEventListener("click", redirectToHomePage);

    // Genera 27 cuadrados y los agrega al contenedor
    const container = document.getElementById("cuadradosContainer");
    const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"; // Define el abecedario

    // Arreglo de rutas de imágenes
    const images = [
        "Modelos/A/FRONTAL.png",
        "Modelos/B/FRONTAL.png",
        "Modelos/C/FRONTAL.png",
        "Modelos/D/FRONTAL.png",
        "Modelos/E/FRONTAL.png",
        "Modelos/F/FRONTAL.png",
        "Modelos/G/FRONTAL.png",
        "Modelos/H/FRONTAL.png",
        "Modelos/I/FRONTAL.png",
        "Modelos/J/FRONTAL.png",
        "Modelos/K/FRONTAL.png",
        "Modelos/L/FRONTAL.png",
        "Modelos/M/FRONTAL.png",
        "Modelos/N/FRONTAL.png",
        "Modelos/Ñ/FRONTAL.png",
        "Modelos/O/FRONTAL.png",
        "Modelos/P/FRONTAL.png",
        "Modelos/Q/FRONTAL.png",
        "Modelos/R/FRONTAL.png",
        "Modelos/S/FRONTAL.png",
        "Modelos/T/FRONTAL.png",
        "Modelos/U/FRONTAL.png",
        "Modelos/V/FRONTAL.png",
        "Modelos/W/FRONTAL.png",
        "Modelos/X/FRONTAL.png",
        "Modelos/Y/FRONTAL.png",
        "Modelos/Z/FRONTAL.png"
    ];

    for (let i = 0; i < alphabet.length; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Agrega la línea horizontal dentro del cuadrado
        const line = document.createElement("div");
        line.classList.add("square-line");
        square.appendChild(line);

        // Agrega la letra del abecedario dentro del cuadrado
        const letter = document.createElement("div");
        letter.classList.add("square-letter");
        letter.textContent = alphabet[i]; // Asigna la letra correspondiente
        square.appendChild(letter);

        // Agrega la imagen correspondiente a cada letra
        const img = document.createElement("img");
        img.src = images[i]; // Asigna la ruta de la imagen correspondiente
        img.classList.add(`square-image-${alphabet[i]}`); // Clase única para cada imagen
        square.appendChild(img);

        // Agrega el event listener para redirigir a la página cuatro con la letra correspondiente
        square.addEventListener("click", function() {
            // Obtén la letra seleccionada
            const letter = this.querySelector(".square-letter").textContent;
            // Redirige a la página cuatro y pasa la letra como parámetro
            goToPaginaCuatro(letter);
        });

        // Agrega el cuadrado al contenedor
        container.appendChild(square);
    }
});
