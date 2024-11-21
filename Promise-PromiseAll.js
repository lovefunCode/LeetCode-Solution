const promiseAll = async function(functions){
    return new Promise((resolve, reject)=>{
        let result = []
        let count = 0
        for(let i = 0; i < functions.length; i++){
            functions[i]().then(res=>{
                result[i] = res
                count++
                if(count == functions.length){
                    resolve(result)
                }
            }).catch(err=>{
                reject(err)
            })
        }
       
    })
}

const promiseAll2 = function(functions){
    return new Promise((resolve, reject)=>{
        let count = 0, result = new Array(functions.length)
        functions.forEach((fn, i)=>{
            fn().then(res=>{
                result[i] = res
                count++
                if(count == functions.length){
                    resolve(result)
                }
            }).catch(err=>{
                reject(err)
            })
        })
    })
}

// Why await in a for Loop Fails:
// this executes the promises sequentially, waiting for each promises to resolve or reject before
// moving to the next. This is contrary to how Promise.all is designed to behave,
//  which executes all promises concurrently
//  
//  Wrong solution
// const promiseAll3 = function(functions){
//     return new Promise(async(resolve, reject)=>{
//         let count = 0
//         let result = new Array(functions.length)
//        for(let i = 0; i < functions.length; i++){
//             try{
//                 result[i] = await functions[i]()
//                 count++
//                 if(count == functions.length){
//                     resolve(result)
//                 }
//             }catch(err){
//                 reject(err)
//                 break;
//             }
//         }
    
//     })
// }

const promise = promiseAll2([() => new Promise(res => res(42))])
promise.then(console.log); // [42]

const functions = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
]

const promise2 = promiseAll2(functions)
console.log(promise2.then(res=>{
    console.log("---", res)
}).catch(err=>{
    console.log('err', err)
}))

