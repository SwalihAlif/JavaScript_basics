function calculator(num1, num2, operation) {
    return operation(num1, num2)

}

function multiply(num1, num2) {
    return num1 * num2;
}

function addition(num1, num2) {
    return num1 + num2;
}

let multiple = calculator(10, 5, multiply)
console.log(multiple)

let add = calculator(10, 6, addition);
console.log(add)