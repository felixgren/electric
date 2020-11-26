'use strict'

const miniNewsletterButton = document.querySelector('.mini-subscribe-btn');
const miniNewsletterInput = document.querySelector('.mini-email-input');
const inputValue = miniNewsletterInput.value;

// console.log(miniNewsletterInput)
console.log(inputValue);

miniNewsletterButton.addEventListener('click', () => {
    // miniNewsletterInput.classList.add('mini-newsletter-visible');
    miniNewsletterInput.classList.toggle('input-visible');


})

function controlInput() {
    console.log('hej');
    console.log(inputValue)
}