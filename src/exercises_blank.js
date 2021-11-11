// https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-08.md

// Коллекция объектов для всех примеров с автомобилями
import cars from './cars.js';

// =========================================================
// Example 1 - Метод map
// Пусть функция getModels возвращает
// массив моделей (поле model) всех автомобилей.

// const getModels = (cars) => {};

// console.table(getModels(cars));

// =========================================================
// Example 2 - Метод map
// Пусть функция makeCarsWithDiscount возвращает
// новый массив объектов с изменным значением свойства price
// в зависимости от переданной скидки.

// const makeCarsWithDiscount = (cars, discount) => {};

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// =========================================================
// Example 3 - Метод filter
// Пусть функция filterByPrice возвращает массив автомобилей
// цена которых меньше чем значение параметра threshold.

// const filterByPrice = (cars, threshold) => {};

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// =========================================================
// Example 4 - Метод filter
// Пусть функция getCarsWithDiscount возвращает массив автомобилей
// свойство onSale которых true.

// const getCarsWithDiscount = (cars) => {};

// console.table(getCarsWithDiscount(cars));

// =========================================================
// Example 5 - Метод filter
// Пусть функция getCarsWithType возвращает массив автомобилей
// тип которых совпадает со значением параметра type.

// const getCarsWithType = (cars, type) => {};

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

// =========================================================
// Example 6 - Метод find

// const getCarByModel = (cars, model) => {};

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// =========================================================
// Example 7 - Метод sort
// Пусть функция sortByAscendingAmount возвращает
// новый массив автомобилей отсортированный
// по возврастанию значения свойства amount.

// const sortByAscendingAmount = (cars) => {};

// console.table(sortByAscendingAmount(cars));

// =========================================================
// Example 8 - Метод sort
// Пусть функция sortByDescendingPrice возвращает
// новый массив автомобилей отсортированный
// по убыванию значения свойства price.

// const sortByDescendingPrice = (cars) => {};

// console.table(sortByDescendingPrice(cars));

// =========================================================
// Example 9 - Метод sort
// Пусть функция sortByModel возвращает
// новый массив автомобилей отсортированный
// по названию модели в алфавитном и обратном алфавитном порядке,
// в засисимости от значения параметра order.

// const sortByModel = (cars, order) => {};

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// =========================================================
// Example 10 - Метод reduce
// Пусть функция getTotalAmount возвращает
// общее количество автомобилей(значение свойств amount).

// const getTotalAmount = (cars) => {};

// console.log(getTotalAmount(cars));

// =========================================================
// Example 11 - Цепочки методов
// Пусть функция getAvailableCarNames возвращает
// массив моделей автомобилей,
// но только тех, которые сейчас на распродаже.

// const getModelsOnSale = (cars) => {};

// console.table(getModelsOnSale(cars));

// =========================================================
// Example 12 - Цепочки методов
// Пусть функция getSortedCarsOnSale возвращает
// массив автомобилей на распродаже (свойство onSale),
// отсортированных по возрастанию цены.

// const getSortedCarsOnSale = (cars) => {};

// console.table(getSortedCarsOnSale(cars));
