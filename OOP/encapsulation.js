class Car{
    #engineStatus; //private field
    constructor(make){
        this.make = make;
        this.#engineStatus = 'off'
    }
    startEngine(){
        this.#engineStatus = 'on'
        console.log('startEngine')
    }
    getEngineStatus(){
        return this.#engineStatus
    }
    // static
    static engineMethod(){
        console.log('I am a static method in a class')
    }
}

const myCar = new Car('Toyota')
myCar.startEngine();    //Start engine
console.log(myCar.getEngineStatus())  // on
console.log(myCar.make)    //Toyota 
// console.log(myCar.#engineStatus) //SyntaxError: Private field '#engineStatus' must be declared in an enclosing class

//Static method need use class name to call 
Car.engineMethod()  //I am a static method in a class

// Note: cannot use instance to call the class static method
myCar.engineMethod(); //TypeError: myCar.engineMethod is not a function