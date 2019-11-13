//Basculer entre l'affichage et le masquage des liens du menu de navigation
// lorsque l'utilisateur clique sur l'icône de menu / barre hamburger
let menu = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
// https://developer.mozilla.org/fr/docs/Web/API/Element/classList
navBarToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
});