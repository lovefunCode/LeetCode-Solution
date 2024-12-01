class Bird{
    fly(){
        console.log('Bird is flying'); 
    }
}

class Penguin extends Bird{
   fly(){
        console.log('Penguins cannot fly but can swim')
    }
}

// console.log('Test---', Bird.fly()) 
// TypeError: Bird.fly is not a function

const penguin = new Penguin() 

// Penguin.fly();
// TypeError: Penguin.fly is not a function
//  if you want to call fly() on the class itself without creating an instance
//  you need to declare fly() as a static method
// Note: Instance methods and static methods are different, and calling on instance
// method as if it were a static method will result in an error

penguin.fly()  //Penguins cannot fly but can swim


class Penguin2 extends Bird{
    static fly(){
         console.log('Penguins2 cannot fly but can swim')
     }
}

const penguin2 = new Penguin2() 
penguin2.fly()  //Bird is flying
Penguin2.fly()  //Penguins2 cannot fly but can swim

// Note: Instance methods and static methods difference
// 1. Static Method is a method that belongs to a class itself, not to its instance,
//  so static method are called on the class rather than on an instance of the class
//  Like
console.log( Date.now())   //1733058398309
// Not 
// console.log(new Date().now())   // TypeError: (intermediate value).now is not a function
//  Static method is a class-level rather than instance-specific

// Instance Method
//  Instance Method must be called on an instance of the class, not the class itself.
// console.log('Test---', Bird.fly()) 
// TypeError: Bird.fly is not a function
//  Without creating an instance, the method has no context to operate on
