// const TimeLimitedCache = function(){
//     this.cache = new Map()
// }
// TimeLimitedCache.prototype.set = function(key, value, duration){
//     const keyExisted = this.cache.get(key)
//     console.log('keyExisted---', keyExisted)
//     if(keyExisted){
//         clearTimeout(keyExisted.timeoutId)
//     }
//     let timeoutId = setTimeout(()=>{
//         this.cache.delete(key)
//     },duration)
//     this.cache.set(key, {
//         value,
//         timeoutId
//     })
//    return Boolean(keyExisted)
// }

// TimeLimitedCache.prototype.get = function(key){
//     if(this.cache.has(key)){
//         return this.cache.get(key).value
//     }
//     return -1
// }

// TimeLimitedCache.prototype.count = function(){
//     return this.cache.size
// }

class TimeLimitedCache {
    constructor() {
        this.cache = new Map()
    }
    set(key, value, duration) {
        const keyExisted = this.cache.get(key)
        if(keyExisted){
            clearTimeout(keyExisted.timeoutId)
        }
        const timeoutId = setTimeout(() => {
            this.cache.delete(key)
        }, duration)

        this.cache.set(key, {
            value,
            timeoutId
        })
        return Boolean(keyExisted)
    }
    get(key) {
        if(this.cache.has(key)){
            return this.cache.get(key).value
        }
        return -1
    }
    count() {
        return this.cache.size
    }

}

const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000))
console.log(timeLimitedCache.set(1, 45, 1000))
console.log(timeLimitedCache.get(1))
console.log(timeLimitedCache.count());

