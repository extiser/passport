$(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top > 0) {
        $('.left-menu__mobile').addClass('fixed');
    } else {
        $('.left-menu__mobile').removeClass('fixed');
    }
});
jQuery(document).ready(function ($) {
    $('.left-menu__mobile').click(function () {
        $('.sidebar-menu, body, .mask, .left-menu__mobile').toggleClass('active');
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();

        $('.sidebar-menu').height(documentHeight);
    });
    $('.mask').click(function () {
        $('.sidebar-menu, body, .mask, .left-menu__mobile').removeClass('active');
    });
});