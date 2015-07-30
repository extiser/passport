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
        $('.sidebar-menu').height($('body').height() - 50);
    });
    $('.mask').click(function () {
        $('.sidebar-menu, body, .mask, .left-menu__mobile').removeClass('active');
    });
});