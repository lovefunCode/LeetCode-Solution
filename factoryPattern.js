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

// es6 class for object-oriented patterns and structured inheritance, provide a clean and 
// familiar syntax for creating and managing object

// factory pattern is a creational design pattern that provides an interface for creating
// objects in a way that abstracts the instantiation process.
// 1.  need conditional object crration based on dynamic conditions
// 2. encapsulate complex creation logic
// 3. return different types of objects while keep the interface consistent
// 4. avoid using new for object creation or prefer to work with plain objects instead of class instances

