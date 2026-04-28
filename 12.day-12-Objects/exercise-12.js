//revision-1
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

console.log(car.brand);
car.color = "red";
car.year = 2022;
car["fuel type"] = "petrol";
console.log(car["fuel type"]);
delete car.model;
console.log(car);

const key = "brand";
console.log(car[key]);

//1. exercise(changing arrow functions)
const greet = function () {
  console.log("hello");
};

const add = (a, b) => a + b;

const multiply = (a, b) => a * b;
multiply(4, 5);

console.log("-------Tapas-------");

//exercise 1
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided"); // if left: age is undefined or null use right:'not provided' (value ?? default)

//exercise-2
// the frozen object wont change value.
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

//exercise-3
const person = {
  name: "scarlet",
  company: {
    name2: "rose",
    location: {
      city: "ktm",
      zip: "94107",
    },
  },
};

const {
  name,
  company: {
    location: { city },
  },
} = person;
console.log(name);
console.log(city);

//exercise-4
const student = {
  name: "scarlet",
  age: 25,
  grades: {
    science: 52,
    maths: 55,
    english: 50,
  },
};

const {
  grades: { science, maths, english },
} = student;
let average = (science + maths + english) / 3;
console.log(average);

//exercise-5
//step-1
const store = {
  books: {
    "Atomic Habits": { price: 500, stock: 3 },
    "Clean Code": { price: 700, stock: 2 },
    "The Alchemist": { price: 400, stock: 0 },
  },
};
//step-2-for checking stock and price of book
function checkStock(bookName) {
  const book = store.books[bookName];

  if (!book) {
    //not found book
    console.log("Book not found");
    return;
  }

  if (book.stock > 0) {
    console.log(`${bookName} is in stock. Price: ${book.price}`);
  } else {
    console.log(`${bookName} is not in stock.`);
  }
}
//step-3-for restocking book
function restockBook(bookName, quantity) {
  const book = store.books[bookName];

  if (!book) {
    console.log("Book not found");
    return;
  }

  book.stock += quantity;
  console.log(`${bookName} restocked. New stock: ${book.stock}`);
}
//function calling
checkStock("Atomic Habits"); // available
checkStock("The Alchemist"); // out of stock

restockBook("The Alchemist", 5);

checkStock("The Alchemist"); // now available


//exercise-6-difference between Object.keys() and Object.entries()
//Object.keys() gives you just keys as an array whereas
//Object.entries() gives you both key and value pairs
console.log(Object.entries(store));

//7. to check if an object has a certain property
console.log(Object.hasOwn(store.books, "Atomic Habits"));
//from exercise-4
console.log(Object.hasOwn(student, "name"));
//from exercise-3
console.log(Object.hasOwn(person.company.location, "zip"));
