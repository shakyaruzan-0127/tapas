console.log("day-3");

//arithmetic operators
let a = 2;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b); //a ^ b
console.log(a % b);

let count = 10;

console.log(count++); //post increment
console.log(count);

console.log(++count); //pre increment

//assignment
let x = 15;
x += 5;
console.log(x);
x -= 6;
console.log(x);

//comparision

//logical
//and &&   or ||   ??   not!
let a1 = null ?? 1;
let a2 = undefined ?? 2;

let age = 20;
console.log(age >= 60 ? "senior" : "non senior");


//grouping
console.log('--grouping--');

let p, q, r;
p = 1;
q = 2;
r = 3;
console.log(p + (q * r));
console.log((p + q) * r);

//typeof
console.log(typeof 'hello');
console.log(typeof 15);

function function1() {
    return 5;
}
console.log(function1());

console.log(typeof function1);

console.log(typeof null);
console.log(typeof undefined);

//instanceof
