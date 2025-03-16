function reverseString(string) {
    try {
        let reversed = string.split("").reverse().join("");
        return reversed
    } catch (error) {
        console.log("An error occured: ", error.message);
        return null
    } finally {
        console.log("Type of string is: ", typeof(string))
    }
}

function main() {
    let string = prompt("Enter a string to reverse: ");
    let reversedStr = reverseString(string)
    console.log(reversedStr)
}

main();