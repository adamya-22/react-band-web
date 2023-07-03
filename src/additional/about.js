var swiper = new Swiper(".milestone-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 1800,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});