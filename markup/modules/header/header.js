$(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top > 0) {
        $('.left-menu__mobile').addClass('fixed');
    } else {
        $('.left-menu__mobile').removeClass('fixed');
    }
});