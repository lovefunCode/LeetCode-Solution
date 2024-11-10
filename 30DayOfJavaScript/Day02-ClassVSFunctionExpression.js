// 1.Function Expression: when a function is assigned to a variable.
// annoymous function or arrow function
const createCounter = function(init){
    let initStore = init
    function increment(){
        return ++initStore
    }
    function decrement(){
        return --initStore
    }
    function reset(){
        // note not just return init, otherwise the next time, you call other function
        // initStore didn't change, still remain last time operate the number
        initStore = init
        return initStore
    }
    function square(){
        return initStore * initStore
    }
    return {
        increment,
        decrement,
        reset,
        square
    }
}

const counter = createCounter(5)
console.log(counter.increment())   // 6
console.log(counter.reset())     // 5
console.log(counter.decrement())    // 4
console.log(counter.square())   // 16

class ClassCreateCounter{
    constructor(init){
        this.storeInit = init;
        this.init = init;
    }
    increment(){
        return ++this.init
    }
    decrement(){
        return --this.init
    }
    reset(){
        this.init = this.storeInit
        return this.init
    }
    square(){
        return this.init* this.init
    }
}

const myCounter = new ClassCreateCounter(5)
console.log("=======")
console.log(myCounter.increment())   // 6
console.log(myCounter.reset())   // 5
console.log(myCounter.decrement())  //4
console.log(myCounter.square())   //16