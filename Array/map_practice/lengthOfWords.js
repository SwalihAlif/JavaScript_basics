function lenOfWords(arr) {
    lenArray = arr.map(word => word.length)
    return lenArray
}

const words = ["apple", "banana", "cherry"];
console.log(lenOfWords(words));