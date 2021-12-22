import moment from 'moment';

const template = ({ title }) => `<div class="clock">
  <h3>${title}</h3>
  <p class="date">00.00.0000</p>
  <p class="time">00:00:00</p>
  <button class="btn btn-light stop">Stop</button>
  <button class="btn btn-success start">Start</button>
</div>`;

class Clock {
  constructor({ title, selector }) {
    const parent = document.querySelector(selector);
    parent.insertAdjacentHTML('beforeend', template({ title }));

    parent
      .querySelector('.stop')
      .addEventListener('click', this.stop.bind(this));
    parent
      .querySelector('.start')
      .addEventListener('click', this.start.bind(this));

    this.date = parent.querySelector('.date');
    this.time = parent.querySelector('.time');
  }

  update() {
    // const date = new Date();

    // const day = date.getDate();
    // const month = date.getMonth() + 1;
    // const year = date.getFullYear();
    // const dateString = `${day}/${month}/${year}`;

    // const hh = date
    //   .getHours()
    //   .toString()
    //   .padStart(2, 0);
    // const mm = date
    //   .getMinutes()
    //   .toString()
    //   .padStart(2, 0);
    // const ss = date
    //   .getSeconds()
    //   .toString()
    //   .padStart(2, 0);
    // const timeString = `${hh}:${mm}:${ss}`;
    const date = moment();
    const dateString = date.format('DD/MM/YYYY');
    const timeString = date.format('HH:mm:ss');

    this.date.textContent = dateString;
    this.time.textContent = timeString;
  }

  start() {
    this.timerId = setInterval(this.update.bind(this), 1000);
  }

  stop() {
    clearInterval(this.timerId);
  }
}

export default Clock;
