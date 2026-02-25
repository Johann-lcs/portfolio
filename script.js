const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll('.skill-slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth + 40; // largeur + gap

nextBtn.addEventListener('click', () => {
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
});

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
