const person = {
    greet: function(){
        console.log('hello')
    }
}
const john = Object.create(person)
john.greet();

const obj1 = {
    'name': "Alice",
    'age': 25
}

const obj2 = {
    'job': "engineer",
    'city': 'London'
}
const merge = Object.assign(obj1, obj2)
console.log(merge)
console.log(obj1)
console.log(obj2)

const original = {a: 1, b:2}
const copy = Object.assign({}, original)
console.log(copy)

let copy2 = {}
Object.assign(copy2, original)
console.log(copy2)

const car = { make: "Toyota", model: "Corolla" };
Object.freeze(car)
car.make = '111'
console.log(car.make)

const car2 = { make: "Toyota", model: "Corolla" };
console.log(Object.isFrozen(car2))

Object.freeze(car2)
console.log(Object.isFrozen(car2))

const obj = { name: "Alice", age: 30 };
console.log(Object.keys(obj))

console.log(Object.values(obj))

console.log(Object.entries(obj))

const obj4 = {}
console.log(Object.getPrototypeOf(obj4))
console.log(Object.getPrototypeOf(obj4) == Object.prototype)

class MyClass{
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getImmutableCopy(){
       // create a new obj has the same prototype as the current instance this
       // This ensures that immutableCopy will inherit methods from myClass, 
       //  but it doesn't yet contain the properties of this(such as a, b, and c)
       const immutableCopy = Object.create(Object.getPrototypeOf(this))
       console.log(immutableCopy)
       // Copy Properties to immutableCopy
       Object.assign(immutableCopy, this)
       console.log(immutableCopy)
       console.log(immutableCopy.isMutable)
       // Freeze the object to make it immutable
       Object.freeze(immutableCopy)
       return immutableCopy
    }
    isMutable(){
        return !Object.isFrozen(this)
    }
}

let objTest = new MyClass(4, 5, 6)
console.log(objTest.isMutable())   // true
let immutableObj = objTest.getImmutableCopy();
console.log(immutableObj.isMutable())   //false