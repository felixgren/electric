'use strict'

const miniNewsletterButton = document.querySelector('.mini-subscribe-btn');
const miniNewsletterInput = document.querySelector('.mini-email-input');
const inputValue = miniNewsletterInput.value;
const miniNewsletterSection = document.querySelector('.mini-newsletter-wrapper');
console.log(inputValue);

miniNewsletterButton.addEventListener('click', () => {
    miniNewsletterInput.classList.add('input-visible');
    miniNewsletterSection.style.backgroundColor = 'rgba(0,0,0,0.5)';

})

function controlInput() {
    console.log('hej');
    console.log(inputValue)
}