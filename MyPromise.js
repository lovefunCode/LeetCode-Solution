class MyPromise{
    constructor(executor){
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        this.resolvedCbs = []
        this.rejectedCbs = []

        const resolve = (value)=>{
            if(this.state === 'pending'){
                this.state = 'resolved'
                this.value = value
                this.resolvedCbs.forEach(cb=> {
                    if(typeof cb == 'function'){
                        cb(value)
                    }
                })
            }
        }

        const reject = (reason)=>{
            if(this.state === 'pending'){
                this.state = 'rejected'
                this.reason = reason
                this.rejectedCbs.forEach(cb=> {
                    if(typeof cb == 'function'){
                        cb(reason)
                    }
                })
            }
        }

        try{
            executor(resolve, reject)
        }catch(err){
            reject()
        }
    }

    then(resolve, reject){
        if(this.state == 'resolved'){
            resolve(this.value)
        }else if (this.state == 'rejected'){
            reject(this.reason)
        }else{
            // state is pending
            this.resolvedCbs.push(resolve)
            this.rejectedCbs.push(reject)
        }
        return this
    }

    catch(reject){
        return this.then(null, reject)
    }

    finally(onFin){
        return this.then(
            value => {onFin(); return value},
            reason => {onFin(); throw reason}
        )
    }
}

const p = new MyPromise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('hello, my promise')
        resolve('Hello, I am resolve')
    })
})

p.then((res)=>{
    console.log('1111----', res)
}).then((next)=>{
    console.log('2222', next)
}).catch(err=>{
    console.log('err', err)
})