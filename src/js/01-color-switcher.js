
const start = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let intervalId = null;


start.addEventListener('click', onStart);
stopButton.addEventListener('click', onStop);

stopButton.disabled = true;

function onStart() {
   intervalId = setInterval(() => {
    start.disabled = true;
    stopButton.disabled = false;
    const getColor = getRandomHexColor()
    document.body.style.backgroundColor = getColor;
   }, 1000
   )
}

function onStop() {
    clearInterval(intervalId)
    start.disabled = false;
    stopButton.disabled = true;
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }