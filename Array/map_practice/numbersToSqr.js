function numbersToSquares(arr) {
    let squares = arr.map(num => num ** 2);
    return squares;
}

const numbers = [2, 4, 6, 8];
console.log(numbersToSquares(numbers));