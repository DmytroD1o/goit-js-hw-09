
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');

let intervalId = null;


start.addEventListener('click', onStart);
stop.addEventListener('click', onStop);


function onStart() {
   intervalId = setInterval(() => {
    start.disabled = true;
    const getColor = getRandomHexColor()
    document.body.style.backgroundColor = getColor;
   }, 1000
   )
}

function onStop() {
    clearInterval(intervalId)
    start.disabled = false;
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }