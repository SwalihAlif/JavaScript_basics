function countWords(words) {
    return words.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
}

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

console.log(countWords(words))