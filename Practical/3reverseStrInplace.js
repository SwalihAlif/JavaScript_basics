function reverseString(string) {

    let arr = string.split("")
    let left = 0,  right = arr.length - 1

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr.join("")
}

string = "hello";
console.log(reverseString(string))