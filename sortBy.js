const sortBy = function(arr, fn){
    return arr.sort((a,b)=>fn(a)-fn(b))
}
const arr = [5, 4, 1, 2, 3], fn = (x) => x
console.log(sortBy(arr, fn))  //[ 1, 2, 3, 4, 5 ]

let arr2 = [{"x": 1}, {"x": 0}, {"x": -1}], fn2 = (d) => d.x
console.log(sortBy(arr2, fn2))  //[ { x: -1 }, { x: 0 }, { x: 1 } ]