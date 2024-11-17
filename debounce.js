function debounce(fun, delay){
    let timeoutId = null;
    return function(...args){
        if(timeoutId){
            clearTimeout(timeoutId)
        }
        timeoutId =  setTimeout(()=>{
            fun(...args)
        }, delay)
    }
}


const debounce2 = (fn, delay)=>{
    let timerId = null;
    console.log(this);
    return function(args){
        let that = this;
        clearTimeout(timerId)
        timerId = setTimeout(()=>{
            fn.apply(that, args)
        }, delay)  
    }
}
// const log = debounce2(console.log, 100)
// log('hello1')
// log('hello2')
// log('hello3')

let obj = {
    name: 'LeetCode',
    sayHello: function(msg){
        console.log(`${this.name}: ${msg}`);
    }
}

let debounceSayHello = debounce2(obj.sayHello, 100)
console.log(debounceSayHello('Hello'))