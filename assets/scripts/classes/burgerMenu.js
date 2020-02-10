function burgerMenu(selector){
    let menu =  $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overly = menu.find('burger-menu__overlay');

    button.on('click', (e) => {
        e.preventDefault();
        togglemenu ();
    });

    links.on('click',() => burgerMenu());
    overly.on('click',() => togglemenu());

    function togglemenu () {
        menu.toggleClass('burger-menu__active');

        if (menu.hasClass ('burger-menu__active')) {
            $(body).css('overflow', 'hidden');
        } else {
            $(body).css('overflow', 'visible');
        }
    }
}
burgerMenu('burger-menu');