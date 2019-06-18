// Open Mobile Nav Bar

const bar = document.querySelector('.nav__mobile-bar');
const menu = document.querySelector('.nav__menu');
const close = document.querySelector('.nav__mobile-close');

function openNav () {
    bar.addEventListener('click', function () {
        menu.classList.add('active-menu');
    });
}

