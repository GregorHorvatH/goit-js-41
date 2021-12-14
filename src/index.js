// console.log('module 8.1');

// import 'bootstrap';
// import 'bootstrap/scss/bootstrap.scss';
// import './style.css';

// import './todos';

// import Joi from 'joi';

// const schema = Joi.object({
//   username: Joi.string()
//     .alphanum()
//     .min(3)
//     .max(30)
//     .required(),

//   password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

//   repeat_password: Joi.ref('password'),

//   access_token: [Joi.string(), Joi.number()],

//   birth_year: Joi.number()
//     .integer()
//     .min(1900)
//     .max(2013),

//   email: Joi.string().email({
//     minDomainSegments: 2,
//     tlds: { allow: ['com', 'net'] },
//   }),
// })
//   .with('username', 'birth_year')
//   .xor('password', 'access_token')
//   .with('password', 'repeat_password');

// const result = schema.validate({ username: 'abc', birth_year: 1994 });

// console.log('result:', result);

// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';

// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `);

// instance.show();

import Player from '@vimeo/player';

const options = {
  id: 59777392,
  width: 640,
  loop: true,
};

const player = new Player('made-in-ny', options);

player.setVolume(0);

player.on('play', function() {
  console.log('played the video!');
});
