function greet(name) {
    return new Promise((resolve) => {
        console.log("Hello, " + name);
        resolve();
    });
}

greet("Alice").then(() => console.log("Goodbye!")); 