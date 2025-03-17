function myDisplayer(someting) {
    console.log(someting)
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum)
}

myCalculator(9, 10, myDisplayer)