setInterval(countdown, 1000);


const day = document.getElementById("days");
const hour = document.getElementById("hour");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");

function countdown(){
    const definedData = new Date("31 dec 2022");
    const currentDate = new Date();

    const totalSeconds = (definedData - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    day.innerHTML = formatTime(days);
    hour.innerHTML = formatTime(hours);
    min.innerHTML = formatTime(minutes);
    sec.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}

countdown()