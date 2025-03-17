// extract full name from an array of objects

// function extractFullName(objects) {
//     fullName = objects.map(object => object.firstName + " " + object.lastName);
//     return fullName;
// }
function extractFullName(objects) {
    let fullName = objects.map(object => `${object.firstName} ${object.lastName}`);
    return fullName;
}

const people = [
    {firstName: "John", lastName: "Doe"},
    {firstName: "Jane", lastName: "Smith"}
];

console.log(extractFullName(people));