var menu = document.getElementById('menu');
var menu2 = document.getElementById('menu2');
var menuList = document.getElementById('menu_list');
var header = document.getElementById('header');
menu.addEventListener('click', function(){
    menuList.style.opacity = '1';
    menuList.style.right = '26px';
    menuList.style.transition = '.6s';
    menu.style.visibility = 'hidden';
    menu.style.opacity = '0';
    menu2.style.visibility = 'visible';
    menu.style.transition = '.3s';
    document.style.backgroundColor = 'red';
})

menu2.addEventListener('click', function() {
    menuList.style.opacity = '0';
    menuList.style.right = '-50px';
    menuList.style.transition = '0.3s';
    menu.style.visibility = 'visible';
    menu.style.opacity = '1';
    menu2.style.visibility = 'hidden';
    menu2.style.transition = '.2s';
})

document.addEventListener('scroll', function() {
    var scrollValue = scrollY;
    if(scrollValue > 80 && scrollValue < 3000) {
        header.style.opacity = '0';
        header.style.transition = '.6s';
        header.style.visibility = 'hidden';
    }else {
        header.style.opacity = '1';
        header.style.visibility = 'visible';
    }
})