import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let selectedTime = 0;
const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  d: document.querySelector('[data-days]'),
  h: document.querySelector('[data-hours]'),
  m: document.querySelector('[data-minutes]'),
  s: document.querySelector('[data-seconds]'),
};

const option = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  enableSeconds: true,
  onClose(selectedDates) {
    selectedTime = +fp.formatDate(selectedDates[0], 'U') * 1000;
    const checkTime = Date.now();
    if (selectedTime < checkTime) {
      refs.startBtn.disabled = true;
    }
    if (selectedTime > checkTime) {
      refs.startBtn.disabled = false;
    }
    if (selectedTime < checkTime) {
      Notiflix.Notify.failure('Обрана дата у минулому');
    }
  },
};

const fp = flatpickr(document.querySelector('#datetime-picker'), option);

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
    this.delay = 0;
  }

  start() {
    if (!selectedTime) {
      Notiflix.Notify.failure('Оберіть дату');
      return;
    }

    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = selectedTime - currentTime;
      if (deltaTime < 0) {
        clearInterval(this.intervalId);
        return Notiflix.Notify.info('Таймер завершено');
      }
      console.log(deltaTime);
      const time = this.convertMs(deltaTime);
      this.onTick(time);
      this.delay = 1000
    }, this.delay);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.convertMs(0);
    this.onTick(time);
    refs.startBtn.disabled = true;
    Notiflix.Notify.info('Оберіть нову дату');
  }

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = this.addLeadingZero(Math.floor(ms / day));
    const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = this.addLeadingZero(
      Math.floor(((ms % day) % hour) / minute)
    );
    const seconds = this.addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  }

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({
  onTick: updateClock,
});

refs.startBtn.addEventListener('click', () => timer.start());
refs.stopBtn.addEventListener('click', () => timer.stop());

function updateClock({ days, hours, minutes, seconds }) {
  refs.d.textContent = days;
  refs.h.textContent = hours;
  refs.m.textContent = minutes;
  refs.s.textContent = seconds;
}
