function startTimer(duration, display) {
    let savedTime = localStorage.getItem('remainingTime');
    
    let timer = (savedTime && !isNaN(savedTime)) ? parseInt(savedTime, 10) : duration;

    updateDisplay(timer, display);

    const interval = setInterval(function () {
        timer--;

        if (timer < 0) {
            timer = duration; 
        }

        updateDisplay(timer, display);
        localStorage.setItem('remainingTime', timer);
    }, 1000);
}

function updateDisplay(time, display) {
    let minutes = parseInt(time / 60, 10);
    let seconds = parseInt(time % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
}

window.onload = function () {
    let twoMinutes = 60 * 2;
    let display = document.querySelector('.timer'); 
    
    if (display) {
        startTimer(twoMinutes, display);
    }
};