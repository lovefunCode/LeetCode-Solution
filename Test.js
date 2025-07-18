class MyPromise{
    constructor(executor){
        this.status = "pending";
        this.value =  undefined;
        this.reason = undefined;
        this.onFulfilledCb = [];
        this.onRejectedCb = []
        const resolve = (value)=>{
            if(this.status === 'pending'){
                setTimeout(()=>{
                    this.status = 'fulfilled'
                    this.value = value
                    this.onFulfilledCb.forEach(fn => fn(this.value))
                })
            }
        }
        const reject = (reason)=>{
            if(this.status === 'pending'){
                setTimeout(()=>{
                    this.status = 'rejected'
                    this.reason = reason
                    this.onRejectedCb.forEach(fn => fn(this.reason))
                })
            }
        }

        try{
            executor(resolve, reject)
        }catch(err){
            reject(err)
        }

    }

    then(onFulfilled, onRejected){
        // onFulfilled = typeof 
        return new MyPromise((resolve, reject) =>{
            const handleCallback = (callback) =>{
                try{
                    const result = callback( this.status == 'fulfilled' ? this.value : this.reason)
                    if(result instanceof MyPromise){
                        result.then(resolve, reject)
                    }else{
                        resolve(result)
                    }

                }catch(err){
                    reject(err)
                }
            }

            if(this.status == 'fulfilled'){
                setTimeout(()=> handleCallback(onFulfilled))
            }else if(this.status == 'rejected'){
                setTimeout(()=> handleCallback(onRejected))
            }else{
                this.onFulfilledCb.push(()=> handleCallback(onFulfilled))
                this.onRejectedCb.push(()=> handleCallback(onRejected))
            }
        })
    }

    catch(onRejected){
        return this.then(null, onRejected)
    }

    finally(onFinally){
        return this.then(
            value => MyPromise.resolve(onFinally()).then(()=>value),
            reason => MyPromise.reject(onFinally()).then(()=> {throw reason})
        )
    }
   

}

const p = new MyPromise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Hello, My Promise!")
    }, 100)
})

p.then(data=>{
    console.log("success:", data)
}).then(next=>{
     console.log("next:", next)
})
.catch(err=>{
    console.log('error', err)
})