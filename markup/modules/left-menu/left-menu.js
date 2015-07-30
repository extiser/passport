jQuery(document).ready(function ($) {
    $('.left-menu__mobile').click(function () {

        var menu = $('.left-menu');

        if ($(this).hasClass('active')) {
            $('.menu-slide').detach();
            menu.clone().appendTo('.sidebar');
            $('.main__slide, .menu-slide, .left-menu__mobile, .main__wrap').removeClass('active');
        } else {
            $('.header').after('<div class="menu-slide"></div>');

            menu.clone().prependTo('.menu-slide');

            $('.sidebar .left-menu').detach();

            $('.main__slide, .menu-slide, .left-menu__mobile, .main__wrap').addClass('active');
        }
    });
});