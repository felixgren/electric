'use strict'

const miniNewsletterButton = document.querySelector('.mini-subscribe-btn');
const miniNewsletterInput = document.querySelector('.mini-email-input');
const miniNewsletterSection = document.querySelector('.mini-newsletter-wrapper');
const readMoreBtn = document.querySelector('.read-more-btn')
const hiddenText = document.querySelector('.mini-newsletter-info')

hiddenText.style = "-webkit-line-clamp: 2;";

const animateReadMore = () => {
    hiddenText.style = "-webkit-line-clamp: unset;";
    readMoreBtn.innerHTML = "Read less";

    if(hiddenText.classList.value != 'mini-newsletter-info p-visible') {
        readMoreBtn.innerHTML = "Read more";

        setTimeout(() => {
            hiddenText.style = "-webkit-line-clamp: 2;";
        }, 400);
    }
}

readMoreBtn.addEventListener('click', () => {
    miniNewsletterInput.classList.toggle('input-visible');
    miniNewsletterSection.classList.toggle('dark-overlay');
    hiddenText.classList.toggle('p-visible');
    animateReadMore();
})

miniNewsletterButton.addEventListener('click', () => {
    miniNewsletterInput.classList.add('input-visible');
    miniNewsletterSection.classList.add('dark-overlay');
    hiddenText.classList.add('p-visible');
    animateReadMore();
})