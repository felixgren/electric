'use strict'

const burger = document.querySelector('.burger');
const overlayMobile = document.querySelector('.overlay-mobile');
const menuBar = document.querySelector('.menu-bar') 
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');

burger.addEventListener('click', () => {
    overlayMobile.classList.toggle('overlay-visible');
    menuBar.classList.toggle('menu-bar-visible')

    if(burger.classList.value != 'burger animate-burger') {
        line2.style.opacity = '0';
        line1.style.transform = 'translateY(-3px)';
        line3.style.transform = 'translateY(3px)';
        burger.style.pointerEvents = 'none';

        setTimeout(() => {
            burger.classList.toggle('animate-burger');
            line1.style.transform = 'rotate(14deg)';
            line3.style.transform = 'rotate(-14deg)';
            burger.style.pointerEvents = 'initial';
        }, 900);

    } else {
        line2.style.opacity = '0';
        line1.style.transform = 'translateY(-3px)';
        line3.style.transform = 'translateY(3px)';
        burger.classList.toggle('animate-burger');
        burger.style.pointerEvents = 'none';

        setTimeout(() => {
            line2.style.opacity = '1';
            line1.style.transform = 'translateY(0)';
            line3.style.transform = 'translateY(0)';

            line1.style.transform = null;
            line3.style.transform = null;
            burger.style.pointerEvents = 'initial';
        }, 500);
    }
})