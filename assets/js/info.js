'use strict'

const changeImage = () => {
    let rightImage = document.querySelector('.right-image');
    let leftImage = document.querySelector('.left-image');
    
    if (window.innerWidth < 648) {
        const rightSrc = rightImage.src;
        const leftSrc = leftImage.src;

        rightImage.src = leftSrc;
        leftImage.src = rightSrc;
    }
}

changeImage();