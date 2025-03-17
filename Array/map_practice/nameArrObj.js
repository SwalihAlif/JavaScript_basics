// extract names in array of objects
function extarctNameOnly(objects) {
    let names = objects.map(obj => obj.name)
    return names
}

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];

console.log(extarctNameOnly(users))

