import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix'

const buttunEl = document.querySelector('[data-start]')
buttunEl.disabled = true
let t = 0

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  enableSeconds: true,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    const date = new Date();
    let dateTime =  Math.round(date.getTime() /1000)
    console.log(dateTime);
    let a = Math.round(fp.formatDate(selectedDates[0], "U"))
    console.log(a);
    if (dateTime < a) {
      buttunEl.disabled = false
      t = a - dateTime
      console.log(t);
      console.log(convertMs(t*1000));
    }
  },
};

const inputEl = document.querySelector('#datetime-picker')
const fp = flatpickr(inputEl, options)

buttunEl.addEventListener('click', onButtonClick)

function onButtonClick() {
  
}

function convertMs(ms) {
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

