var createCounter = function(init){
    let storeInit = init;
    function decrement(){
        return --init
    }
    function increment(){
        return ++init
    }
    function reset(){
        return storeInit
    }
    return {
        decrement,
        increment,
        reset
    }
}

const counter = createCounter(10)
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());

class Counter{
    constructor(init){
        this.init = init;
        this.storeInit = init
    }
    increment(){
        return ++this.init
    }
    decrement(){
        return --this.init
    }
    reset(){
        return this.storeInit
    }
}

const counter2 = new Counter(20)
console.log(counter2.increment())
console.log(counter2.increment())
console.log(counter2.increment())
console.log(counter2.decrement())
console.log(counter2.reset())