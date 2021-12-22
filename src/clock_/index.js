const template = ({ title = '' } = {}) => `<div class="clock">
  <h3>${title}</h3>
  <p class="date"></p>
  <p class="time"></p>
  <button class="btn btn-light stop">Stop</button>
  <button class="btn btn-success start">Start</button>
</div>`;

class Clock {
  #parent;
  #date;
  #time;
  #timerId;

  constructor({ selector, title = '' }) {
    this.#parent = document.querySelector(selector);

    this.render(title);

    this.#parent
      .querySelector('.stop')
      .addEventListener('click', this.stop.bind(this));
    this.#parent
      .querySelector('.start')
      .addEventListener('click', this.start.bind(this));
  }

  render(title) {
    this.#parent.insertAdjacentHTML('beforeend', template({ title }));
    this.#date = this.#parent.querySelector('.date');
    this.#time = this.#parent.querySelector('.time');
  }

  update() {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const hh = date
      .getHours()
      .toString()
      .padStart(2, 0);
    const mm = date
      .getMinutes()
      .toString()
      .padStart(2, 0);
    const ss = date
      .getSeconds()
      .toString()
      .padStart(2, 0);

    this.#date.textContent = `${day}.${month}.${year}`;
    this.#time.textContent = `${hh}:${mm}:${ss}`;
  }

  start() {
    this.#timerId = setInterval(this.update.bind(this), 1000);
  }

  stop() {
    clearInterval(this.#timerId);
    this.#timerId = 0;
  }
}

export default Clock;
