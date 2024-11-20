const TimeLimitedCache = function(){
    // utilise the map data structure, map can easily get the length as there
    // is a built-in method map.size compare to object

    this.map = new Map()
}

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration){
    const keyExisted = this.map.get(key)
    if(keyExisted){
        clearTimeout(keyExisted.timerId)
    }
    const timerId = setTimeout(()=>{
        this.map.delete(key)
    },duration)
    this.map.set(key, {
        value,
        timerId
    })
    return Boolean(keyExisted)
}

TimeLimitedCache.prototype.get = function(key){
    if(this.map.has(key)){
        return this.map.get(key).value
    }else{
        return -1
    }
}

TimeLimitedCache.prototype.count = function(){
    return this.map.size
}

const timeLimitedCache = new TimeLimitedCache()

// Test 1: Setting a new key
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)) // 42
console.log(timeLimitedCache.count()) // 1

// Test 2: Setting an existing key
setTimeout(() => {
    console.log(timeLimitedCache.set(1, 100, 500)); // true (key already exists)
    console.log(timeLimitedCache.get(1)); // 100 (updated value)
    console.log(timeLimitedCache.count()); // 1 (still one active key)
}, 200); // Update within the original key's duration

// Test 3: Expiration of keys
setTimeout(() => {
    console.log(timeLimitedCache.get(1)); // -1 (key expired)
    console.log(timeLimitedCache.count()); // 0 (no active keys)
}, 1200); // Wait for the first key to expire

