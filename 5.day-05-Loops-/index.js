/* for (initialization; condition; update) {
    code
} */
//for loop
let count = 1;
for (count; count <= 5; count++) {
  console.log("iteration/loop", count);
}

//while loop
let count2 = 1;
while (count2 <= 5) {
  console.log("while loop", count2);
  count2++;
}

//do while loop
let count3 = 1;
do {
  console.log('do while', count3);
  count3++;
} while (count3 <= 6);

//addition of even number between 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    //sum = sum + i;
    sum += i;
  }
}
console.log("sum is", sum);

//printing the string characters
let language = "javascript";
for (let i = 0; i < language.length; i++) {
  console.log(language.charAt(i));
}

//nested loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("row", i, "Col", j);
  }
}

//break
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

//continue
for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i);
}

//multiple counters in for loop
for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
  console.log(i, j);
}

//while loop
/* 
while(condition) {
    code
} */

let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter += 2;
}

//do while loop

/* 
do {
  code;
} while (condition);
 */
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);
