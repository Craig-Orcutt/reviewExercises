// let names = [
//     {name: 'Bob', department: 'sales', title: 'sales manager'},
//     {name: 'Tina', department: 'finance', title: 'director of finance'},
//     {name: 'Randy', department: 'IT', title: 'hardware guy'},
//     {name: 'Glenda', department: 'C-suite', title: 'CEO'},
//     {name: 'Barb', department: 'cool kids', title: 'sales manager'}
// ];


// // .filter will run through the names array and grab those which have the title descrip of "salesmanager"
// let salesMgrs = names.filter((emp) => {
//     return emp.title === 'sales manager';
// })

// console.log('sales Mangers', salesMgrs);
// // // loop through the array of objects
// // // select the value of the object using 'array[i].value'
// // // use the weird tick things
// // // enclose the target in ${array[i].value}
// // for (let i = 0; i < names.length; i++) {
// //     console.log(`${names[i].name}'s job title is ${names[i].title}`);
// // }


// // ES6 allows you to assign variables to an object just by typing the name of the variable inside the object.
// let name = "Bob";
// let job = () => "I do the things";
// let number = 4;

// let myCollection = {
//     name,
//     job,
//     number
// };

// let myArr = ["Fred",true,5,"This array is a mess"];

// // .forEach runs through the array 
// myArr.forEach((thing) =>{
//     console.log(`${thing} is in my array`);
// });

// // .map() allows you to create a new array using the values of an old array without affect the old array
// nums = [1,2,3,4,5,6,7,8,9]
// let newArr = nums.map(thing => {
//     return thing * 2;
// })

// console.log("newArr", newArr);


// // .filter() allows you to return only the items selected by filter
// let newerArr = nums.filter ((thing) => {
//     // this will filter out only the even numbers
//     return thing % 2 === 0;
// })

// console.log('newerArr', newerArr);


// let total = nums.reduce ((thing1, thing2) => thing1 + thing2);
// console.log("total", total);


// Make an object with at least three properties. One property should be a method
// Create a new object that links to the first object.
// Give the new object two properties of its own
// In the console, call .hasOwnProperty() on the new object, passing in an inherited property as an argument. Does it return true or false?
// Do it again, but this time pass in one of the properties you added to the new object. True or false?

// var Foo = {
//     Foo: function (who) {
//         this.me = who;
//         return this;
//     },
//     identify: function () {
//         return "I am " + this.me;
//     }
// };

// var Bar = Object.create(Foo);

// Bar.Bar = function (who) {
//     // "constructors" (aka "initializers") are now in the `[[Prototype]]` chain,
//     // so `this.Foo(..)` works easily w/o any problems of relative-polymorphism
//     // or .call(this,..) awkwardness of the implicit "mixin" pattern
//     this.Foo("Bar:" + who);
//     return this;
// };

// Bar.speak = function () {
//     alert("Hello, " + this.identify() + ".");
// };

// var b1 = Object.create(Bar).Bar("b1");
// var b2 = Object.create(Bar).Bar("b2");

// b1.speak(); // alerts: "Hello, I am Bar:b1."
// b2.speak(); // alerts: "Hello, I am Bar:b2."

// // some type introspection
// Bar.isPrototypeOf(b1); // true
// Bar.isPrototypeOf(b2); // true
// Foo.isPrototypeOf(b1); // true
// Foo.isPrototypeOf(b2); // true
// Foo.isPrototypeOf(Bar); // true
// Object.getPrototypeOf(b1) === Bar; // true
// Object.getPrototypeOf(b2) === Bar; // true
// Object.getPrototypeOf(Bar) === Foo; // true

// Loop over every item in this array [45, “I”, true, null, “am”, 3.56, “a”, undefined, { catchphrase: “Oh hai, Mark”}, “JS”, “rockstar”]  and return a new array that contains only strings. and log out the result.

let arr420 = [45, 'I', true, null, 'am', 3.56, 'a', undefined, { catchphrase: 'Oh hai, Mark'}, 'JS', 'rockstar'].filter( (item) => {
    return typeof(item) === "string";
})

console.log('string array', arr420);
