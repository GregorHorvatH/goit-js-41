console.log('module 5.2');

// ===== basics =====
// class Human {
//   constructor({ name = 'Nemo', age = 0 } = {}) {
//     this.name = name;
//     this.age = age;
//   }

//   static sum(a, b) {
//     console.log(a + b);
//   }
// }

// class Doctor extends Human {
//   constructor({ specialized = '', ...rest } = {}) {
//     super(rest);

//     this.specialized = specialized;
//   }

//   work() {
//     console.log('I can heal');
//   }
// }

// class Pilot extends Human {
//   work() {
//     console.log('I can fly');
//   }
// }

// const house = new Doctor({ name: 'House', specialized: 'diagnost' });
// console.log(JSON.stringify(house));

// const doctorNemo = new Doctor();
// console.log(doctorNemo);

// Human.sum(1, 1);
// Doctor.sum(2, 2);

// ===== privat keys, getters, setters =====
// class Car {
//   #model;
//   #speed;

//   constructor(model) {
//     this.#model = model;
//     this.#speed = 0;
//   }

//   get model() {
//     return this.#model;
//   }

//   get speed() {
//     return this.#speed;
//   }

//   set speed(value) {
//     this.#speed = value < 120 ? value : 120;
//   }
// }

// const zhiga = new Car('2101');

// // zhiga.#model = 'BMW';
// // zhiga.#speed = 900;

// zhiga.speed = 900;

// console.log(zhiga.model);
// console.log(zhiga.speed);

// ===== polimorphysm ======
// class Human {
//   constructor(name) {
//     this.name = name;
//   }

//   work() {
//     console.log('I can work');
//   }
// }

// class Doctor extends Human {
//   work() {
//     console.log('I can heal');
//   }
// }

// const bobby = new Human('Bobby');
// const house = new Doctor('House');

// bobby.work();
// house.work();

// console.log(bobby);
// console.log(house);

// class Foo {
//   #a;
//   constructor(a) {
//     this.#a = a;
//   }

//   sayHello() {
//     console.log('hello');
//   }
// }

// const foo = new Foo();

// foo.sayHello(1);
