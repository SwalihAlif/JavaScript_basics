function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius.map(c => (c * 9/5) + 32)
    return fahrenheit
}

const celsius = [0, 10, 20, 30];
console.log(celsiusToFahrenheit(celsius));