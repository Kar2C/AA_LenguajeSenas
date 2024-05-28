document.addEventListener("DOMContentLoaded", function() {
    // Obtener los botones por sus clases y agregar event listeners
    const verLetrasButton = document.querySelector(".button-letras");
    verLetrasButton.addEventListener("click", function() {
        window.location.href = 'paginaDos.html';
    });

    const verPalabrasButton = document.querySelector(".button-palabras");
    verPalabrasButton.addEventListener("click", function() {
        window.location.href = 'paginaTres.html';
    });
});
