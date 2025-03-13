// forEach()
console.log('forEach()')

let arr = [10, 20, 30]

arr.forEach(num => console.log(num ** 2))


arr.forEach(i => console.log(i * 2))

arr.forEach(v => console.log(v - v))

// map()
console.log('map()')

doubled = arr.map(num => num * 2)
console.log(doubled)

square = arr.map(i => i**2);
console.log(`square: ${square}`)

// for loop

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]+3)
}