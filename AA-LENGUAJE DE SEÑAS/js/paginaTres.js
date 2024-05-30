document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("cuadradosContainer");

    const palabras = ["Gracias", "Hola", "Agua", "Mamá", "Perdón", "Ayuda", "Papá", "Comida", "Amor"];

    for (let i = 0; i < palabras.length; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        const word = document.createElement("div");
        word.classList.add("square-word");
        word.textContent = palabras[i]; // Asigna la palabra correspondiente
        square.appendChild(word);

        square.setAttribute("data-palabra", palabras[i]);

        container.appendChild(square);
    }

    function redirectToHomePage() {
        window.location.href = 'index.html';
    }

    const startButton = document.querySelector(".start-button");
    startButton.addEventListener("click", redirectToHomePage);

    container.addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("square")) {
            const palabra = target.getAttribute("data-palabra");
            if (palabra) {
                window.location.href = `paginaCinco.html?letra=${palabra.charAt(0)}&palabra=${palabra}`;
            }
        }
    });
});
