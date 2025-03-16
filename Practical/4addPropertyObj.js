let obj = {name: "Alice"}
console.log(obj)

obj.age = 25;

console.log(obj)

obj["place"] = "New York";

console.log(obj)

console.log("-----------------------------------")

function addProperty(obj, key, value) {
    obj[key] = value;
}
let person = {}

addProperty(person, "age", 20);
addProperty(person, "name", "Bob");
console.log(person)
console.log("-----------------------------------")
delete obj.age;
console.log(obj)
delete person.name;
console.log(person)