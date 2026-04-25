//Static Methods
const target = { p: 1, a: 2 }; //Copy properties from source → into target
const source = { a: 3, b: 5 };

const returnObj = Object.assign(target, source); //object.assign MODIFIES the target object
console.log(returnObj); //{p: 1, a: 3, b: 5}

const obj = { name: "scarlet" };
const obj2 = Object.assign({}, obj);
console.log(obj2);
console.log(obj === obj2); //Objects are compared by reference, not by value..false

//Object assign()
const a = { x: 1 };
const b = { x: 2 };
const c = { x: 3 }; //last one wins

const result = Object.assign(a, b, c); //Object.assign(target, source1, source2...)
console.log(result); //3

//shadow copy vs deep copy

//Shallow copy = copy outer layer, share inner objects
const obj3 = {
  a: 1,
  b: { c: 2 },
};
const obj4 = Object.assign({}, obj3);
console.log(obj4);

obj4.b.c = 3;
obj4.a = 100;

console.log(obj4.a); //100
console.log(obj3.a); //1

console.log(obj4.b.c); //3
console.log(obj3.b.c); //3

//deep cloning
//Deep copy → copy notebook AND all pages separately
const obj5 = structuredClone(obj3);

obj5.a = 300;
obj5.b.c = 30;

console.log(obj5.a); //300
console.log(obj3.a); //1

console.log(obj5.b.c); //30
console.log(obj3.b.c); //3


//convert Object to Array....
const myObj = {
  a: "scarlet",
  b: 32,
};

const myArray = Object.entries(myObj);// converting objects to array
console.log(myArray);

// (array to object)
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const objEntries = Object.fromEntries(entries);// converting array to objects
console.log(objEntries);

//OBJECTS BECOME READ_ONLY
//freeze (immutability with freeze)
const emp = {
  sal: 1000,
};
Object.freeze(emp);
emp.sal = 200;// will not change anything inside the object emp
console.log(emp); // will not change
console.log(Object.isFrozen(emp)); //to check if the object is frozen

//PARTIALLY Locked
//seal (immutability with seal)
const dept = {
  name: "finance",
};
Object.seal(dept);
dept.address = "ktm";
delete dept.name;

dept.name = "patan"; //can change value.. but cannot delete property, cannot create property
console.log(dept);

console.log(Object.hasOwn(dept, "address")); // address not added



//Object destructuring..
const student = {
  name: "John Williamson",
  age: 9,
  std: 3,
  subjects: ["Maths", "English", "EVS"],//array (non-primitive)
  parents: {
    father: "Brown Williamson",
    mother: "Sophia",
    email: "john-parents@abcde.com",
  },
  address: { //Object (non-primitive)
    street: "65/2, brooklyn road",
    city: "Carterton",
    country: "New Zealand",
    zip: 5791,
  },
};

const {name, age, meal = 'bread'} = student;
const city = student.address.city;
console.log(name, city, age, meal);

console.log(student);

const {subjects, numberOfSubjects = subjects.length} = student;
console.log(numberOfSubjects);

//Aliases
const {std: stamdard} = student;
console.log(std);