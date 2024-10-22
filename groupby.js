Array.prototype.groupBy = function(fn){
    console.log(this)
    let res = {}
    for(const obj of this){
        let key = fn(obj)
        console.log('---key----', key)
        // if(!res.hasOwnProperty(key)){
        //     res[key] = []
        // }
        // console.log('========', this[key])
        res[key] = res[key] || []
        res[key].push(obj)
    }
    return res;
}

let array = [
    {"id":"1"},
    {"id":"1"},
    {"id":"2"}
]; 
let fn = function (item) { 
    return item.id; 
}
console.log(array.groupBy(fn))


