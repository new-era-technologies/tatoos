'use strict';

const emailInp = document.getElementById('email'),
    selInp = document.getElementById('artist'),
    mesInp = document.getElementById('message'),
    sel = document.querySelector('.form__select'),
    selText = document.querySelector('.form__select__text'),
    selImg = document.querySelector('.form__select__arrow'),
    optBox = document.querySelector('.form__options_list'),
    options = document.getElementsByClassName('form__options_list__item'),
    submit = document.getElementById('submit');


// show select options

sel.addEventListener('click', function () {
    optBox.classList.toggle('open_opt_box');
    selImg.classList.toggle('img_rotate');
});


// choose option in select box

for (let o = 0; o < options.length; o++) {
    options[o].addEventListener('click', function () {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.selected').classList.remove('selected');
            this.classList.add('selected');
            selText.innerHTML = this.textContent;
        }
    })
}


// close options box if click outside

self.addEventListener('click', function (e) {
    if (!sel.contains(e.target)) {
        optBox.classList.remove('open_opt_box');
        selImg.classList.remove('img_rotate');
    }
});


//check form valid

function validateForm() {
    let valid = true;
    // check email
    !emailInp.value.match(emailInp.pattern) ? valid = false : 1;
    //check message
    valid = valid && mesInp.value.length;
    return valid;
}


// submit on click

submit.addEventListener('click', function (e) {
    if (validateForm()) {
        for (let l = 0; l < options.length; l++) {
            if (options[l].classList.contains('selected')) {
                selInp.value = options[l].dataset.value;
            }
        }
    } else {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        //just alert if incorrect form inputs 
        alert('Wrong or empty email/message');
    }
});
