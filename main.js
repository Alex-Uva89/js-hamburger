let burgerMenu = document.querySelector('.hamburger-menu');
let openMenu = document.querySelector('.fa-bars');
let closeMenu = document.querySelector('.close');



openMenu.addEventListener('click', function() {
    burgerMenu.style.display='block';
});

closeMenu.addEventListener('click', function() {
    burgerMenu.style.display='none';
});