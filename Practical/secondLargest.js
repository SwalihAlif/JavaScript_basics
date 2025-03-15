let arr = [1, 2, 3, 4, 5]

let secondOdd = arr.reduce((acc, num) => {
    if (num % 2 !== 0) {
        acc.push(num);
        acc.sort((a, b) => b - a);
    }
    return acc;
}, [])[1]

console.log(secondOdd)