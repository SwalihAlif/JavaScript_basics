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