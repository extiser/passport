jQuery(document).ready(function ($) {
    $('.left-menu__mobile').click(function () {
        $('.sidebar-menu, body, .mask, .left-menu__mobile').toggleClass('active');
    });
    $('.mask').click(function () {
        $('.sidebar-menu, body, .mask, .left-menu__mobile').removeClass('active');
    });
});