//objects
{
} //empty object

//user variable type is object
let user = {
  name: "scarlet",
  age: 40,
  "is admin": true, //give double quote when the property if ther is a space or special character
};
console.log(user.name);

user.isSenior = false; //ADDING more property to user....boolean
user["movie lover"] = true;

console.log(user);
console.log(user["is admin"]); //SUBSCRIPT sign to take out two word property

user.age = 35; //MODIFIED value.....changing value of age
console.log(user);

delete user["movie lover"]; //DELETE property [movie lover]
console.log(user);

const someKey = "age";
console.log(user.age);
console.log(user[someKey]); //someKey is the variable which has the value age.. so need SUBSCRIPT...no using dot '.'


// --- Part 1: Dynamic key (computed property) ---

let favoriteFruit = "apple";

let fruitRatings = {
  [favoriteFruit]: 5,
};

console.log(fruitRatings); // { apple: 5 }


// --- Part 2: Constructor function ---

function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("Alice", 22);
const user2 = new User("Bob", 25);

console.log(user1);
console.log(user2);

console.log(user1 instanceof User); // true



//Object Constructor
const person = new Object();
person.name = "yamaha";
person.age = 75;
console.log(person);

//Factory function
function createUser(name, age) {
  return {
    //returning object
    name, //name: name, this is called shorthand
    age, //age: age, ....whenever parameter and keyname are same. no need to expand.
    greet() {
      console.log(this.name);//to access name in object. 'this' keyword
    },
  };
}

const user1 = createUser("scarlet", 30);
console.log(user1);
const user2 = createUser("bob", 20);
console.log(user2);

user1.greet();
user2.greet();


//nested object
let profile = {
  name: "Rose",
  company: "Leapfrog",
  salary: 45000,
  message: function () {
    console.log(`${this.name} works at ${this.company}.`);
  },
  address: { //nested object--- address object inside profile object
    city: "ktm",
    pin: 9558,
    state: "bagmati",
    country: "nepal",
    greeting: function () {
      console.log("welcome to nepal");
    },
  },
};
console.log(profile.name);//Rose
console.log(profile.company);//Leapfrog
profile.message();//Rose works ar Leapfrog. using 'this' method
console.log(profile.address.pin);//9558
profile.address.greeting();//welcome to nepal

console.log("salary" in profile); // IN operator....to check if the property exists ...does salary exist in profile?
console.log(profile.salary);


//Object keys method
for (let key in profile) {
  console.log(key);
  console.log(profile[key])
}
console.log(Object.keys(profile));


let fruit = { name: "banana" }; //Memory location-1 ..2 different memory places even though looks like the same string
let secondFruit = { name: "banana" }; //Memory location-2 ..2 different memory places

console.log(fruit == secondFruit); //false
console.log(fruit === secondFruit);//false

fruit = secondFruit; //true ..pointing to the same refrence ...memory
console.log(fruit == secondFruit); //assignment
console.log(fruit === secondFruit);
