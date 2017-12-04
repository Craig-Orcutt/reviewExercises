let names = [
    {name: 'Bob', department: 'sales', title: 'sales manager'},
    {name: 'Tina', department: 'finance', title: 'director of finance'},
    {name: 'Randy', department: 'IT', title: 'hardware guy'},
    {name: 'Glenda', department: 'C-suite', title: 'CEO'}
];
// loop through the array of objects
// select the value of the object using 'array[i].value'
// use the weird tick things
// enclose the target in ${array[i].value}
for (let i = 0; i < names.length; i++) {
    console.log(`${names[i].name}'s job title is ${names[i].title}`);
}