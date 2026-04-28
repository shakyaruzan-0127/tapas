"use strict";
//Global
//This keyword and window object
//this === window

//inside of an object - implicit binding
const employee = {
  name: "scarlet",
  id: 4444,
  address: "ktm",

  returnThis: function () {
    return this;
  },
  getFullName: function () {
    return `${this.name} at ${this.address} using this`;
  },
};
console.log("employee id:", employee.id);
console.log(employee.returnThis());
console.log(employee.getFullName());

//implicit binding method
const tom = {
  name: "tom",
  age: 5,
};

const jerry = {
  name: "jerry",
  age: 3,
};

function greetMe(obj) {
  obj.logMessage = function () {
    console.log(`${this.name} is ${this.age} years old`);
  };
  console.log(obj);
}

greetMe(tom);
tom.logMessage();

/* 
before call:   tom = { name: 'tom', age: 5 }

greetMe(tom) called
  ↓
obj = tom (same object, new nickname)
  ↓
obj.logMessage = function(){...}  added
  ↓
tom is now { name: 'tom', age: 5, logMessage: fn }
  ↓
console.log(obj) prints that updated object
  ↓
function ends

after call:    tom = { name: 'tom', age: 5, logMessage: fn }  ← permanently changed 
*/

greetMe(jerry);
jerry.logMessage();

function outer(a) {
  console.log("outer", this);
  function inner(b) {
    console.log("inner", this);
  }
  inner(10);
}
outer(5);

const food = {
  name: "mango",
  color: "yello",

  //getDex () => `{this.name} is ${this.color}`,  => arrow function wont work. it works upon parent function here it is global
  getDes: function() {//regular JS function will work
    return `${this.name} is ${this.color}`;
  }
};
console.log(food.getDes());

//explicit binding
//call, apply, bind

function greeting() {
    console.log(`hello ${this.name} belongs to ${this.address}`);
}

const user = {
    name: 'scarlet',
    address: 'freaks'
};

//call
greeting.call(user);

const likes = function(hobby1, hobby2) {
    console.log(`hello ${this.name} likes ${hobby1} and ${hobby2}`);
}
const person = {
    name: 'scarlet'
}
likes.call(person, 'guitar', 'bike');  //call function with parameters


//apply () method
const hobbiesToApply = ['Sleeping', 'eating'];
likes.apply(person, hobbiesToApply);


//bind() method
function newHobbies(hobby1, hobby2) {
    console.log(`${this.name} likes ${hobby1} ${hobby2}`)
} 

const officer = {
    name: 'bob',
};

newHobbies.call(officer, 'dancing', 'singing');//call()

const newFn = newHobbies.bind(officer, 'playing', 'loving');//bind
newFn();//use variable later in bind



//example
const user2 = {
    name: 'rim',
    greet: function () {
        const inner = () => {
            console.log(`hello, ${this.name}!`);
        }
        inner();
    },
}

user2.greet();
/* 
Old JS         →  const self = this      (hacky workaround)
Still old JS   →  .bind(this)            (cleaner but verbose)
ES6 2015       →  arrow functions        (problem solved properly)
 */

//example 2
const obj = {
    name: 'jhon',
    greet: function () {
        console.log(`help, ${this.name}!`);
    },
};
const greetFn = obj.greet;
//greetFn(); error 
greetFn.call(obj);//explicit binding