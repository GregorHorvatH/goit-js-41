console.log('module 9.1');

import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'toastr/build/toastr.min.css';
import 'basiclightbox/dist/basicLightbox.min.css';
import './style.css';

import Clock from './clock';

const clock1 = new Clock({
  title: 'Clock 1',
  selector: '.clock-widget-1',
});
const clock2 = new Clock({
  title: 'Clock 2',
  selector: '.clock-widget-2',
});

clock1.start();
// clock2.start();

// for (var i = 0; i < 5; i += 1) {
//   // IIFE
//   (function fn(x) {
//     setTimeout(function() {
//       console.log(x);
//     }, 10);
//   })(i);
// }

// ===== moment =====
// import moment from 'moment';

// const date1 = '2021.12.25'; // 25/12/2021
// console.log(moment(date1, 'YYYY.MM.DD').format('DD/MM/YYYY'));

// console.log(moment().format('DD/MM/YYYY HH:mm:ss'));
