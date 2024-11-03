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

// Note: Instance methods and static methods