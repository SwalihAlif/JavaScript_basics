// reduce() returns a single value eg sum, product, concatination, or an object
console.log('find sum of arr............');
let nums = [1, 2, 3, 4, 5];

let sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);

// multiply all numbers
console.log('multiply............');

let numbers = [2, 3, 4];
let product = numbers.reduce((acc, n) => acc * n, 1);
console.log(product)