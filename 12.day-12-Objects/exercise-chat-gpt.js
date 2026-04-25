//revision-1
const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020
}

console.log(car.brand);
car.color = 'red';
car.year = 2022;
car['fuel type'] = 'petrol';
console.log(car['fuel type']);
delete car.model;
console.log(car);

const key = 'brand';
console.log(car[key]);

//1. exercise(changing arrow functions)
const greet = function () {
    console.log('hello');
};

const add = (a, b) => a + b;

const multiply = (a, b) => a * b;
multiply(4, 5);