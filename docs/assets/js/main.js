'use strict';

const scrollbar = window.Scrollbar.init(document.querySelector('.main-scrollbar'));
const btnTop = document.querySelector('.top'),
    footerLink = document.querySelectorAll('.toggle'),
    burger = document.querySelector('.menu__hamburger'),
    burgerBtnClose = document.querySelector('.aside__close');
let requestId;
const swiper2 = new Swiper('.swiper-2', {
    slidesPerView: 'auto',
    breakpoints: {
        375: {
            spaceBetween: 25
        },
        768: {
            spaceBetween: 20
        },
        1024: {
            spaceBetween: 30
        },
        1400: {
            spaceBetween: 47
        }
    }
});
const swiper3 = new Swiper('.swiper-3', {
    slidesPerView: 'auto'
});
const swiper = new Swiper('.swiper-1', {
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    setWrapperSize: true,
    autoHeight: true,
    freeMode: true,
    mousewheel: true,
    breakpoints: {
        375: {
            slidesPerView: 1.70,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2.15,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 1.85,
            spaceBetween: 60
        },
        1300: {
            slidesPerView: 2.85,
            spaceBetween: 60
        },
        1920: {
            slidesPerView: 2.5,
            spaceBetween: 80
        },
        2560: {
            slidesPerView: 3.25,
            spaceBetween: 80
        }
    }
});

const up = () => {
    scrollbar.scrollTo(0, 0, 1600);
}

const burgerShow = () => {
    let burgerAside = document.querySelector('.menu__hamburger-aside');

    burgerAside.classList.add('active');
}

const burgerClose = () => {
    let burgerAside = document.querySelector('.menu__hamburger-aside');

    burgerAside.classList.remove('active');
}

btnTop.addEventListener('click', up);
burger.addEventListener('click', burgerShow);
burgerBtnClose.addEventListener('click', burgerClose);

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

