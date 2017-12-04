let names = [
    {name: 'Bob', department: 'sales', title: 'sales manager'},
    {name: 'Tina', department: 'finance', title: 'director of finance'},
    {name: 'Randy', department: 'IT', title: 'hardware guy'},
    {name: 'Glenda', department: 'C-suite', title: 'CEO'},
    {name: 'Barb', department: 'cool kids', title: 'sales manager'}
];


// .filter will run through the names array and grab those which have the title descrip of "salesmanager"
let salesMgrs = names.filter((emp) => {
    return emp.title === 'sales manager';
})

console.log('sales Mangers', salesMgrs);
// // loop through the array of objects
// // select the value of the object using 'array[i].value'
// // use the weird tick things
// // enclose the target in ${array[i].value}
// for (let i = 0; i < names.length; i++) {
//     console.log(`${names[i].name}'s job title is ${names[i].title}`);
// }


// ES6 allows you to assign variables to an object just by typing the name of the variable inside the object.
let name = "Bob";
let job = () => "I do the things";
let number = 4;

let myCollection = {
    name,
    job,
    number
};

let myArr = ["Fred",true,5,"This array is a mess"];

// .forEach runs through the array 
myArr.forEach((thing) =>{
    console.log(`${thing} is in my array`);
});

// .map() allows you to create a new array using the values of an old array without affect the old array
nums = [1,2,3,4,5,6,7,8,9]
let newArr = nums.map(thing => {
    return thing * 2;
})

console.log("newArr", newArr);


// .filter() allows you to return only the items selected by filter
let newerArr = nums.filter ((thing) => {
    // this will filter out only the even numbers
    return thing % 2 === 0;
})

console.log('newerArr', newerArr);


let total = nums.reduce ((thing1, thing2) => thing1 + thing2);
console.log("total", total);
