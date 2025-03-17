function doubleElm(arr) {
    let doubled = arr.map(num => num * 2);
    return doubled
}

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [10, 20, 30, 40, 50]

console.log(doubleElm(arr1))
console.log(doubleElm(arr2))