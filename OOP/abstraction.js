class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    // Public method that provides a simplified way to interact with the car
    startCar() {
        this._startIgnition();
        console.log(`${this.make} ${this.model} is starting.`);
        console.log("=======")
        this.#privateMethod()
    }

    // Private method, hidden from the outside and used only internally
    _startIgnition() {
        console.log('Ignition started');
    }
    #privateMethod(){
        console.log("Is this a private method?")
    }
}

const myCar = new Car('Toyota', 'Corolla');
myCar.startCar(); // Output: Ignition started
                  //         Toyota Corolla is starting

// The following line will not be discouraged as _startIgnition is internal:
myCar._startIgnition(); // Not meant to be accessed directly

// SyntaxError: Private field '#privateMethod' must be declared in an enclosing class
// myCar.#privateMethod();
