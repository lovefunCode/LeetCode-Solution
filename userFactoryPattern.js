
// seperate classes
// single responsiblity
// strategy pattern
class Admin{
    constructor(){
        this.role = 'Admin';
        this.permission = ['read', 'write', 'delete']
    }
}
class Gueset{
    constructor(){
        this.role = 'Gueset';
        this.permission = ['read']
    }
}
class RegisterUser{
    constructor(){
        this.role = 'RegisterUser';
        this.permission = ['read', 'write']
    }
}

// just directly add new role class and add to the map
class Moderator{
    constructor(){
        this.role = 'NewUser';
        this.permission = ['read', 'write', 'moderate']
    }
}

const map = {
    admin: new Admin(),
    guest: new Gueset(),
    registeredUser: new RegisterUser(),
    moderator: new Moderator()
}

// UserFactory to create user instances based on type
class UserFactory{
    static createUser(userType) {
        return map[userType]
    }
}

const admin = UserFactory.createUser('admin')
const guest = UserFactory.createUser('guest')
const registerUser= UserFactory.createUser('registeredUser')

// add new role don't need to change the inner structure.
const moderator = UserFactory.createUser('moderator')

console.log(admin)
console.log(guest)
console.log(registerUser)
