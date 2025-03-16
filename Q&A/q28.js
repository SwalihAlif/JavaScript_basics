class Vehicle {
    constructor (name, mileage, max_speed) {
        this.name = name;
        this.mileage = mileage;
        this.max_speed = max_speed;
    }
    
    displayf () {
        console.log(`Name: ${this.name}, Mileage: ${this.mileage}, Max Speed: ${this.max_speed}`)
    }
}

let car1 = new Vehicle("maruthi", 28, 100);
car1.displayf()


// old ES5 - constructor function with prototype
function Car(name, mileage, max_speed) {
    this.name = name;
    this.mileage = mileage;
    this.max_speed = max_speed;
}

Car.prototype.displayf = function() {
    console.log(`The details of car: ${this.name} with mileage of ${this.mileage} & max speed ${this.max_speed}`);
}

car1 = new Car("maruthi", 28, 100);
car1.displayf()
