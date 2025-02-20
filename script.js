
const track = document.querySelector(".carousel-track");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const images = document.querySelectorAll(".carousel-image");


let currentIndex = 0;


function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === images.length - 1;
}


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


updateCarousel();

