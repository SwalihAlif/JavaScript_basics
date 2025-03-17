function addTenToEachElem(arr) {
    let addedArray = arr.map(elem => elem + 10);
    return addedArray;
}

const arr = [5, 10, 15, 20];
console.log(addTenToEachElem(arr));


//15 - QUESTIONs



// ## **🟢 Beginner Level**
// 1️⃣ **Double each number in an array**
// ```javascript
// const numbers = [1, 2, 3, 4, 5];
// // Expected Output: [2, 4, 6, 8, 10]
// ```

// 2️⃣ **Convert an array of strings to uppercase**
// ```javascript
// const words = ["hello", "world", "javascript"];
// // Expected Output: ["HELLO", "WORLD", "JAVASCRIPT"]
// ```

// 3️⃣ **Extract names from an array of objects**
// ```javascript
// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 22 }
// ];
// // Expected Output: ["Alice", "Bob", "Charlie"]
// ```

// 4️⃣ **Convert temperatures from Celsius to Fahrenheit**
// ```javascript
// const celsius = [0, 10, 20, 30];
// // Formula: F = (C * 9/5) + 32
// // Expected Output: [32, 50, 68, 86]
// ```

// 5️⃣ **Convert an array of numbers to strings**
// ```javascript
// const nums = [1, 2, 3, 4];
// // Expected Output: ["1", "2", "3", "4"]
// ```

// ---

// ## **🟡 Intermediate Level**
// 6️⃣ **Add 10 to each element in an array**
// ```javascript
// const arr = [5, 10, 15, 20];
// // Expected Output: [15, 20, 25, 30]
// ```

// 7️⃣ **Find the length of each word in an array**
// ```javascript
// const words = ["apple", "banana", "cherry"];
// // Expected Output: [5, 6, 6]
// ```

// 8️⃣ **Extract full names from an array of objects**
// ```javascript
// const people = [
//     { firstName: "John", lastName: "Doe" },
//     { firstName: "Jane", lastName: "Smith" }
// ];
// // Expected Output: ["John Doe", "Jane Smith"]
// ```

// 9️⃣ **Replace all vowels in a string array with `*`**
// ```javascript
// const words = ["hello", "world"];
// // Expected Output: ["h*ll*", "w*rld"]
// ```

// 🔟 **Format numbers to currency strings**
// ```javascript
// const prices = [10, 25, 50];
// // Expected Output: ["$10.00", "$25.00", "$50.00"]
// ```

// ---

// ## **🔴 Advanced Level**
// 1️⃣1️⃣ **Convert an array of numbers to their squares**
// ```javascript
// const numbers = [2, 4, 6, 8];
// // Expected Output: [4, 16, 36, 64]
// ```

// 1️⃣2️⃣ **Convert an array of objects to an array of key-value pairs**
// ```javascript
// const objArray = [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 30 }
// ];
// // Expected Output: [["John", 25], ["Jane", 30]]
// ```

// 1️⃣3️⃣ **Check if numbers in an array are even or odd**
// ```javascript
// const nums = [1, 2, 3, 4, 5];
// // Expected Output: ["Odd", "Even", "Odd", "Even", "Odd"]
// ```

// 1️⃣4️⃣ **Convert an array of dates to readable strings**
// ```javascript
// const dates = [new Date(2023, 0, 1), new Date(2024, 0, 1)];
// // Expected Output: ["Jan 1, 2023", "Jan 1, 2024"]
// ```

// 1️⃣5️⃣ **Mask credit card numbers (show only last 4 digits)**
// ```javascript
// const cardNumbers = ["1234567812345678", "9876543210987654"];
// // Expected Output: ["************5678", "************7654"]
// ```
