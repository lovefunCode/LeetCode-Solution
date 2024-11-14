function sleep(millisecond){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, millisecond)
    })
}

//
async function sleep2(millisecond){
    // To make fix that resolve("Success"), we should make sure
    // sleep2 returns the result of the Promise
    return await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Success')
        }, millisecond)
    })
}

let t = Date.now()
sleep(100).then(()=>{
    console.log(Date.now())
})
sleep2(100).then((res)=>{
    console.log('res----', res)     //res---- Success
    console.log(Date.now())
})