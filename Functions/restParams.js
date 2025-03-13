function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }
    return total;
}

n1 =  [1, 2, 3, 4, 5]
n2 = [10, 20, 30, 40]
n3 = [100, 200, 300, 400]


console.log(sum(...n1,...n2,...n3))
