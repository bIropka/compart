$(window).ready(function() {

    setTimeout(function() {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    if($(window).scrollTop() > 0) {
        $('.header-top').addClass('shortest');
    } else {
        $('.header-top').removeClass('shortest');
    }

    $(window).scroll(function() {

        if($(window).scrollTop() > 0) {
            $('.header-top').addClass('shortest');
        } else {
            $('.header-top').removeClass('shortest');
        }

    });

    if($(window).width() < 1200) {
        $('.header-sign').prependTo('.mobile-nav');
        $('.header-local').prependTo('.mobile-nav');
    } else {
        $('.header-local').insertBefore('.header-logo');
        $('.header-sign').insertAfter('.burger');
    }

    if($(window).width() < 992) {
        $('.header-menu').appendTo('.mobile-nav');
    } else {
        $('.header-menu').insertBefore('.burger');
    }

    $(window).resize(function() {

        if($(window).width() < 1200) {
            $('.header-sign').prependTo('.mobile-nav');
            $('.header-local').prependTo('.mobile-nav');
        } else {
            $('.header-local').insertBefore('.header-logo');
            $('.header-sign').insertAfter('.burger');
        }

        if($(window).width() < 992) {
            $('.header-menu').appendTo('.mobile-nav');
        } else {
            $('.header-menu').insertBefore('.burger');
        }

    });

    $('.burger').click(function() {

        $(this).toggleClass('active');
        $('.mobile-nav').toggleClass('active');

    });

    /* header menu */

    $('.header-submenu').hover(function() {
        if($(window).width() > 1199) {
            $(this).toggleClass('active');
        }

    });

    $('.header-submenu-label').click(function() {
        if ($(window).width() > 991 && $(window).width() < 1200) {
            $(this).parent().toggleClass('active');
        }

    });

    $(document).click(function(event) {

        if (!$(event.target).closest(".header-submenu").length) {
            $('.header-submenu').removeClass('active');
        }

    });


        /* end of header menu */

    /* slider banner */

    $('.banner-main').slick({
        arrows: false,
        dots: true
    });

    /* end of slider banner */

    /* slider products */

    $('.products-slider').slick({
        slidesToShow: 4,
        appendArrows: '.products-control',
        prevArrow: '.products-control-prev',
        nextArrow: '.products-control-next',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /* end of slider products */

});