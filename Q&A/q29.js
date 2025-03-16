function myFilter(myArray, callback) {
    total = 0
    for (i = 0; i < myArray.length; i++) {
        total += myArray[i]
    }
    return callback(total);
}
function isSumEven(total) {
    console.log("Total is: ", total)
    return total % 2 === 0;
}

let arr = [1, 2, 3, 4, 5, 1]
console.log(myFilter(arr, isSumEven))
