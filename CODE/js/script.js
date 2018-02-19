$(document).ready(function () {
    $(".navbar-nav li").mouseover(function () {
        $(this).find(".dropdown-menu").show("slow")
    });
    $(".navbar-nav li").mouseout(function () {
        $(this).find(".dropdown-menu").hide("slow")
    });
});


