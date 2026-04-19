console.log("exercise-4");
//1. output
console.log("its a normal dayy");

//2. ATM cash withdrawl with 100 multiples only

function withdraw(withdrawnAmount) {
  if (withdrawnAmount % 100 === 0) {
    return "withdraw successful";
  } else {
    return "invalid amount";
  }
}
console.log(withdraw(500));

//3. Calculator with switch case

function calculator(value1, value2, operator) {
  switch (operator) {
    case "+":
      return value1 + value2;
      break;
    case "-":
      return value1 - value2;
      break;
    case "*":
      return value1 * value2;
      break;
    case "/":
      return value2 === 0 ? 'value cannot be dividev by 0' : value1 / value2;
      break;
    case "%":
      return value1 % value2;
      break;
    default:
      return 'invalid value';
  }
}
console.log(calculator(3, 0, '/'));

//4. movie ticket

function ticket(age) {
    if (age < 18) {
        return '$3';
    } else if (age >= 18 && age<= 60) {
        return '$10';
    } else {
        return '$8';
    }
}
console.log(ticket(70));

//5. triangle type
function triangle(side1, side2, side3) {
    //valid triangle checker
    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
        return 'not a valid triangle';
    }
    //triangle type checker
    if (side1 === side2 && side2 === side3) {
        return 'equilateral triangle';
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        return 'isosceles triangle';
    } else {
        return 'scalene triangle';
    }
}
console.log(triangle(3, 5, 3));

