

var timeLeft;
function convertSecToMin(){
    var min = floor(s / 60);
    var sec = s % 60;
    return min + ':' + sec;
}
function setup() {

    var timer = select('#timer');
    timer.html(convertSecToMin(timeleft - counter));

    function timeIt(){
        counter++;
        timer.html(convertSecToMin(timeLeft - counter));
    }
    setInterval(timeIt, 1000);
}

