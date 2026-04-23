console.log("Closures");

function outer() {
  let x = 10;
  return function inner() {
    console.log(x);
  };
}
const outerFunc = outer();
console.log(outerFunc());

//another closure
function outerCount() {
  let count = 0;
  return function innerCount() {
    count++;
    console.log(count);
  };
}
const returnVal = outerCount();
returnVal();
returnVal();

//Real world example
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: (amount) => {
      balance = balance + amount;
      console.log(`Deposited: ${amount} Current Balance: Rs.${balance}`);
    },

    withdraw: (amount) => {
      if (amount > balance) {
        console.warn("insufficent balance");
      } else {
        balance = balance - amount;
        console.log(`Withdrawn: ${amount} Current Balance: Rs.${balance}`);
      }
    },

    checkBalance: () => console.log(`Current Balance: Rs.${balance}`),
  };
}

const scarletAccount = createBankAccount(6000);
scarletAccount.deposit(400); //6400
scarletAccount.checkBalance(); //6400
scarletAccount.withdraw(5000); //1400
scarletAccount.withdraw(1399); //1

//more eg

function timer() {
  let secs = 0;

  return function () {
    secs++;
    console.log(`elapsed seconds ${secs}`);
  };
}

const timerInstance = timer();
timerInstance();
timerInstance();

//closure event handling
/* 
function setupButton() {
  let clickCount = 0;

  document.getElementById("myButton").addEventListener("click", function () {
    clickCount++;
    console.log(`button clickled ${clickCount} times`);
  });
}

setupButton();
 */

