function convertToArrayOfKeyValuePairs(objects) {
    let toArray = objects.map(object => [object.name, object.age]);
    return toArray;
};


const objArray = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 }
];

console.log(convertToArrayOfKeyValuePairs(objArray))