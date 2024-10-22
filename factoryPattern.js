function CarFactory(make, model){
    return {
        make, 
        model,
        drive(){
            console.log(`${this.make} ${this.model} is driving`)
        }
    }
}

const car1 = CarFactory('Toyota', 'Corolla')
const car2 = CarFactory('Honda', 'Civic')

car1.drive()
car2.drive()


function Car(make, model){
    this.make = make;
    this.model = model
}

Car.prototype.drive = function(){
    console.log(`${this.make} ${this.model} is driving`)
}

function CarFactory2(make, model){
    return new Car(make, model)
}

const car3 = CarFactory2('Toyota', 'Corolla')
const car4 = CarFactory2('Honda', 'Civic')

car3.drive()
car4.drive()