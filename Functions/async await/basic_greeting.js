async function greet(name) {
    console.log("Hello, " + name);
}

async function sayGoodbye() {
    console.log("Goodbye!");
}

async function main() {
    await greet("Alice")
    await sayGoodbye();
}

main(); 