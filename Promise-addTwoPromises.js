const addTwoPromises = async function(promise1, promise2){
    // promise1 is Promise.resolve(1), promise2 is Promise.resolve(2)
    // promise1 and promise2 is not a function
    //  there is no need to call them as functions
    const res1 = await promise1
    const res2 = await promise2
    return res1+ res2
}

addTwoPromises(Promise.resolve(1), Promise.resolve(2)).then((result)=>{
    console.log(result)
})

// Modify addTwoPromises to accept functions as arguments
const addTwoPromisesAcceptFunction = async function(promise1, promise2){
    const res1 = await promise1()
    const res2 = await promise2()
    return res1 + res2
}

addTwoPromisesAcceptFunction(
    ()=>{ return Promise.resolve(1)},
    ()=>{ return Promise.resolve(2)}
).then(result=>{
    console.log(result)
})