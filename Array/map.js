// extracting object properties
console.log('extracting values from an array of objects')

let users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
]

let names = users.map(user => user.name);
console.log(names)

let ages = users.map(user => user.age);
console.log(ages)


// converting string using map()

let words = ['hello', 'world', 'javascript'];

let upperCase = words.map(word => word.toUpperCase());

console.log(words)
console.log(upperCase)

// adding index inside map()
let nums = [10, 20, 30, 40];
let mappedNums = nums.map((num, i) => `Index ${i}: ${num}`);
console.log(mappedNums);

//Q1 triple each value
console.log('tripled............')
let numbers = [5, 10, 15];
let triple = numbers.map(n => n * 3);
console.log(triple)

//Q2 convert to uppercase
console.log('covert to upper...............')
let letters = ["a", "b", "c"];
let toUp = letters.map(u => u.toUpperCase())
console.log(toUp)

//Q3 create an array of ages with arr of obj
console.log('arr of obj................');
let arrObj = [
    {name: 'a', age: 20},
    {name: 'b', age: 30},
    {name: 'c', age: 35}
]
let arrAge = arrObj.map(arr => arr.age);
console.log(arrAge)