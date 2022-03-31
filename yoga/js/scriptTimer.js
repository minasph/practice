// Timer

let deadline = "2022-04-02"; //

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 100 / 60) % 60);
    let hours = Math.floor(t / (1000 * 60 * 60));

    return {
        total: t,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector(".hours"),
        minutes = timer.querySelector(".minutes"),
        seconds = timer.querySelector(".seconds");
    let timeInterval = setInterval(updateClock, 1000);

    function updateClock(a) {
        let t = getTimeRemaining(endtime);
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock("timer", deadline);