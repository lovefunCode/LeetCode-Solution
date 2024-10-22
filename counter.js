var createCounter = function(n){
    return function(){
        return ++n
    }
}

const counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())

class Counter{
    constructor(n){
        this.n = n
    }
    increment(){
        return this.n++;
    }
}

const counter2 = new Counter(20)
console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.increment());