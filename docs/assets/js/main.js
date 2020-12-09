'use strict';

const width = document.documentElement.clientWidth;
const btnTop = document.querySelector('.top'),
    footerLink = document.querySelectorAll('.toggle');
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

footerLink.forEach((e) => {
    e.addEventListener('click',(e) => {
        e.preventDefault();

        let path = e.target.querySelector('path');

        if (e.target.classList.contains('close')) {
            e.target.classList.remove('close');
            path.setAttribute('d', 'M1 7L7 1L13 7');
        } else {
            e.target.classList.add('close');
            path.setAttribute('d', 'M1 1L7 7L13 1');
        }

        let menu = e.target.parentElement.nextElementSibling;

        menu.classList.toggle('active');
    })
})

