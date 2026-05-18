

console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(!true); //false
console.log(true || false); //true ..only 1 value true is true
console.log(true && false); //false ..both values must be true

console.log(0 || "Hello"); //0 is false "hello" is true ..so prints.. hello
console.log("Hi" && 0); // both must be true to print Hi ..0 is false so it prints the second value which is 0

console.log(10 + "5"); //105
console.log("12" - 5); //7
console.log(2 ** 3); //2 * 2 * 2 = 8

console.log("a" > "b"); //has character codes.. a-z small to big A-Z small to big but is lower than a
console.log(true + false); //converts booleans to numbers, truthy values are 1 .. falsy values are 0
console.log([] + {}); //empty array [] to empty string "" + object {} converts to this string "[object Object]" 

let y = 10;
y *= 2; //y * 2 
console.log(y); //20