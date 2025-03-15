function frequency(arr) {
    return arr.reduce((freq, num) => {
        freq[num] = (freq[num] || 0) + 1;
        return freq;
    }, {})
}

arr = [1, 3, 2, 4, 3, 2, 1, 4, 5, 6, 8, 7]

console.log(frequency(arr))