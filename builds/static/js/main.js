$(window).scroll(function () {
    var top = $(document).scrollTop();
    var documentHeight = $(document).height();
    if (top > 0) {
        $('.left-menu__mobile').addClass('fixed');
    } else {
        $('.left-menu__mobile').removeClass('fixed');
    }
});
jQuery(document).ready(function ($) {
    $(window).load(function () {
        $('.sidebar-menu').mCustomScrollbar({
            scrollInertia: 1100,
            alwaysShowScrollbar: 0,
            scrollButtons: false,
            scrollbarPosition: 'outside'
        });
    });
    $('.left-menu__mobile').click(function () {
        $('.sidebar-menu, body, .mask, .left-menu__mobile').toggleClass('active');
    });
    $('.mask').click(function () {
        $('.sidebar-menu, body, .mask, .left-menu__mobile').removeClass('active');
    });
});