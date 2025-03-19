function filterWordsof5(words) {
    return words.filter(word => word.length > 5);
}

const words = ["apple", "banana", "grape", "strawberry", "kiwi", "mango"];
console.log(filterWordsof5(words))