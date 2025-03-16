function checkHeight(h) {
    try {
        
        if (isNaN(h)) {
            throw new Error("NotANumberError");
        } else if (h < 30) {
            throw new Error("TinyHeightError");
        } else if (h > 300) {
            throw new Error("HugeHeightError");
        } else {
            return "Height is valid, " + h;
        } 
    } catch (error) {
        return "An error occurred: " + error.message
    } finally {
        console.log("Execution completed.")
    }
}

let height = Number(prompt("Enter your height: "));
console.log(checkHeight(height));
