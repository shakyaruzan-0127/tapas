let a = "string";
console.log(a.length);

function patternInvertedTriangle() {
  for (let i = 1; i <= 5; i++) {
    patternA = "";
    for (let j = 1; j <= 5 - i + 1; j++) {
      patternA = patternA + "*";
    }
    console.log(patternA);
  }
}
patternInvertedTriangle();

function patternBasicTriangle() {
  for (let i = 1; i <= 5; i++) {
    patternB = "";
    for (let j = 1; j <= i; j++) {
      patternB = patternB + "*";
    }
    console.log(patternB);
  }
}
patternBasicTriangle();

function patternDiamond() {
  for (let i = 1; i <= 6; i++) {
    let row = "";
    //spaces
    for (let j = 1; j <= 6 - i; j++) {
      row = row + " ";
    }
    //stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      row = row + "*";
    }
    console.log(row);
  }
  for (let i = 1; i <= 5; i++) {
    let row = "";
    //spaces
    for (let j = 0; j <= i - 1; j++) {
      row = row + " ";
    }
    //stars
    for (let k = 1; k <= 2 * (5 - i) + 1; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}
patternDiamond();

function patternNumberInverted() {
  for (let i = 1; i <= 5; i++) {
    let row = "";
    //spaces
    for (let j = 1; j <= 5 - i; j++) {
      row = row + " ";
    }

    //numbers
    for (let k = 1; k <= i; k++) {
      row = row + k;
    }
    console.log(row);
  }
}
patternNumberInverted();

function patternNumber() {
  for (let i = 1; i <= 5; i++) {
    let ROW = "";
    //spaces no need
    //numbers
    for (let k = 1; k <= i; k++) {
      ROW = ROW + k;
    }
    console.log(ROW);
  }
}
patternNumber();

//2. mul table
function multiples(n) {
  for (let i = 1; i <= 15; i++) {
    let mul = n * i;
    console.log(`${n} * ${i} = ${mul}`);
  }
}
multiples(21);

//3. sum of odd
function oddNum() {
  let sum = 0;
  for (let i = 0; i <= 500; i++)
    if (i % 2 === 1) {
      sum = sum + i;
    }
  console.log(`sum of odd numbers from 1 to 500 is ${sum}`);
}
oddNum();

//4. skipping multiple of 3
function skip3() {
    for(let i = 1; i <=30; i++) {
        if(i % 3 !== 0) {
            console.log(i);
        }
    }
}
skip3();

