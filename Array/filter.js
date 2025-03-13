// filtering even numbers
console.log('filtering even..........');
let nums = [1, 2, 3, 4, 5, 6, 7, 8];

let evens = nums.filter(n => n % 2 === 0);
console.log(nums);
console.log(evens);
let odds = nums.filter(n => n % 2 !== 0);
console.log(odds);

// filtering array of objects age >= 30
console.log('filtering by age...............')

let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

let age = users.filter(user => user.age >= 30);
console.log(age)


// filtering string (words includes 'a')
console.log('filtering string..............');
let words = ["apple", "banana", "cherry", "date"];
let wordsA = words.filter(word => word.includes('a'));

console.log(words)
console.log(wordsA)


// removing falsy values (truthy filter)
console.log('truthy values.......................');
let values = [0, 'hello', '', null, 42, 'javaScript'];
let truthyValues = values.filter(value => value);
console.log(values)
console.log(truthyValues)