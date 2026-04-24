//global variable
let name = "scarlet"; //if i use var name, the variable gets added o the window object.
//function scope
function greeting() {
  console.log(`Hello ${name}`);
}
greeting();
console.log(name);
//block scope
{
  console.log(`okay ${name}`);
}

//Scope Chain
let globalVar = "i am global";

function outerVariable() {
  let outerVar = "i am outer variable";

  function innerVariable() {
    let innerVar = "i am inner variable";

    console.log(innerVar);
    console.log(outerVar);
    console.log(globalVar);
  }
  innerVariable();
}
outerVariable();

//test
var count = 10;

function outer() {
  var count = 20;

  function inner() {
    var count = 30;
    console.log(count);
  }

  inner();
  console.log(count);
}

outer();
console.log(count);

//exercise-2
let total = 0;
 function add(num) {
    total += num;
    console.log(total);
 }
 add(5);
 add(10);

 //exercise-3
 function daddy() {
    let toy = 1;
    
    function son() {
        console.log(toy + 2);
    }
    son();
 }
 daddy();
 
// Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

/* answer: in function A() (if var in function A() it is accessable throughout the function A(),  
if let or const it is not accessible) / in global we cannot access it. */ 

function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();

