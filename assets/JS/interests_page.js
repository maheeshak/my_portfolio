
$(".about").css('display', 'none');
$("#nav_bar").css('display', 'none');
$(".interest_main").css('display', 'none');
$(".academic").css('display', 'none');
$(".prof_main").css('display', 'none');
$(".skills").css('display', 'none');
$(".assignment").css('display', 'none');
$(".project_main").css('display', 'none');
$(".gallery_main").css('display', 'none');
$(".contact").css('display', 'none');
$("footer").css('display', 'none');


$("#about").on("click", () => {
    $(".home_main").css('display', 'none').css('opacity', 0);
    $("#nav_bar").css('display', 'block');
    $(".about").css('display', 'block').css('opacity', 1);
    $(".interest_main").css('display', 'block');
    $(".academic").css('display', 'block');
    $(".prof_main").css('display', 'block');
    $(".skills").css('display', 'block');
    $(".assignment").css('display', 'block');
    $(".project_main").css('display', 'block');
    $(".gallery_main").css('display', 'block');
    $(".contact").css('display', 'block');
    $("footer").css('display', 'block');




})


// Common CSS properties for resetting images and spans
const resetCSS = {
    width: "400px",
    height: "150px",
    filter: "none"
};

/*// Event handler for mouseleave (reset)
$(".ints_card_set > div > img").on("mouseleave", () => {
    $(".ints_card_set > div > img").css(resetCSS);
    $(".ints_card_set > div > span").css({zIndex: "0"});
});

// Event handler for mouseenter (image animation and blur)
$(".ints_card_set > div").on("mouseenter", function () {
    const isFirstChild = $(this).is(":first-child");
    const imgSelector = isFirstChild ? ":first" : ":nth-child(2)";
    const spanSelector = isFirstChild ? ":nth-child(2)" : ":first";

    $(".ints_card_set > div > img").css(resetCSS);
    $(".ints_card_set > div > span").css({zIndex: "0"});

    $(`.ints_card_set > div${imgSelector} > img`).css({
        width: "410px",
        height: "160px",
        transition: "width 0.5s, height 0.5s, transform 0.5s",
        animationTimingFunction: "linear"
    });

    $(`.ints_card_set > div${spanSelector}`).css({zIndex: "1"});
});*/

$(".ints_card_set > div > img").on("mouseleave", () => {
    $(".ints_card_set > div > img").css(resetCSS);
    $(".ints_card_set > div > span").css({ zIndex: "0" });
});

$(".ints_card_set > div").on("mouseenter", function () {
    // Reset all images and spans
    $(".ints_card_set > div > img").css(resetCSS);
    $(".ints_card_set > div > span").css({ zIndex: "0" });

    // Apply the animation and blur to the current child
    const img = $(this).find('img');
    const span = $(this).find('span');

    img.css({
        width: "410px",
        height: "160px",
        transition: "width 0.5s, height 0.5s, transform 0.5s",
        animationTimingFunction: "linear"
    });

    span.css({ zIndex: "1" });
});