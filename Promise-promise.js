// Promise :   JavaScript Object
//  3 states: 
// Pending
// fulfilled
//  rejected

const promise = new Promise(callback)

function callback(resolve, reject){
    setTimeout(resolve, 1000)
}

promise.then(()=>{
    console.log('11111')
}).catch((err)=>{
    console.log('err-----', err)
})

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000)
})

promise2.then(()=>{
    console.log('33333333')
}).catch(()=>{
    console.log('44444444')
})

// return promise 
function sleep(mills){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, mills)
    })
}

//async, await
async function sleep2(mills){
    await new Promise((resolve, reject)=>{
        setTimeout(resolve, mills)
    })
}

let t = new Date()
sleep(1000).then(()=>{
    console.log(Date.now()-t)
})

sleep2(1000).then(()=>{
    console.log(Date.now()-t)
})

async function sleep3(){
    console.log('Test-----')
    await new Promise((resolve, reject)=>{
        resolve
    })
}
console.log(sleep3())

let arr = [1, 2,3,4,5]
console.log(arr.pop(), arr)
console.log('-------', arr.push(6), arr)
console.log(arr.shift(), arr)
console.log('------', arr.unshift(-1), arr)

