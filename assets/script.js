const menuToggle = document.getElementById('menu-toggle');

menuToggle.addEventListener('click', function(event) {
    event.preventDefault();
    const navMenu = document.getElementById('nav-menu');

    if(navMenu.classList.contains('hidden')) {
        navMenu.classList.remove('hidden');
        navMenu.classList.add('visible');
    } else {
        navMenu.classList.remove('visible');
        navMenu.classList.add('hidden');
    }
});