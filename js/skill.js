for (let i = 1; i <= $(".skillWrapper").length; i++) {
    const per = $("div.skillWrapper:nth-child(" + (i) + ")").data("percent");
    $("div.skillWrapper:nth-child(" + (i) + ") .percentage").text(per + "%");
    $("div.skillWrapper:nth-child(" + (i) + ") .circle").attr("stroke-dasharray", per + ", 100");
}
checkAnimation();

function checkAnimation() {
    if (isElementInViewport(".skillPer")) {
        $(".circle").css("animation", "progress 2s ease-out forwards");
    }
}

function isElementInViewport(elem) {
    var elementTop = $(elem).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
}

$(window).scroll(function () {
    checkAnimation();
});