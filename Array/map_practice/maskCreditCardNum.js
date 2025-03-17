function maskCreditCardNumbers(numbers) {
    let masked = numbers.map(number => "*************" + number.slice(-4));
    return masked;
}

const numbers = ["147938789749827897234", "8727348782078483238", "724897897263792897"];
console.log(maskCreditCardNumbers(numbers));