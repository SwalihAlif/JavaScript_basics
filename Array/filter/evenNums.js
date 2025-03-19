function filterEvens(arr) {
    return arr.filter(num => num % 2 == 0);
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(filterEvens(arr1))