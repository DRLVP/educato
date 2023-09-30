// added swiper slides with swiper js

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // media queries width >= 600 
    breakpoints: {
        600: {
            slidesPerView: 2,
        }
    }
});