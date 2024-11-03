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
}

const myCar = new Car('Toyota')
myCar.startEngine();    //Start engine
console.log(myCar.getEngineStatus())  // on
console.log(myCar.make)    //Toyota 
console.log(myCar.#engineStatus) //SyntaxError: Private field '#engineStatus' must be declared in an enclosing class