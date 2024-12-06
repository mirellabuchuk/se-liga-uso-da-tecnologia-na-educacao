// Configuração do Swiper
const swiper = new Swiper(".swiper", {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

// Botão de voltar ao topo
const backToTop = document.getElementById("back-to-top");
window.onscroll = () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
};
backToTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Flashcards
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
});
