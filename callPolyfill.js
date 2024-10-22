Function.prototype.callPolyfill = function(context, ...args){
    console.log(this)
    console.log(context)   //object
    return this.bind(context)(...args)
    return this.call(context, ...args)
    // return this.apply(context, args)

}

function increment(){
    this.count++
    return this.count
}
console.log(increment.callPolyfill({count:1}))