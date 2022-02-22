let burgerMenu = document.getElementsByClassName('hamburger-menu');
let openMenu = document.getElementsByClassName('fa-bars');
let closeMenu = document.getElementsByClassName('close');

openMenu.addEventListener('click', function() {
    burgerMenu.style.display='block';
})

closeMenu.addEventListener('click', function() {
    burgerMenu.style.display='none';
})