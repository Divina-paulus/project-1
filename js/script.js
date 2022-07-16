
$(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $('#scrollUp').fadeIn('slow');
    } else {
        $('#scrollUp]').fadeOut('slow');
    }
});

$('#scrollUp').click(function () {
    $("html, body").animate({scrollTop: 0}, 1000);
    return false;
});