jQuery(document).ready(function ($) {
    $('.left-menu__mobile').click(function () {

        $('.main__slide').click(function () {
            $('.menu-slide').detach();
            menu.clone().appendTo('.sidebar');
            $('.main__slide, .menu-slide, .left-menu__mobile, .main__wrap').removeClass('active');
        });

        var menu = $('.left-menu');
        var heightHeader = $('.header').height();

        if ($(this).hasClass('active')) {
            $('.menu-slide').detach();
            menu.clone().appendTo('.sidebar');
            $('.main__slide, .menu-slide, .left-menu__mobile, .main__wrap').removeClass('active');

        } else {
            $('.header').after('<div class="menu-slide"></div>');

            menu.clone().prependTo('.menu-slide');

            $('.menu-slide').css('top', heightHeader);

            $('.sidebar .left-menu').detach();

            $('.main__slide, .menu-slide, .left-menu__mobile, .main__wrap').addClass('active');

            $('html, body').animate({
                scrollTop: 0
            }, 500);
        }
    });
});