// ES5 Prototype Chain Inherience
function AnimalPrototypeChain(name){
    this.name = name
}

AnimalPrototypeChain.prototype.speak = function(){
    console.log(`${this.name} makes a noise`);
}

function DogPrototypeChain(name, breed){
    AnimalPrototypeChain.call(this, name)
    this.breed = breed
}
// Inheriencing from AnimalPrototypeChain by setting DogPrototypeChain.prototype 
// to an instance of Animal
DogPrototypeChain.prototype = Object.create(AnimalPrototypeChain.prototype)
// Setting the constructor property back to the DogPrototypeChain
// important for proper constructor reference
DogPrototypeChain.prototype.constructor = DogPrototypeChain

DogPrototypeChain.prototype.bark = function(){
    console.log(`${this.name} bark`);
}

const myDog = new DogPrototypeChain('Rover', 'labrador')
myDog.speak();  //Rover makes a noise
myDog.bark();  //Rover bark

console.log(myDog instanceof DogPrototypeChain)   // true
console.log(myDog instanceof AnimalPrototypeChain)  // true

// instance don't have prototype property 
// Object.getPrototypeOf(myDog.prototype) TypeError: Cannot convert undefined or null to object
//     at Function.getPrototypeOf (<anonymous>)
console.log('Prototype of myDog:', Object.getPrototypeOf(myDog))  //DogPrototypeChain.prototype

console.log('dogPrototypeChain.prototype:', Object.getPrototypeOf(DogPrototypeChain))  //AnimalPrototypeChain.prototype
//dogPrototypeChain.prototype: ƒ () { [native code] } Function.prototype
console.log('dogPrototypeChain.prototype:', Object.getPrototypeOf(DogPrototypeChain.prototype))

console.log('dogPrototypeChain.prototype:', Object.getPrototypeOf(AnimalPrototypeChain))  //Function.prototype
console.log('dogPrototypeChain.prototype:', Object.getPrototypeOf(AnimalPrototypeChain.prototype))  //Object.prototype

//Primitive Type should use new to create instances then can be use the instanceof to decide 
let n = 1
let n2 = new Number(2)
console.log(n instanceof Number)   // false
console.log(n2 instanceof Number)  // true

// ES6 class Inherience
//base case
class AnimalClass{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a noise`);
    }
}

// drived clss
class Dog extends AnimalClass{
    speak(){
        console.log(`${this.name} makes a bark`);
    }
}

const dog = new Dog('Rover')
dog.speak()   // Rover makes a bark

// when you need to explicitly define a constructor in a subclass, you must call super() first
class Cat extends AnimalClass{
    constructor(name, breed){
        super(name)
        // need to explicitly define a constructor in a subclass
        this.breed = breed
    }
    speak(){
        console.log(`${this.name} the ${this.breed} barks`)
    }
}

const myCat = new Cat('hello kitty', 'red')
myCat.speak();