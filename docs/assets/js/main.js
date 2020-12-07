'use strict';

const width = document.documentElement.clientWidth;
const swiper2 = new Swiper('.swiper-2', {
    slidesPerView: 'auto',
    spaceBetween: 25,
    mousewheel: true
});

if (+width >= 992) {
    const swiper = new Swiper('.swiper-1', {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        slidesPerView: 2.5,
        spaceBetween: 20,
        mousewheel: true
    });
    // const swiper2 = new Swiper('.swiper-2', {
    //     slidesPerView: 4,
    //     spaceBetween: 25,
    //     mousewheel: true
    // });
} else {
    const swiper = new Swiper('.swiper-1', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        mousewheel: true
    });
}

