$(window).ready(function() {

    setTimeout(function() {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    /* header menu */

    $('.header-submenu').hover(function() {
        if($(window).width() > 1199) {
            $(this).toggleClass('active');
        }

    });

    /* end of header menu */

});