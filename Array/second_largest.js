function secondLargest(arr) {
    let largest = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] > largest) {
            second = largest;
            largest = arr[i]
        } else if (arr[i] > second && second !== largest) {
            second = arr[i]
            
        }
    }
    return second
}

let arr1 = [1, 2, 3, 4, 5]
console.log(secondLargest(arr1))