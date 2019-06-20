function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  let i, x = document.querySelectorAll(".step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}


// Open and Close Mobile Nav Bar

const bar = document.querySelector('.nav__mobile-bar');
const menu = document.querySelector('.nav__menu');
const close = document.querySelector('.nav__mobile-close');

function openNav () {
    bar.addEventListener('click', function () {
        menu.classList.add('active-menu');
    });
}

function closeNav () {
    close.addEventListener('click', function () {
        menu.classList.remove('active-menu');
    });
}

