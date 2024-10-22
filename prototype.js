function Animal(type){
    this.type = type
}

Animal.prototype.speak = function(){
    console.log(`Animal ${this.type} makes a sound`)
}

function Dog(name){
    Animal.call(this, 'dog')    //inherit type from Animal
    this.name = name;
}

//inherit from Animal
Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.constructor = Dog

Dog.prototype.bark = function(){
    console.log(`${this.name} barks`)
}

const myDog = new Dog('Rex')

myDog.bark();
myDog.speak();