'use strict'

let burger = document.querySelector('.burger');
let overlayMobile = document.querySelector('.overlay-mobile');

burger.addEventListener('click', () => {
    burger.classList.toggle('animate-burger');
    overlayMobile.classList.toggle('overlay-visible');
})
