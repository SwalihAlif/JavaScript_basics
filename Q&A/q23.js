class TwoDSum {
    constructor() {
        this.array = []
        this.size = 0
    }
    getArray() {
        this.size = Number(prompt("Enter the size of the array: "));
        for (let i = 0; i < this.size; i++) {
            
        let row = prompt(`Enter the values for row ${i+1}: `).split(",").map(Number);
        this.array.push(row);
        }
    }
    displayArray() {
        this.array.forEach(row => console.log(row.join(" ")));
    }
}
function main() {
    let arr1 = new twoDSum();
    arr1.getArray();
    arr1.displayArray();
}
main();


// Question
// 23. Write an object oriented program to store and display the values of a 2D array
// Program should contains 3 functions including the main function
// main()
// Declare an array
// Call function getArray()
// Call function displayArray()
// 		getArray()
// Get values to the array
// 		displayArray()
// Display the array values
// Eg:
// Enter the size of array
// 3
// Enter the array values
// 1	2	3
// 4	5	6
// 7	8	9
// Array elements are:
// 1	2	3
// 4	5	6
// 7	8	9