function filterWordByLetter(words) {
    return words.filter(word => word.toLowerCase().includes("a"));
}

const words = ["cat", "dog", "elephant", "tiger", "lion"];
console.log(filterWordByLetter(words))