// A singleton is a design pattern that restricts the instanitation of a class
// to a single object

// use cases 
//  1. global config management
//  2. App-wider service (eg logger, AuthManager)

class Singleton{
    constructor(){
        if(Singleton.instance){
            return Singleton.instance
        }
        this.timestamp = new Date()
        Singleton.instance = this
        return this
    }
    getTime(){
        return this.timestamp
    }
}

const s1 = new Singleton()
const s2 = new Singleton()
console.log(s1 === s2)   // true return the same object-- not a new one

// Closure-based version
const Singleton2 = (function(){
    let instance
    function createInstance(){
        return {
            name: 'I am the singleton instance'
        }
    }
    return {
        getInstance: function(){
            if(!instance){
                instance = createInstance()
            }
            return instance
        }
    }
})()


const instance1 = Singleton2.getInstance()
const instance2 = Singleton2.getInstance()

console.log(instance1 === instance2)
