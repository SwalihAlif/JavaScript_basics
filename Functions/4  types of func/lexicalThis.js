//Arrow function with lexical this
const obj = {
    name: "Swalih",
    fn: function() { 
        setTimeout(() => {
            console.log(this.name); 
        }, 1000);
    }
};
obj.fn(); 


//Regular function without lexical this
const obj2 = {
    name: "Swalih",
    fn2: function() { 
        setTimeout(function() {
            console.log(this.name); 
        }, 1000);
    }
};
obj2.fn2(); 

// ### **What is Lexical `this`?**  

// Lexical `this` means that the value of `this` inside a function is determined by **where the function is defined**, not how it is called. In simpler terms, **an arrow function does not have its own `this`**; instead, it **inherits `this` from the surrounding scope** where it was created.  

// ---

// ### **Normal Functions vs. Arrow Functions (`this` behavior)**  

// ### **1️⃣ Regular Function (`function`) – `this` depends on how it's called**
// ```js
// const obj = {
//     name: "Swalih",
//     regularFunction: function() {
//         console.log(this.name); // ✅ "Swalih"
//     }
// };
// obj.regularFunction(); // "Swalih"
// ```
// 💡 **Why does this work?**  
// - Here, `this` refers to `obj` because `regularFunction` is called as `obj.regularFunction()`.  
// - In regular functions, `this` is **dynamic** and depends on how the function is executed.

// ---

// ### **2️⃣ Regular Function (`function`) – `this` gets lost**
// ```js
// const obj = {
//     name: "Swalih",
//     regularFunction: function() {
//         setTimeout(function() {
//             console.log(this.name); // ❌ undefined
//         }, 1000);
//     }
// };
// obj.regularFunction();
// ```
// 💡 **Why is `this` undefined here?**  
// - The `setTimeout` callback is a **regular function**, so `this` is no longer referring to `obj`.  
// - Instead, it refers to the **global object (`window` in browsers, `global` in Node.js)**.  
// - In **strict mode**, `this` inside `setTimeout` is `undefined`.  

// 🛠 **Fix using `.bind()` or storing `this`:**
// ```js
// const obj = {
//     name: "Swalih",
//     regularFunction: function() {
//         const self = this;  // Store `this` in a variable
//         setTimeout(function() {
//             console.log(self.name); // ✅ "Swalih"
//         }, 1000);
//     }
// };
// obj.regularFunction();
// ```
// or  
// ```js
// const obj = {
//     name: "Swalih",
//     regularFunction: function() {
//         setTimeout(function() {
//             console.log(this.name);
//         }.bind(this), 1000); // ✅ "Swalih" (explicitly bind `this`)
//     }
// };
// obj.regularFunction();
// ```

// ---

// ### **3️⃣ Arrow Function – Lexical `this` (Always Inherits)**
// ```js
// const obj = {
//     name: "Swalih",
//     arrowFunction: function() {
//         setTimeout(() => {
//             console.log(this.name); // ✅ "Swalih"
//         }, 1000);
//     }
// };
// obj.arrowFunction();
// ```
// 💡 **Why does this work?**  
// - The arrow function `() => {}` **does not have its own `this`**.  
// - It **inherits `this` from its surrounding function**, which is `obj.arrowFunction()`.  

// ✔ **No need for `.bind()` or `self = this` tricks!**  

// ---

// ### **🚀 Why is Lexical `this` Useful in React Hooks (`useRef`)?**
// 1. **Predictable Behavior** → Arrow functions always take `this` from their surrounding scope, preventing unwanted changes.
// 2. **Works Well in Callbacks** → No need for `.bind(this)` when using `useRef` inside event handlers.
// 3. **Shorter & Cleaner Code** → Avoids storing `this` manually (`const self = this`).

// ✅ **Best practice in React: Use arrow functions when dealing with `useRef`, `useState`, or event handlers.**
