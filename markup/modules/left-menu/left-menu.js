jQuery(document).ready(function ($) {
    $('.left-menu__mobile').click(function () {
        $('.sidebar-menu, body, .mask, .left-menu__mobile').toggleClass('active');
        var documentHeight = $(document).height();
        alert(documentHeight);

        var windowHeight = $(window).height();
        alert(windowHeight);
    });
    $('.mask').click(function () {
        $('.sidebar-menu, body, .mask, .left-menu__mobile').removeClass('active');
    });
});