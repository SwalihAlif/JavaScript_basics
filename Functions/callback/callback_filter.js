function evenNums(num) {
    return num % 2 == 0;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evens = nums.filter(evenNums);

console.log(nums);
console.log(evens);