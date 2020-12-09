'use strict';

const width = document.documentElement.clientWidth;
const btnTop = document.querySelector('.top');
let requestId;
const swiper2 = new Swiper('.swiper-2', {
    slidesPerView: 'auto',
    spaceBetween: 25,
});
const swiper3 = new Swiper('.swiper-3', {
    slidesPerView: 'auto'
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
} else {
    const swiper = new Swiper('.swiper-1', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        mousewheel: true
    });
}

const up = () => {
    let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0,-100);
        requestId = requestAnimationFrame(up);
    } else {
        cancelAnimationFrame(requestId);
    }
}

btnTop.addEventListener('click', up);

