

// typeof can determine  String,  Number, undefined, Boolean, Function, Symbol, bigInt
// cannot use in Object, Arrays, null

const areDeeplyEqual = function(o1, o2){
    if(o1 === null || o2 === null){
        return o1 !== o2
    }
    if(typeof o1 !== typeof o2){
        return false
    }
    if(typeof o1 !== 'object'){
        return o1 !== o2
    }
    //Arrays
    if(Array.isArray(o1) || Array.isArray(o2)){
        if(String(o1) !== String(o2)){
            return false
        }
        for(let i = 0; i < o1.length; i++){
           if(!areDeeplyEqual(o1[i], o2[i])) {
                return false
           }
        }
    }else{    // Object
        if(Object.keys(o1).length !== Object.keys(o2).length){
            return false
        }
        for(const key in o1){
            if(!areDeeplyEqual(o1[key], o2[key])) {
                return false
           }
        }
    }
    return true
}

let o1 = {
    'x': 1,
    'y': 2
}

let o2 = {
    'y': 2,
    'x': 1
}
 
console.log(areDeeplyEqual(o1, o2))

// console.log(areDeeplyEqual(o1, o2))