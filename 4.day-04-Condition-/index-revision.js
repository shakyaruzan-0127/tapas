//2. axis bank ATM
let totalAmount = 40000;
let bankBalance = totalAmount;

function withdraw(withdrawAmount) {
  if (withdrawAmount <= 0 || isNaN(withdrawAmount)) {
    console.log("invalid input.");
  } else if (withdrawAmount > bankBalance) {
    console.log("invalid input. not enough balance");
  } else if (withdrawAmount % 500 !== 0) {
    console.log("invalid input. input multiple of 500");
  } else {
    bankBalance = totalAmount - withdrawAmount;
    console.log(
      `you have withdrawn ${withdrawAmount}, now your balance is ${bankBalance}`,
    );
  }
}
withdraw(24500);

//3. calculator
let calc = (operand1, operator, operand2) => {
  switch (operator) {
    case "+":
      return operand1 + operand2;
      break;
    case "-":
      return operand1 - operand2;
      break;
    case "*":
      return operand1 * operand2;
      break;
    case "/":
      return operand1 / operand2;
      break;
    case "%":
      return operand1 % operand2;
      break;
    default:
      return "invalid output";
  }
};
let calculation = calc(50, "*", 5);
console.log(calculation);

//4. movie ticket

function movieTicket(age) {
  if (age < 0 || age > 100) {
    console.log("invalid age");
  } else if (age < 18 && age > 1) {
    console.log("the ticket price is $3");
  } else if (age >= 18 && age <= 60) {
    console.log("the ticket price is $10");
  } else if (age > 60 && age <= 99) {
    console.log("ticket price is $8");
  }
}
movieTicket(90);

//6. which triangle

function triangle(sideA, sideB, sideC) {
  if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
    return 'invalid triangle';
  }
  if (sideA === sideB && sideB === sideC) {
    return 'equilateral triangle';
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    return 'isoseceles triangle'
  } else {
    return 'scalene triangle'
  }
}
console.log(triangle(4, 8, 5));


