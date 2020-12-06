'use strict';

const width = document.documentElement.clientWidth;
if (+width >= 992) {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 2.5,
        spaceBetween: 20,
        mousewheel: true
    });
} else {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1.5,
        spaceBetween: 20,
        mousewheel: true
    });
}

