function jsonStringify(object){
    if(object === null || object == undefined){
        return String(object)
    }
    //Arrays []
    if(Array.isArray(object)){
        const values = object.map(item =>{
            return jsonStringify(item)
        })
        return `[${values.join(',')}]`
    }

    //Objects {}
    if(typeof object === 'object'){
        const keys = Object.keys(object)
        const keyValPairs = keys.map(key=>{
            return `${key}:${jsonStringify(object[key])}`
        })
        return `{${keyValPairs.join(',')}}`
    }

    //Strings  ""
    if(typeof object === 'string'){
        return `"${String(object)}"`
    }

    return String(object)
}

const obj1 = {
    a: 1,
    b: [2,3,5],
    c: {
        key: 1
    }
}
console.log(jsonStringify(obj1))

const obj2 = {
    a: 'str',
    b: -12,
    c: true,
    d: null
}
console.log(jsonStringify(obj2))
