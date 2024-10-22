function flat(arr, n){
    let result = []
    function helper(newArr, depth){
        for(const val of newArr){
            if(typeof(val) == 'object' && depth < n){
                helper(val, depth+1)
            }else{
                result.push(val)
            }
        }
        return result
    }
    return helper(arr, 0)
}

var flat2 = (arr, n)=>{
    let result = []
    function helper(arr, depth){
        for(let val of arr){
            if(Array.isArray(val) &&  depth < n){
                helper(val, depth+1)
            }else{
                result.push(val)
            }
        }
        return result
    }
    return helper(arr, 0)
}

function* flat3(arr, n){
    function* helper(arr, depth){
        for(let val of arr){
            if(Array.isArray(val) && depth < n){
                yield* helper(val, depth+1)
            }else{
                yield val
            }
        }
    }
    yield* helper(arr, 0)
}

let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
let n = 1
console.log(flat2(arr, n))

console.log([...flat3(arr, n)])