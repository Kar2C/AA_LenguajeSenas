document.addEventListener("DOMContentLoaded", function() {
    function redirectToHomePage() {
        window.location.href = 'index.html';
    }

    function goToPaginaCuatro(letter) {
        window.location.href = `paginaCuatro.html?letra=${letter}`;
    }

    const inicioButton = document.querySelector(".start-button");
    inicioButton.addEventListener("click", redirectToHomePage);

    const container = document.getElementById("cuadradosContainer");
    const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

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

        const line = document.createElement("div");
        line.classList.add("square-line");
        square.appendChild(line);

        const letter = document.createElement("div");
        letter.classList.add("square-letter");
        letter.textContent = alphabet[i];
        square.appendChild(letter);

        const img = document.createElement("img");
        img.src = images[i]; // Asigna la ruta de la imagen correspondiente
        img.classList.add(`square-image-${alphabet[i]}`); 
        img.alt = `Letra ${alphabet[i]} en lenguaje de señas `; // Agrega el atributo alt con una descripción
        square.appendChild(img);

        square.addEventListener("click", function() {
            const letter = this.querySelector(".square-letter").textContent;
            goToPaginaCuatro(letter);
        });

        container.appendChild(square);
    }
});
