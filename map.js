var map = function(arr, fn){
    let result = []
    for(let index in arr){
        result.push(fn(arr[index], Number(index)))
    }
    return result;
}


const map2 = (arr, fn)=>{
    let result = []
    for(const i in arr){
        result.push(fn(arr[i], Number(i)))
    }
    return result
}

let arr = [1, 3, 4,5,6, 7, 8,9]
let fn = function plusone(n, i){
    return n+i
}

console.log(map2(arr, fn))
