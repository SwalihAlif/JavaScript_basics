function greet(name) {
    console.log("wait for 2 seconds...")
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hello, " + name);
            resolve();
        }, 2000);
    })
}

greet("Bob").then(() => console.log("Goodbye!!"))