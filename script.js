let startTime, updatedTime, difference, tInterval;
let isRunning = false;
let lapsContainer = document.getElementById('laps');

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    let hours = Math.floor(difference / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('display').textContent =
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}

document.getElementById('start').addEventListener('click', function () {
    if (!isRunning) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(updateTime, 1000);
        isRunning = true;
    }
});

document.getElementById('pause').addEventListener('click', function () {
    clearInterval(tInterval);
    isRunning = false;
});

document.getElementById('reset').addEventListener('click', function () {
    clearInterval(tInterval);
    document.getElementById('display').textContent = "00:00:00";
    difference = 0;
    isRunning = false;
    lapsContainer.innerHTML = "";  // Clear laps
});

document.getElementById('lap').addEventListener('click', function () {
    if (isRunning) {
        let lapTime = document.getElementById('display').textContent;
        let lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapsContainer.appendChild(lapItem);
    }
});
