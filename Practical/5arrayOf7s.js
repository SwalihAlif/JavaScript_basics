function arrayOf7s(n, limit) {
    let multi = []
    for (let i = 1; i <= limit; i++) {
        if (i % n == 0) {
            multi.push(i)
        }
    }
    return multi
}

n = 7
l = 100
console.log(arrayOf7s(n, l))