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
});