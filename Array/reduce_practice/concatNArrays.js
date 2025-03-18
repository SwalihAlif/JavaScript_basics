function concatNestedArrays(NArray) {
    return NArray.reduce((acc, arr) => acc.concat(arr), []);
}

const nestedArray = [[1, 2], [3, 4], [5, 6]];

console.log(nestedArray)
console.log(concatNestedArrays(nestedArray))