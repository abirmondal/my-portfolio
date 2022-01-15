var contents = $('.typeWriter').data("content");
var timeInterval = $('.typeWriter').data("interval");
var i = 0, j = 0, isDelete = 0;
var textLen = contents[i].length;
var flowText = '';
var pauseN = 15;
var pausei = pauseN;
var eachInterval = timeInterval / (textLen + pauseN);
console.log(eachInterval * pauseN);
function typingFun() {
    if (isDelete == 0) {
        flowText += contents[i][j++];
    }
    else {
        flowText = flowText.substring(0, flowText.length - 1);
        j--;
    }
    $(".actual-content").text(flowText);
    if (j == textLen) {
        isDelete = 1;
        pausei = 0;
    }
    else if (j == 0) {
        i++;
        if (i == contents.length) {
            i = 0;
            textLen = contents[i].length;
        }
        textLen = contents[i].length;
        isDelete = 0;
        eachInterval = timeInterval / textLen;
    }
}