// 'use strict';

/* Сделайте модальное (появляющееся и исчезающее) окно */

const modal = document.querySelector('.wrap');
const closeBtn = document.querySelector('span');
const showBtn = document.querySelector('button');

closeBtn.addEventListener('click', function () {
    modal.classList.remove('bounceInDown');
    modal.classList.add('bounceOutUp');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 1000);

});

showBtn.addEventListener('click', function () {
    modal.classList.remove('bounceOutUp', 'hidden');
    modal.classList.add('animated', 'bounceInDown');
});


