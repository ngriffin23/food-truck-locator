console.log("hallo.");

/* ** DOCUMENT ELEMENTS ** */
const menuOpen = document.querySelector('.dash-menu-open');
const menuClose = document.querySelector('.dash-menu-close');
const dashMenu = document.querySelector('.dash-menu');

menuOpen.addEventListener('click', function(e) {
    e.preventDefault();
    dashMenu.classList.remove('animated', 'slideOutLeft');
    dashMenu.classList.add('animated', 'slideInLeft');
    dashMenu.style.display = 'flex';
});

menuClose.addEventListener('click' , function(e){
    e.preventDefault();
    dashMenu.classList.add('slideOutLeft');
});