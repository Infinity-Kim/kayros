'use strict';

const width = document.documentElement.clientWidth;
//
// if (+width >= 1216) {
//     const swiper2 = new Swiper('.swiper-2', {
//         slidesPerView: 4,
//         spaceBetween: 25,
//         mousewheel: true
//     });
// }

if (+width >= 992) {
    const swiper = new Swiper('.swiper-1', {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        loop: true,
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
        loop: true,
        slidesPerView: 1.5,
        spaceBetween: 20,
        mousewheel: true
    });
    const swiper2 = new Swiper('.swiper-2', {
        slidesPerView: 1.5,
        spaceBetween: 25,
        mousewheel: true
    });
}

