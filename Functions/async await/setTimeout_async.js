function greet(name) {
    console.log("Wait for 2 seconds...")
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hello, " + name);
            resolve();
        }, 2000);
    })
}

async function main() {
    await greet("Bob");
    await console.log("Goodbye!!!");
}

main()