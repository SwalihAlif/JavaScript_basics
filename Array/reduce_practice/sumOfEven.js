function sumOfEven(arr) {
    return arr.reduce((acc, num) => num % 2 === 0 ? acc + num : acc, 0)
}

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [10, 20, 30, 40]
let arr3 = [88, 2, 99, 1, 101, 9]

console.log(sumOfEven(arr1))
console.log(sumOfEven(arr2))
console.log(sumOfEven(arr3))