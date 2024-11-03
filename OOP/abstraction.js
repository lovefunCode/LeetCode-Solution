class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    // Public method that provides a simplified way to interact with the car
    startCar() {
        this._startIgnition();
        console.log(`${this.make} ${this.model} is starting.`);
    }

    // Private method, hidden from the outside and used only internally
    _startIgnition() {
        console.log('Ignition started');
    }
}

const myCar = new Car('Toyota', 'Corolla');
myCar.startCar(); // Output: Ignition started
                  //         Toyota Corolla is starting

// The following line will throw an error or be discouraged as _startIgnition is internal:
// myCar._startIgnition(); // Not meant to be accessed directly
