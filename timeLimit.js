// var timeLimit = function (fn, t) {
//     return async function (...args) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject('Time Limited Exceeded1111!!!')
//             }, t)
//             fn(...args).then(resolve)
//                 .catch(() => {
//                     reject('Time Limited Exceeded222!!!')
//                 })
//                 .finally(() => {
//                     clearTimeout(timeId)
//                     console.log('Finish Promise-----')
//                 })
//         })
//     }
// }

const timeLimit = (fn, t) => {
    return function (...args) {
        return new Promise(async (resolve, reject) => {
            const timeId = setTimeout(() => {
                reject('Time Limit Exceeded')
            }, t)
            try {
                const res = await fn(...args)
                clearTimeout(timeId)
                resolve(res)
            } catch (err) {
                clearTimeout(timeId)
                reject(err)
            }
        })
    }
}

const limited = timeLimit((t) => {
    return new Promise((resolve, reject) => {
        // setTimeout(resolve, t)
        setTimeout(() => {
            resolve('Success')
        }, t)
    })
}, 100)

limited(150).then(() => {
    console.log('successful execute')
}).catch((err) => {
    console.log(err)
})

let arr = [1, 2, 3, 4,5]
console.log(arr.unshift(-1), arr)
console.log(arr.shift(), arr)
console.log(arr.pop(), arr)
console.log(arr.push(5), arr)