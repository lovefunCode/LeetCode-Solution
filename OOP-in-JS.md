# OOP(Object-Oriented Programming) in JS(JavaScript)
## Key Concept of OOP:
    1. Classes and Objects: A class is a blueprint for creating Objects. An object is an instance of a class, containging properties(attributes) and methods(functions). 

    2. Abstraction: Simplifying complex systems by modelling classes apporpiate to the problem, exposing only the necessary details. Aligning with Interface Segregation Principle(ISP)

    3. Encapsulation: Aligning with Single Responsibility Principle(SRP)

    4. Inherience: A mechanism where one class can extend another, allowing it to inherit properties and methods, promoting code reusability. Aligning with Liskov Substitution Principle(LSP)

    5. Polymorphism: The ability of different objects to be treated as instances of the same class through a shared interface, often implemented via method overriding. Align with Open/Closed Principle(OCP)

## OOP(Object-Oriented Programming) in JavaScript
## 1. Abstraction：
JS uses functions and classes to create abstractions. The idea is to design classes or objects with methods that hide the internal workings and show only what is essential.
### 1. ES5(traditional OOP with Prototypes)
before ES6, JS used function constructor and prototype for OOP
```js
    function Person(name, age){
        this.name = name;
        this.age = age; 
    }
    Person.prototype.greet = function(){
        console.log(`hello, my name is ${this.name}, I am ${this.age}`)
    }
    const person1 = new Person('Alice', 30)
    person1.greet();  //hello, my name is Alice, I am 30
```

### 2. ES6(class syntax)
more easy to work with OOP
```js
    class Person{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        greet(){
            console.log(`hello, my name is ${this.name}, I am ${this.age}`)
        }
    }
    const person2 = new Person('Alice', 30)
    person2.greet();  //hello, my name is Alice, I am 30
```
You can find the Abstraction  in [`Abstraction.js`](./OOP/abstraction.js).

## 2 Encapsulation and Access Control
while JS does not have built-in private properties(like some other OOP languages), ES6 introduced a way to emulate them using # for private fields:
```js
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
```
You can find the Encapsulation  in [`Encapsulation.js`](./OOP/encapsulation.js).

## 3.Inherience
1. ES5 Prototypal Inherience <br>
2. ES6 class Inherience
```js
    //base case
    class Animal{
        constructor(name){
            this.name = name
        }
        speak(){
            console.log(`${this.name} makes a noise`);
        }
    }

    // drived clss
    class Dog extends Animal{
        speak(){
            console.log(`${this.name} makes a bark`);
        }
    }

    const dog = new Dog('Rover')
    dog.speak()   // Rover makes a bark
```
You can find the two different Inherience  in [`Inherience.js`](./OOP/inherience.js).

## 4.Polymorphism and Method Overriding
Polymorphism is implemented by method overriding, where a subclass provides a specific implementation of a method already defined in its superclass
You can find the two different Inherience  in [`Polymorphism.js`](./OOP/polymorphism.js).