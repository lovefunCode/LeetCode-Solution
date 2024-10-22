const filter = (arr, fn)=>{
    let result = []
    for(const i in arr){
        if(fn(arr[i], Number(i))){
            result.push(arr[i])
        }
    }
    return result;
}
let arr = [0,10,20,30]
let fn = function greaterThan10(n) { return n > 10; }
console.log(filter(arr, fn))