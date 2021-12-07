'use strict';

const refs = {
  start: document.querySelector('.start'),
  finish: document.querySelector('.finish'),
  maze: document.querySelector('#maze'),
  indicator: document.querySelector('#indicator'),
};

let isPlay = false;

function onStart() {
  isPlay = true;
  refs.indicator.textContent = 'Play';
}

function onFinish() {
  if (isPlay) {
    isPlay = false;
    refs.indicator.textContent = 'Win';
  }
}

function onLeave() {
  if (isPlay) {
    isPlay = false;
    refs.indicator.textContent = 'Pause';
  }
}

function onMazeOver(e) {
  if (isPlay && e.target.classList.contains('block')) {
    isPlay = false;
    refs.indicator.textContent = 'You loose!';
  }
}

refs.start.addEventListener('mouseover', onStart);
refs.finish.addEventListener('mouseover', onFinish);
refs.maze.addEventListener('mouseleave', onLeave);
refs.maze.addEventListener('mouseover', onMazeOver);
