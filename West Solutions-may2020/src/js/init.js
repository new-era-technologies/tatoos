'use strict';

const rdLinks = document.getElementsByClassName('rd_more__link'),
    uplImgLinks = document.getElementsByClassName('form__uploads__label'),
    nav = document.querySelector('.nav__list'),
    burgers = document.querySelectorAll('.burger');



// hover rd_more links

hoverEl(rdLinks, '-16px');


//hover upload_image links

hoverEl(uplImgLinks, '-14px');


function hoverEl(links, size) {
    for (let j = 0; j < links.length; j++) {
        links[j].addEventListener('mouseenter', function () {
            this.children[0].style.objectPosition = '0 ' + size;
        });
        links[j].addEventListener('mouseleave', function () {
            this.children[0].style.objectPosition = '0 0';
        });
    };
}


// show menu on burger click

for (let b = 0; b < burgers.length; b++) {
    burgers[b].addEventListener('click', function () {
        this.style.display = 'none';
        this.previousElementSibling.style.display = 'flex';
    });
}
