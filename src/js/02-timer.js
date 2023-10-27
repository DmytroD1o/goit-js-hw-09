import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/confetti.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    date = fp.selectedDates[0];
    currentTime = Date.now();
    checkDate(date, currentTime);
  },
};

const buttonStart = document.querySelector('button[data-start]');
const spanDay = document.querySelector('span[data-days]');
const spanHours = document.querySelector('span[data-hours]');
const spanMinutes = document.querySelector('span[data-minutes]');
const spanSeconds = document.querySelector('span[data-seconds]');
const fp = flatpickr('#datetime-picker', options);


buttonStart.disabled = true;
let date;
let currentTime;
let isActive = false;

buttonStart.addEventListener('click', startCount);

function startCount() {
  if(isActive) return;
  isActive = true;
  const intervalId = setInterval(() => {
    date = fp.selectedDates[0];
    currentTime = Date.now();
    const diff = date - currentTime;
    if (diff <= 0) {
      if(!isActive) return;
      isActive = false;
      clearInterval(intervalId);
      render({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      
      const time = convertMs(diff);
      render(time);
    }
  }, 1000);
}

function render(time) {
  spanDay.textContent = addLeadingZero(time.days);
  spanHours.textContent = addLeadingZero(time.hours);
  spanMinutes.textContent = addLeadingZero(time.minutes);
  spanSeconds.textContent = addLeadingZero(time.seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function checkDate(date, currentTime) {
  if (date < currentTime) {
    window.alert('Please choose a date in the future');
    buttonStart.disabled = true;
  } else {
    buttonStart.disabled = false;
  }
}
