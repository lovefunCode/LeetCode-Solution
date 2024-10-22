const checkInstanceOf = (obj, classFunction)=>{
    if(classFunction == null || classFunction == undefined || typeof(classFunction) != 'function'){
        return false
    }
    let currProtoType = Object.getPrototypeOf(obj)
    console.log('currProtoType------', currProtoType)
    while(currProtoType != null){
        if(currProtoType === classFunction.prototype){
            return true;
        }
        currProtoType = Object.getPrototypeOf(currProtoType)
    }
    return false
}

console.log(checkInstanceOf(new Date(), Date))
console.log(checkInstanceOf(1, Number))
console.log(checkInstanceOf('1', String))
console.log(checkInstanceOf([], Array))


//primitive type should use new to create instances then can be use the instanceof to decide 
let n = 1;
let n2 = new Number(1)
console.log(n instanceof Number, n2 instanceof Number)      //false, true


let s = 'a';
let s2 = new String('a')
console.log(s instanceof String, s2 instanceof String)    //false, true

//reference don't need.
let arr = [1, 2];
let arr2 = new Array([1, 2])
console.log(arr instanceof Array, arr2 instanceof Array)