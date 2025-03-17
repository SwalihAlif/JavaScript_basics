function formatToCurrencyString(arr) {
    let prices = arr.map(price => `$${price.toFixed(2)}`);
    return prices
}

const prices = [10, 20, 30];
console.log(formatToCurrencyString(prices))