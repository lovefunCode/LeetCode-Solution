# Object built-in method
Object is a built-in global object that provides several methods for working with objects.
## Object.create()
```js
    // Object.create(proto, propertiesObject)
    // proto is used as the prototype of the new Object
    const person = {
        greet: function(){
            console.log('hello')
        }
    }
    const john = Object.create(person)
    john.greet();   // hello
```

## Object.assign()
```js
// Object.assign(target, ...sources)
    const obj1 = {
        'name': "Alice",
        'age': 25
    }

    const obj2 = {
        'job': "engineer",
        'city': 'London'
    }
    const merge = Object.assign(obj1, obj2)
    console.log(merge)  // { name: 'Alice', age: 25, job: 'engineer', city: 'London' }
    console.log(obj1) //{ name: 'Alice', age: 25, job: 'engineer', city: 'London' }
    console.log(obj2)  //{ job: 'engineer', city: 'London' }

    // Clone an object, shallow copy so will change the target object 
    const original = {a: 1, b:2}
    const copy = Object.assign({}, original)
    console.log(copy)  // { a: 1, b: 2 }

    let copy2 = {}
    Object.assign(copy2, original)
    console.log(copy2)  //{ a: 1, b: 2 }

```
## Object.freeze()
```js
    // Object.freeze(obj)
    const car = { make: "Toyota", model: "Corolla" };
    Object.freeze(car)
    car.make = '111'
    console.log(car.make)  // Toyota
```

## Object.isFrozen()
```js
    // Object.isFrozen(obj)
    const car2 = { make: "Toyota", model: "Corolla" };
    console.log(Object.isFrozen(car2))  //false

    Object.freeze(car2)
    console.log(Object.isFrozen(car2)) // true
```

## Object.keys()
```js
    const obj = { name: "Alice", age: 30 };
    console.log(Object.keys(obj))   //[ 'name', 'age' ]
```

## Object.values()
```js
    const obj2 = { name: "Alice", age: 30 };
    console.log(Object.values(obj2))   //[ 'Alice', 30 ]
```

## Object.entries()
```js
    const obj3 = { name: "Alice", age: 30 };
    console.log(Object.entries(obj3))   // [ [ 'name', 'Alice' ], [ 'age', 30 ] ]
```

## Object.prototypeOf()
```js
    const obj4 = {}
    console.log(Object.getPrototypeOf(obj))  //[Object: null prototype] {}

    console.log(Object.getPrototypeOf(obj) == Object.prototype)   // true

```

## Real Use Case
```js
    class MyClass{
        constructor(a, b, c){
            this.a = a;
            this.b = b;
            this.c = c;
        }
        getImmutableCopy(){
            const immutableCopy = Object.create(Object.getPrototypeOf(this))
            Object.assign(immutableCopy, this)
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
```

