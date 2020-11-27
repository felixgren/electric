'use strict'
let rightImage = document.querySelector('.right-image');
let leftImage = document.querySelector('.left-image');

const rightSrc = rightImage.src;
const leftSrc = leftImage.src;

if (window.innerWidth < 1350) {
    rightImage.src = leftSrc;
    leftImage.src = rightSrc;
}

const changeImage = () => {
    window.addEventListener('resize', () => {
        if (window.innerWidth < 1350) {
            rightImage.src = leftSrc;
            leftImage.src = rightSrc;
        } else {
            leftImage.src = leftSrc;
            rightImage.src = rightSrc;
        }
    })
}

changeImage();