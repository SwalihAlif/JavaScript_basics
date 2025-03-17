function toUpper(str) {
    let upper = str.map(char => char.toUpperCase());
    return upper
}

let strArr = ["hello", "world", "javascript"];
console.log(toUpper(strArr))