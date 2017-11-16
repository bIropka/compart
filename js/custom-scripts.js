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

    if($(window).scrollTop() > 250) {
        makeHeaderShort();
    } else {
        if($(window).width() > 1199) {
            makeHeaderFull();
        }

    }

    if($(window).scrollTop() > 270) {
        $('.header-top').addClass('fixed');
    } else {
        if($(window).width() > 1199) {
            $('.header-top').removeClass('fixed');
        }
    }

    if($(window).scrollTop() > 400) {
        $('.to-top').addClass('active');
    } else {
        $('.to-top').removeClass('active');
    }

    $(window).scroll(function() {

        if($(window).scrollTop() > 250) {
            makeHeaderShort();
        } else {
            if($(window).width() > 1199) {
                makeHeaderFull();
            }

        }

        if($(window).scrollTop() > 270) {
            $('.header-top').addClass('fixed');
        } else {
            if($(window).width() > 1199) {
                $('.header-top').removeClass('fixed');

                $('.burger').removeClass('active');
                $('.mobile-nav').removeClass('active');
            }
        }

        if($(window).scrollTop() > 400) {
            $('.to-top').addClass('active');
        } else {
            $('.to-top').removeClass('active');
        }

    });

    if($(window).width() < 1200) {
        makeHeaderShort();
        $('.header-top').addClass('fixed');
    } else {

        if($(window).scrollTop() < 251) {
            makeHeaderFull();
        }

        if($(window).scrollTop() < 271) {
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

            if($(window).scrollTop() < 251) {
                makeHeaderFull();
            }

            if($(window).scrollTop() < 271) {
                $('.header-top').removeClass('fixed');
            }

        }

    });

    $('.burger').click(function() {

        $(this).toggleClass('active');
        $('.mobile-nav').toggleClass('active');

    });

    $('.to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 600);
    });

    $('.products-show-amount-current').click(function() {
        $(this).parent().toggleClass('active');
    });

    $('.products-show-amount ul li').click(function() {
        $(this).parents('.products-show-amount').find('.products-show-amount-current').text($(this).text());
        $(this).parents('.products-show-amount').find('input').attr('value', $(this).text());
        $(this).parents('.products-show-amount').removeClass('active');
    });

    $('.view-order-control').click(function() {
        $(this).toggleClass('active');
    });

    $('.item-tab-control').click(function() {
        var current = $(this).index();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.item-tab').eq(current).siblings().slideUp(400);
        setTimeout(function() {
            $('.item-tab').eq(current).slideDown();
        }, 400);
    });

    /* products amount */

    $('.product-amount-minus').click(function() {
        var value = parseInt($(this).siblings('.product-amount-value').text());
        if(value > 1) {
            --value;
            $(this).siblings('.product-amount-value').text(value)
            $(this).siblings('input').attr('val', value)
        }
    });

    $('.product-amount-plus').click(function() {
        var value = parseInt($(this).siblings('.product-amount-value').text());
        ++value;
        $(this).siblings('.product-amount-value').text(value)
        $(this).siblings('input').attr('val', value)
    });

    /* end of products amount */

    /* countdown */
    var date = new Date(), dateForCounter;

    dateForCounter = date.getMonth() + 1 + '/' + (date.getDate() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    console.log(dateForCounter);
    $('.cart-contact-timer').downCount({
        date: dateForCounter,
        offset: +2
    });

    /* end of countdown */

    /* modal */

    $('.header-sign-in').click(function() {
        $('.window-sign-in').fadeIn().css('display', 'flex');
        return false;
    });

    $('.header-sign-up').click(function() {
        $('.window-sign-up').fadeIn().css('display', 'flex');
        return false;
    });

    $('.window').click(function (event) {

        var target = $(event.target);

        if (!target.closest($('.window-inner')).length) {
            $('.window').fadeOut();
        }

    });

    $('.close-window').click(function() {

        $('.window').fadeOut();

    });

    /* end of modal */

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