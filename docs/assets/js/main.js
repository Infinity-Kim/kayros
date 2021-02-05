'use strict';
new WOW({}).init();
SmoothScroll({stepSize: 100})
const btnTop = document.querySelector('.top'),
    footerLink = document.querySelectorAll('.toggle'),
    burger = document.querySelector('.menu__hamburger'),
    burgerBtnClose = document.querySelector('.aside__close'),
    titles = document.querySelectorAll('.hover'),
    colors = document.querySelectorAll('.swiper-slide-colors li');
let requestId;
const swiper2 = new Swiper('.swiper-2', {
    slidesPerView: 'auto',
    breakpoints: {
        320: {
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
    breakpoints: {
        320: {
            slidesPerView: 1.70,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2.15,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 2.85,
            spaceBetween: 60,
            slidesOffsetBefore: 40
        },
        1300: {
            slidesPerView: 3.85,
            spaceBetween: 60,
            slidesOffsetBefore: 90
        },
        1920: {
            slidesPerView: 3.5,
            spaceBetween: 80,
            slidesOffsetBefore: (screen.width - 1600) / 2
        },
        2560: {
            slidesPerView: 5.25,
            spaceBetween: 80,
            slidesOffsetBefore: (screen.width - 1600) / 2
        }
    }
});

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

btnTop.addEventListener('click', up);
burger.addEventListener('click', burgerShow);
burgerBtnClose.addEventListener('click', burgerClose);

footerLink.forEach((e) => {
    e.addEventListener('click', (e) => {
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

colors.forEach(e => {
    e.addEventListener('click', (e) => {
        e.preventDefault();
        let _this = e.currentTarget;
        for (let node of _this.parentNode.children) {
            if (node.firstElementChild.classList.contains('active')) {
                node.firstElementChild.classList.remove('active');
            }
        }
        _this.firstChild.classList.add('active');
        let src = _this.querySelector('a').getAttribute('data-img');
        let img = _this.parentNode.previousElementSibling;

        img.querySelector('img').src = src;

        console.log(img);
    });
});
