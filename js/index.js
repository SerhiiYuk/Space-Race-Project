const startTime = new Date();
function updateTimer() {
    const currTime = new Date();
    const diffSecs = Math.round((currTime - startTime) / 1000);
    document.querySelector('.banner-counter').innerText = diffSecs * 42;
}
setInterval(updateTimer, 1000);

function updateClock() {
    const clock = document.querySelector('.clock');
    clock.innerText = new Date().toLocaleTimeString();
}
setInterval(clock, 1000);