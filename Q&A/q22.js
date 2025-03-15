function getArray() {
    let size = Number(prompt("Enter the size of array: "));
    let arr1 = []
    let arr2 = []
    console.log("Enter the values for array1: ")
    for (let i = 0; i < size; i++) {
        arr1.push(prompt(`Enter the values for row ${i+1}: `).split(",").map(Number));
    }
    console.log("Enter the values for array2: ");
    for (let i = 0; i < size; i++) {
        arr2.push(prompt(`Enter the values for row ${i+1}: `).split(",").map(Number));
    }
    
    return {size, arr1, arr2}
    
}
function addArray(size, arr1, arr2) {
    let added = []
    let row = size
    let col = arr1[0].length
    
    for (let i = 0; i < row; i++) {
        let rowSum = []
        for (let j = 0; j < col; j++) {
            rowSum.push(arr1[i][j] + arr2[i][j])
        }
        added.push(rowSum)
    }
    return added
    
}
function displayArray(added) {
    console.log("Resultant Array: ");
    for (let row of added) {
        console.log(row.join(" "))
    }
    
}
function main() {
    let {size, arr1, arr2} = getArray()
    let added = addArray(size, arr1, arr2);
    displayArray(added);
}

main();


//QUESTION

// 22. Write a program to add the values of two 2D arrays
// Program should contains 3 functions including the main function
// main()
// Call function getArray()
// Call function addArray()
// Call function displayArray()
// 		getArray()
// Get values to the array
// 		getArray()
// Add array 1 and array 2
// 		displayArray()
// Display the array values

// Eg:
// Enter the size of array
// 2
// Enter the values of array 1
// 1	2
// 3	4
// Enter the values of array 2
// 5	6
// 7	8
// Output:
// Sum of array 1 and array 2:
// 6	8
// 10	12