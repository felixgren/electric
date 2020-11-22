'use strict'

let burger = document.querySelector('.burger');
let overlayMobile = document.querySelector('.overlay-mobile');
let lol = document.querySelector('.lol')

const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');

burger.addEventListener('click', () => {
    overlayMobile.classList.toggle('overlay-visible');
    lol.classList.toggle('lol-visible')
    burger.classList.toggle('animate-burger');
})
