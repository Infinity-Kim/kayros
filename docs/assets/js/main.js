'use strict';

const Scrollbar = window.Scrollbar;

Scrollbar.init(document.querySelector('.main-scrollbar'));

const width = document.documentElement.clientWidth;
const btnTop = document.querySelector('.top'),
    footerLink = document.querySelectorAll('.toggle'),
    burger = document.querySelector('.menu__hamburger'),
    burgerBtnClose = document.querySelector('.aside__close');
    // catalogNav = document.querySelector('.nav__link.catalog');
let requestId;
const swiper2 = new Swiper('.swiper-2', {
    slidesPerView: 'auto',
    spaceBetween: 25,
});
const swiper3 = new Swiper('.swiper-3', {
    slidesPerView: 'auto'
});
if (+width >= 1920) {
    const swiper = new Swiper('.swiper-1', {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        slidesPerView: 2.5,
        spaceBetween: 80,
        mousewheel: true,
    });
}else if (+width >= 1200 && +width < 1920) {
    const swiper = new Swiper('.swiper-1', {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        slidesPerView: 2.5,
        spaceBetween: 60,
        mousewheel: true
    });
} else if (+width >= 992 && +width < 1200) {
    const swiper = new Swiper('.swiper-1', {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        slidesPerView: 1.75,
        spaceBetween: 60,
        mousewheel: true
    });
} else if (+width >= 768 && +width < 992) {
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

const burgerShow = () => {
    let burgerAside = document.querySelector('.menu__hamburger-aside');

    burgerAside.classList.add('active');
}

const burgerClose = () => {
    let burgerAside = document.querySelector('.menu__hamburger-aside');

    burgerAside.classList.remove('active');
}

// const showCatalog = (e) => {
//     let menuHover = document.querySelector('.menu__hover');
//
//     menuHover.classList.toggle('active');
//
//     console.log(e.relatedTarget);
// }

btnTop.addEventListener('click', up);
burger.addEventListener('click', burgerShow);
burgerBtnClose.addEventListener('click', burgerClose);
// catalogNav.addEventListener('mouseover', showCatalog)
// catalogNav.addEventListener('mouseout', showCatalog)

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

