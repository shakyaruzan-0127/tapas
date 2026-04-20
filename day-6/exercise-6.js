console.log("exercise-6");
//Convert to fahrenheit
function CelsiusToFar(c) {
  let far = c * (9 / 5) + 32;
  return `${far} degree Fahrenheit`;
}
console.log(CelsiusToFar(37.78));

//Largerneumber
function largeNum(num1, num2) {
  if (num1 > num2) {
    return `this number is larger: ${num1}`;
  } else if (num1 < num2) {
    return `this number is larger: ${num2}`;
  } else {
    return `they are equal`;
  }
}
let number = largeNum(-10, -50);
console.log(number);

//7. IIFE to print Hello js
(function (input) {
  console.log(`hello ${input}`);
})("JavaScript");

//
const add = (a, b) => {
  return a + b;
};
console.log(add(5, 6));

//same as above arrow function
const bye = (a, b) => a - b;
console.log(bye(5, 9));

//callback function simple
function greet(name, callback) {
  callback(name);
}
greet("Jhon", function (name) {
  console.log("hello " + name);
});

//another example
function calc(a, b, callback) {
  callback(a, b);
}
calc(8, 5, function (x, y) {
  console.log(x + y);
});

function calculation(x, y, z) {
  z(x, y);
}
calculation(10, 15, function (a, b) {
  console.log(a * b);
});

//4. factorial
function factorial(n) {
  if (n < 0) {
    return "not defined";
  }
  let fac = 1;
  for (let i = 1; i <= n; i++) {
    fac *= i;
  }
  return fac;
}
console.log(factorial(5));

//5. vowels
function vowel(word) {
  let number = 0;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      number++;
    }
  }
  return number;
}
console.log(vowel("return"));
