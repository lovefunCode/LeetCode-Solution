const reduce2 = (nums, fn, init)=>{
  let result = init
//   for(const n of nums){
//         result = fn(result, n)
//   } 

    nums.forEach(element => {
        result = fn(result, element)
    });
  return result 
}

let arr = [1,2,3,4,5,6,7,8]
const callReduce = reduce2(arr, reduceCallBack, 0)
function reduceCallBack(prev, n){
    return prev + n
}

console.log(callReduce)