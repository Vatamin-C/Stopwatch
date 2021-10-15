const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const continueBtn = document.getElementById("continue");
const restartBtn = document.getElementById("restart");
const timer = document.getElementsByClassName("timer")[0];
let hours = 0; minutes = 0; seconds = 0; miliseconds = 0; 

// time function 

const startTime = () => {
    miliseconds += 4;
    if (miliseconds === 1000) {
        miliseconds = 0;
        seconds += 1;
        if (seconds===60) {
            seconds = 0;
            minutes += 1;
            if (minutes === 60) {
                minutes = 0;
                hours += 1;
            }
        }
    }
    const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
    const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const hoursText = hours < 10 ? "0" + hours.toString() : hours;
    timer.textContent = hoursText + ":" + minutesText + ":" + secondsText + ":" + miliseconds;
}

let intervalFunction;
let clearFunction;

/*pauseBtn.addEventListener("click", clearFunction = () => {
    clearInterval(intervalFunction);
});
*/
startBtn.addEventListener("click", 
intervalFunction = () => {
    setInterval(startTime, 1);}
    ) ;

pauseBtn.addEventListener("click", console.log("asfsdf..")
);




