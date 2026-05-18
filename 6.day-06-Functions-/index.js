console.log("Day-6");

//declaring function
function printTHis() {
  console.log("printing...");
}

//invoking calling a function
printTHis();

//function as expression / assigned a function to a variable
let printMe = function () {
  console.log("print me");
};
printMe();

//Parameters and Arguments
//parameters a, b Parameters are the placeholders
function sum(a, b) {
  return a + b;
}
//arguments 5, 6 The value passed to the function is argument
let result = sum(5, 66);
console.log(result);

function double(x) {
  return 2 * x;
}
console.log(double(result));

//default parameters
function calc(a = 2, b = 0) {
  return 2 * (a + b);
}
console.log(calc());

//Rest Parameter
function calculateThis(x, y, ...rest) {
  //assign the other argument values as array in the rest parameter.
  console.log(x, y, rest);
}

calculateThis(1, 2, 3, 4, 5, 6, 7);

//nested function
function outer() {
  console.log("outer");
  return function inner() {
    console.log("inner");
  };
}
let i = outer();
console.log(i());

//pure function
let greetingMSG = "hello ";
function greeting(name) {
  return greetingMSG + name;
}

console.log(greeting("scarlet"));
console.log(greeting("scarlet"));
greetingMSG = "namaste ";
console.log(greeting("scarlet"));

//callback function
function foo(func) {
  console.log("foo");
  func();
}
foo(function () {
  console.log("buz");
});

//callback 2
function sayHi() {
  console.log("hi");
}
function great(callback) {
  callback();
}
great(sayHi);

//HoF Higher order Function

function doTask(task) {
  task();
}
doTask(function () {
  console.log("Task is running");
});

function createTask() {
  return function () {
    console.log("Task created and running");
  };
}
const myTask = createTask();
myTask();

//HoF 2
function operate(a, b, callback) {
  return callback(a, b);
}
function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
console.log(operate(2, 3, sub));

//Arrow function
let greetMe = (greetingMessage) => {
  console.log(greetingMessage + " great");
};
greetMe("yo");

let goat = (cow) => {
  return cow + "green";
};
console.log(goat("hi "));

//IIFE immediately invoked function expression
(function (count) {
  console.log("IIFE", count);
})(1);

// Recursion
function fetchWater(count) {
  console.log("fetch water..", count);
  if (count === 0) {
    console.log("no more water");
    return;
  }
  fetchWater(count - 1);
}
fetchWater(6);
