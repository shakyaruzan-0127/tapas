//callack function
function callback(callB) {
  console.log("call");
  callB();
}

callback(function () {
  console.log("back");
});

//real life callback
const toCallPizza = true;
function pizzaShop(functionPassed) {
  console.log("making pizza");
  if (toCallPizza) {
    functionPassed();
  }
}

pizzaShop(function () {
  console.log("ring the bell");
});

//using named function
const pizzaShop2 = function () {
  console.log("ring");
};
pizzaShop(pizzaShop2);

//pure function
//gives same output for the same input
//does not change anything outside itself
//below is a function that is kept inside IIFE... Variable greet2 is created only inside the memory of IIFE
(function () {
  let greet2 = "hello";
  function greetings2(name) {
    return `${greet2} ${name}`;
  }

  console.log(greetings2("scarlet"));
  console.log(greetings2("scarlet"));
  greet2 = "hoola";
  console.log(greetings2("scarlet"));
  console.log(greetings2("scarlet"));
})();

//the above is not a pure function

//HoF higher order function
function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Alex");
}

processUser(greet);

//HoF 2
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
/* const myTask = createTask();
myTask(); */

createTask()();

//Arrow function
let greetMe = (greetingMessage) => {
  console.log(greetingMessage + " great");
};
greetMe("yo");

//IIFE 2 (Immediatly Invoked Function Expression)
//need paranthesis
(function () {
  console.log("Hello IIFE");
})();

//arrow function IIFE
(() => {
  console.log("Modern IIFE");
})();

let arrow = (parameter, ...rest) => {
  console.log(`arrow function ${parameter}`, rest);
};
arrow(15, 10, 5);

//callstack example

/*
three
two
one
Global 
*/
function one() {
  two();
  console.log("one");
}

function two() {
  three();
  console.log("two");
}

function three() {
  console.log("three");
}

one();

//Recursion
//Call Stack
function count(n) {
  if (n === 0) {
    return;
  }

  console.log(n);

  count(n - 1);
}

count(3);
//need a exit criteria



