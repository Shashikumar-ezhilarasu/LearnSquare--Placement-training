const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const timer = document.getElementById("timer");

function resetLights() {
    red.style.opacity = 0.2;
    yellow.style.opacity = 0.2;
    green.style.opacity = 0.2;
}

let seconds = 0;


setInterval(() => {
    timer.textContent = seconds + "s";
    seconds++;
    if (seconds >= 90) seconds = 0; 
}, 1000);


function startCycle() {
    resetLights();
    red.style.opacity = 1;

    setTimeout(() => {
        resetLights();
        yellow.style.opacity = 1;
    }, 30000);


    
    setTimeout(() => {
        resetLights();
        green.style.opacity = 1;
    }, 60000);
}

startCycle();
setInterval(startCycle, 90000);
