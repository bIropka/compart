$(window).ready(function() {

    setTimeout(function() {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    function makeHeaderShort() {
        $('.header-top').addClass('shortest');
        $('.header-local').prependTo('.mobile-nav');
        $('.header-menu').appendTo('.mobile-nav');
        $('.form-search').insertAfter('.header-sign');
        $('.header-cart').insertBefore('.header-catalog');
    }

    function makeHeaderFull() {
        $('.header-top').removeClass('shortest');
        $('.header-local').insertBefore('.header-logo');
        $('.header-menu').insertAfter('.header-logo');
        $('.form-search').prependTo('.form-search-wrapper');
        $('.header-cart').prependTo('.header-cart-wrapper');
    }

    if($(window).scrollTop() > 270) {
        makeHeaderShort();
    } else {
        if($(window).width() > 1199) {
            makeHeaderFull();
        }

    }

    if($(window).scrollTop() > 570) {
        $('.header-top').addClass('fixed');
    } else {
        if($(window).width() > 1199) {
            $('.header-top').removeClass('fixed');
        }
    }

    $(window).scroll(function() {

        if($(window).scrollTop() > 270) {
            makeHeaderShort();
        } else {
            if($(window).width() > 1199) {
                makeHeaderFull();
            }

        }

        if($(window).scrollTop() > 570) {
            $('.header-top').addClass('fixed');
        } else {
            if($(window).width() > 1199) {
                $('.header-top').removeClass('fixed');

                $('.burger').removeClass('active');
                $('.mobile-nav').removeClass('active');
            }
        }

    });

    if($(window).width() < 1200) {
        makeHeaderShort();
        $('.header-top').addClass('fixed');
    } else {

        if($(window).scrollTop() < 271) {
            makeHeaderFull();
        }

        if($(window).scrollTop() < 571) {
            $('.header-top').removeClass('fixed');
            $('.burger').removeClass('active');
            $('.mobile-nav').removeClass('active');
        }

    }

    $(window).resize(function() {

        if($(window).width() < 1200) {
            makeHeaderShort();
            $('.header-top').addClass('fixed');
        } else {

            if($(window).scrollTop() < 271) {
                makeHeaderFull();
            }

            if($(window).scrollTop() < 571) {
                $('.header-top').removeClass('fixed');
            }

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