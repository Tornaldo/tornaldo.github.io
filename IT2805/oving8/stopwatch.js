var counter;
var startTime;
var running = false;



var toggleTimer = function() {

    if(running) {
        stopTimer();
    }
    else {
        startTimer();
    }

}



var startTimer = function() {

    if(startTime === undefined) {
        startTime = new Date();
    }
    running = true;
    counter = window.setInterval(updateTimer, 10);

}



var stopTimer = function() {

    running = false;
    window.clearInterval(counter);

}



var updateTimer = function() {

    var currentTime = new Date();
    var temp = new Date(currentTime - startTime);
    var elapsedTime = 	two(temp.getHours() - 1) + ":" +
        two(temp.getMinutes()) + ":" +
        two(temp.getSeconds()) + ":" +
        temp.getMilliseconds();

    setDisplayArea(elapsedTime);

}



var resetTimer = function() {

    startTime = new Date();
    stopTimer();
    setDisplayArea('00:00:00.000');

}



function two(n){

    if(n > 9){
        return n;
    }
    return "0" + n;

}



var setDisplayArea = function(text) {

    var el = document.getElementById('display-area');
    el.textContent = text;

}