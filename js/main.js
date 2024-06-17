$(document).ready(function () {

    $("#name").click(function() {
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 1000);
    });

    $("#nav-skill").click(function() {
        $('html, body').animate({
            scrollTop: $(".section-skill").offset().top
        }, 1000);
    });

    $("#nav-project").click(function() {
        $('html, body').animate({
            scrollTop: $(".section-projects").offset().top
        }, 1000);
    });

    $("#nav-experience").click(function() {
        $('html, body').animate({
            scrollTop: $(".section-experience").offset().top
        }, 1000);
    });

    $("#nav-education").click(function() {
        $('html, body').animate({
            scrollTop: $(".section-education").offset().top
        }, 1000);
    });

})