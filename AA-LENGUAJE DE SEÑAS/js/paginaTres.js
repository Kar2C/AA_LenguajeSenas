document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el contenedor de los cuadrados
    const container = document.getElementById("cuadradosContainer");

    // Define las palabras para los cuadrados
    const palabras = ["Gracias", "Mamá", "Papá"];

    // Genera 9 cuadrados con las palabras y los agrega al contenedor
    for (let i = 0; i < palabras.length; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Agrega la palabra dentro del cuadrado
        const word = document.createElement("div");
        word.classList.add("square-word");
        word.textContent = palabras[i]; // Asigna la palabra correspondiente
        square.appendChild(word);

        // Agrega el atributo data-palabra a cada cuadrado
        square.setAttribute("data-palabra", palabras[i]);

        container.appendChild(square);
    }

    // Función para redirigir a la página de inicio
    function redirectToHomePage() {
        window.location.href = 'index.html';
    }

    // Agrega funcionalidad al botón de inicio
    const startButton = document.querySelector(".start-button");
    startButton.addEventListener("click", redirectToHomePage);

    // Agrega event listener a cada cuadrado
    container.addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("square")) {
            const palabra = target.getAttribute("data-palabra");
            if (palabra) {
                // Redirige a la página cinco con la letra correspondiente
                window.location.href = `paginaCinco.html?letra=${palabra.charAt(0)}&palabra=${palabra}`;
            }
        }
    });
});
