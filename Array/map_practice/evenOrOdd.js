function isEvenOrOdd(arr) {
    let evenOrOdd = arr.map(num => num % 2 === 0 ? "Even" : "Odd");
    return evenOrOdd;
}

const nums = [1, 2, 3, 4, 5];
console.log(isEvenOrOdd(nums))