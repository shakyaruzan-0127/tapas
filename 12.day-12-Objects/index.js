//objects
{
} //empty object
//user variable type is object
let user = {
  name: "scarlet",
  age: 40,
  "is admin": true,//give double quote when the property if ther is a space or special character
};
console.log(user.name);

user.isSenior = false; //ADDING more property to user....boolean
user["movie lover"] = true;

console.log(user);
console.log(user["is admin"]);//SUBSCRIPT sign to take out two word property

user.age = 35; //MODIFIED value.....changing value of age
console.log(user);

delete user["movie lover"];//DELETE property [movie lover]
console.log(user);

//delete user.age;
//console.log(user);

const someKey = "age";
console.log(user.age);
console.log(user[someKey]);//someKey is the variable which has the value age.. so need SUBSCRIPT...no using dot '.'

let car = null;//prompt("which is your fav car");
let favCar = {
  [car]: 5,
};
console.log(favCar);
//Constructor function
function Car(name, model) {
  this.name = name;
  this.model = model;
}

const japaneseCar1 = new Car("nissan", "skyline");
const japaneseCar2 = new Car("toyota", "supra");
console.log(japaneseCar1);
console.log(japaneseCar2);
console.log(japaneseCar1 instanceof Car);

const person = new Object();
person.name = "yamaha";
person.age = 75;
console.log(person);

function createUser(name, age) {
  return {
    name, //name: name,
    age, //age: age
    greet() {
      console.log(this.name);
    },
  };
}

const user1 = createUser("scarlet", 30);
console.log(user1);
const user2 = createUser("bob", 20);
console.log(user2);
user1.greet();
user2.greet();

let profile = {
  name: "scarlet",
  company: "leaf",
  salary: 45000,
  message: function () {
    console.log(`${this.name} works at ${this.company}`);
  },
  address: {
    city: "ktm",
    pin: 9558,
    state: "bagmati",
    country: "nepal",
    greeting: function () {
      console.log("welcome to nepal");
    },
  },
};
console.log(profile.name);
console.log(profile.company);
profile.message();
console.log(profile.address.pin);

console.log("salary" in profile); // to check if the property exists ...does salary exist in profile
console.log(profile.salary);

let fruit = { name: "banana" }; //2 different memory places
let fruit2 = { name: "banana" }; //2 different memory places

console.log(fruit == fruit2); //false
console.log(fruit === fruit2);

fruit = fruit2; //true ..pointing to the same refrence ...memory
console.log(fruit == fruit2); //assignment
console.log(fruit === fruit2);
