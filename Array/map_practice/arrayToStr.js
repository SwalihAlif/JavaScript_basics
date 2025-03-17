function arrayNumToString(arr) {
    let string = arr.map(i => i.toString());
    return string;
}

const nums = [1, 2, 3, 4];
console.log(arrayNumToString(nums));