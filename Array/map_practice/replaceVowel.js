function replaceVowels(arr) {
    let replaced = arr.map(word => word.replace(/[aeiou]/gi, '*'));
    return replaced
}

const words = ['hello', 'world'];
console.log(replaceVowels(words));