function frequency(arr) {
    freq = {};
    
    for (i = 0; i < arr.length; i++) {
        if (arr[i] in freq) {
            freq[arr[i]] ++;
        } else {
            freq[arr[i]] = 1;
        }
    }
    return freq
}

arr = [1, 2, 3, 2, 3, 1, 4, 5, 4, 2, 1]

console.log(frequency(arr))