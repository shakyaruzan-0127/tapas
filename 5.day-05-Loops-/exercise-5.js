console.log("exercise-5");
console.log("___________");

//1. right angle triangle
function pattern4() {
  let n = 5;
  for (let row = 1; row <= n; row++) {
    let pattern = "";
    for (let col = 1; col <= n - row + 1; col++) {
      pattern = pattern + "*";
    }
    console.log(pattern);
  }
}
pattern4();

console.log("____________");

function pattern3() {
  let n = 5;
  for (let row = 1; row <= n; row++) {
    let pattern = "";
    for (let col = 1; col <= row; col++) {
      pattern = pattern + "*";
    }
    console.log(pattern);
  }
}
pattern3();

console.log("___________");

//inverted right angle triangle

function pattern2(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    let spaces = n - row;
    for (let col = 1; col <= spaces; col++) {
      str = str + " ";
    }
    let stars = row;
    for (let col2 = 1; col2 <= stars; col2++) {
      str = str + "*";
    }
    console.log(str);
  }
}
pattern2(6);

console.log("____________");
//Diamond
function upperPyramid(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    let spaces = n - row;
    for (let col = 1; col <= spaces; col++) {
      str = str + " ";
    }
    let stars = row * 2 - 1;
    for (let col2 = 1; col2 <= stars; col2++) {
      str = str + "*";
    }
    console.log(str);
  }
}
upperPyramid(5);

console.log("______________");

function lowerPyramid(n) {
  for (row = 1; row <= n - 1; row++) {
    let str = "";
    let spaces = row;
    for (let col = 1; col <= spaces; col++) {
      str = str + " ";
    }
    let stars = 2 * (n - row) - 1;
    for (let col2 = 1; col2 <= stars; col2++) {
      str = str + "*";
    }
    console.log(str);
  }
}
lowerPyramid(5);

console.log("______________");

function diamond(n) {
  upperPyramid(n);
  lowerPyramid(n);
}
console.log(diamond(5));

//2. Create Multiplication table

function multiplication(n) {
  for (let row = 1; row <= 10; row++) {
    let mul = n * row;
    console.log(`${n} * ${row} = ${mul}`);
  }
}
multiplication(3);

//3. sum of all odd numbers between 1 to 500

function sum() {
    let sum = 0;
    for (let i = 1; i <= 500; i += 2) {
        sum = sum + i;
    }
    console.log(sum);
}
sum();


//4. print numbers from 1 to 20 but skip multiples of 3

function skip() {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 !== 0 ) {
           console.log(i); 
        }
        
    }
}
skip();

//5. reverse digits of number

function reverse (num) {
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10; //get last digit
        reversed = reversed * 10 + digit; //build reversed number
        num = Math.floor(num / 10); //removes last digit
    }
    console.log(reversed);
}
reverse(6789);


