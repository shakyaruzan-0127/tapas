//2. what is the output
//my answer 
// //100

function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());

//1. output?
//my answer
//1
//2
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();

//4.Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function multiplication(multiplier) {
    let multi = 0;
    
    return function mul(input) {
        multi = input * multiplier;
        console.log(multi);
    }
}

const mulMain = multiplication(4);
mulMain(12);

//