$(window).scroll(function () {
    var top = $(document).scrollTop();
    var documentHeight = $(document).height();
    if (top > 0) {
        $('.left-menu__mobile').addClass('fixed');
    } else {
        $('.left-menu__mobile').removeClass('fixed');
    }
});