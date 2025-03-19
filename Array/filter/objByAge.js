function filterObjByAge(people) {
    return people.filter(person => person.age > 18);
}

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 15 }
];

console.log(filterObjByAge(people))