let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let arr3  = arr1.concat(arr2)
let arr4 = [...arr1, ...arr2]

console.log(arr3)
console.log(arr4)

arr3.push.apply(arr3, arr4)
console.log(arr3)