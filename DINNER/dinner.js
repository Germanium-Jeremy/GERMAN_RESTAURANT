let swiperHome = new Swiper('.swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerview: 'auto',
    centeredSlides: 'auto',

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})