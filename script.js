const track = document.querySelector(".carousel-track");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const images = document.querySelectorAll(".carousel-image");

let currentIndex = 0;

// Asegurarse de que el botón izquierdo esté visible
prevButton.style.display = "flex";
nextButton.style.display = "flex";

function updateCarousel() {
    // Mueve el track a la posición correcta
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Deshabilita o habilita los botones según la posición
    prevButton.disabled = currentIndex === 0; 
    nextButton.disabled = currentIndex === images.length - 1;
}

// Eventos de click
nextButton.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Asegurar que el carrusel inicia bien posicionado
updateCarousel();
