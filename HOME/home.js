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
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})


let swiperDinner = new Swiper('.dinnerSwiper', {
    loop: true,
    grabCursor: true,
    slidesPerview: 'auto',
    centeredSlides: 'auto',
})