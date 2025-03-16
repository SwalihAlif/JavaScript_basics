function reverseString(string) {
    reverse = ""
    for (let i = string.length-1; i >= 0; i--) {
        reverse += string[i];
    }
    return reverse
}

str1 = 'hello'
str2 = 'olleh'

console.log(reverseString(str1))
console.log(reverseString(str2))