$(document).ready(function(){
    $(".introInfo").animate({
        opacity: "1"
    }, 1000);

    const animate = setInterval(() => {
        if (pausei < pauseN) {
            pausei++;
        } else {
            typingFun();
        }
    }, eachInterval);

    $(document).scroll(function () {
        var scroll_pos = $(this).scrollTop();

        // FOR SCROLL TOP BUTTON
        if (scroll_pos > 200) {
            if ($('.scrollTop').css('bottom') == '-50px') {
                $('.scrollTop').animate({ bottom: "50px" });
            }
        } else {
            if ($('.scrollTop').css('bottom') == '50px') {
                $('.scrollTop').animate({ bottom: "-50px" });
            }
        }
    });

    // SCROLL TOP BUTTON CLICK
    $('.scrollTop').click(function () {
        topScroll();
    })
});


// SCROLL TO TOP
function topScroll() {
    $(window).scrollTop(0);
}