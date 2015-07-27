jQuery(document).ready(function ($) {
    $('.main-menu__mobile').click(function () {
        $(this).next().slideToggle();
    });
});