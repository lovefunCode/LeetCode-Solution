// 1. Timeout Cancellation
function timeoutCancellation(fn, args, t) {
    let timer = setTimeout(() => {
        fn(...args)
    }, t)
    return function () {
        clearTimeout(timer)
    }
}

function greet(name){
    console.log(`Hello, ${name}`)
}

const cancelTimeout = timeoutCancellation(greet, ['Alice'], 1000)
console.log("Waiting to greet Alice...");
setTimeout(cancelTimeout, 2000)

//2. Interval Cancellation
function intervalCancellation(fn, args, t) {
    let timer = setInterval(() => {
        fn(...args)
    }, t)
    return function () {
        clearInterval(timer)
    }
}

const cancelInterval = intervalCancellation(greet, ['Bob'], 1000)
console.log("Greet Bob every second...");
setTimeout(cancelInterval, 3000)

// 3 Promise Time Limit
function timeLimitWithPromise(fn, args, t) {
    return new Promise((resolve, reject) => {
        let timer = setTimeout(() => {
            reject('Time Limit Exceeced')
        }, t)
        fn(...args).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        }).finally(() => {
            clearTimeout(timer)
        })
    })
}

async function fetchData(t){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data fetched successfully")
        }, t)
    })
}

timeLimitWithPromise(fetchData, [500], 1000).then((res)=>{
    console.log("---res-----", res)
}).catch(err=>{
    console.log(err)   //Time Limit Exceeced
})

// 4 Promise + Async/Await Time Limit
function timeLimit(fn, args, t) {
    return new Promise(async (resolve, reject) => {
        let timer = setTimeout(() => {
            reject('Time Limit Exceeced')
        }, t)
        try {
            let res = await fn(...args)
            clearTimeout(timer)
            resolve(res)
        } catch (err) {
            clearTimeout(timer)
            reject(err)
        }

    })
}

function slowFn(duration){
    console.log('duration---', duration)
    return new Promise((resolve)=>{
        resolve(`Finished after ${duration}ms`);
    })
}

timeLimit(slowFn, [1500], 2000).then((res)=>{
    console.log("++++++res+++++", res)
}).catch(err=>{
    console.log('err----',err)
})