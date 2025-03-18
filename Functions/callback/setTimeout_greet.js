function greet(name, callback) {
    console.log("Wait for 2 minutes...")
    setTimeout(() => {
        console.log("Hello, " + name);
        callback;
    }, 2000);
}

function sayGoodbye() {
    console.log("Goodbye!")
}

greet("Bob", sayGoodbye)