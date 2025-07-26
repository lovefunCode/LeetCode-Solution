// In OOP, the factory method pattern is a design pattern that uses factory methods to
//  deal with the problem of creating objects without having to specify their 
//  exact classes. rather than calling a constructor, this is accomplished by invoking
//  a factory method to create an object

class User{
    constructor(name, role){
        this.name = name
        this.role = role
        this.permissions = []
    }
}

class UserFactory{
    static create(name, type){
        switch(type){
            case 'admin':
                const admin =  new User(name, 'admin')
                admin.permissions = ['read', 'write', 'delete']
                return admin
            case 'editor':
                const editor = new User(name, 'editor')
                editor.permissions = ['read', 'write']
                return editor
            case 'guest':
                const guest = new User(name, 'guest')
                guest.permissions = ['read']
            default:
                throw new Error('Unknown user type')
        }
    }
}

const admin = UserFactory.create('Alice', 'admin')
const editor = UserFactory.create('Bob', 'editor')

console.log(admin.permissions)
console.log(editor.permissions)

// pros:
//     1.  loose coupling : seperate object creation from business logic
//     2.   Single Responsibility Principle: creation object in one place
//      3. Open/Closed Principle : easy to introduce new type without changing existing code
//     4. Simplifies complex creation

// Use Cases
    //  1. when object creation requires complex logic
    //  2. need to create different instances based on conditions
    //  3. provide a simple interface for object creation
    //   4. need to decouple object creation from object usage

