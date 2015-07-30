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
        void 0;

        var windowHeight = $(window).height();
        void 0;
    });
    $('.mask').click(function () {
        $('.sidebar-menu, body, .mask, .left-menu__mobile').removeClass('active');
    });
});