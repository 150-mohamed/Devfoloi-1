let aboutOffset = $("#about").offset().top;
$(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    if (wScroll > aboutOffset - 50) {
        $("#main-nav").css("backgroundColor", "rgba(0, 0, 0, 0.7)");
        $("#main-nav").css("padding-left", "50px");
        $("#main-nav").css("padding-right", "50px");
        $("#btnUp").fadeIn(500);
    } else {
        $("#main-nav").css("backgroundColor", "transparent");
        $("#main-nav").css("padding-left", "0px");
        $("#main-nav").css("padding-right", "0px");
        $("#btnUp").fadeOut(500);
    }
});
$("a[href^='#']").click(function (e) {
    let aHref = $(e.target).attr('href');
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({ scrollTop: sectionOffset }, 2000);
});
$(document).ready(function () {
    $("#Loading .spinner").fadeOut(10, function () {
        $("#Loading").fadeOut(10, function () {
            $("body").css("overflow-y", "auto");
            $("#Loading").remove();
        });
    });
    $('.owl-carousel').owlCarousel({
        items:3,
        margin:10,
        loop:true
    });
});
let colorsItem = $(".color-item");
colorsItem.eq(0).css("backgroundColor", "tomato");
colorsItem.eq(1).css("backgroundColor", "#09c");
colorsItem.eq(2).css("backgroundColor", "teal");
colorsItem.eq(3).css("backgroundColor", "lightgreen");
colorsItem.eq(4).css("backgroundColor", "orange");
colorsItem.click(function () {
    let bgColor = $(this).css('backgroundColor');
    $("h2 , p").css("color", bgColor)
})
$("#sideBar i").click(function () {
    let boxWidth = $('.color-box').innerWidth();
    if ($('#sideBar').css("left") == "0px") {
        $("#sideBar").animate({ left: -boxWidth }, 1000);
    } else {
        $("#sideBar").animate({ left: "0px" }, 1000);
    }
});
