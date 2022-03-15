const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.navbar-nav');
const menu_items = document.querySelectorAll('.nav-link');
for(var i = 0, len = menu_items.length; i < len; i++) {
    menu_items[i].onclick = function () {
        menu.classList.toggle('active');
        nav.classList.toggle('active');
    }
}
menu.onclick = function(){
    menu.classList.toggle('active');
    nav.classList.toggle('active');
};

