const LRUCache = function(capacity){
    this.cache = new Map()
    this.capacity = capacity
}
LRUCache.prototype.get = function(key){
    if(this.cache.has(key)){
        const val = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, val)
        return val
    }else{
        return -1
    }
}

LRUCache.prototype.put = function(key, value){
    if(this.cache.size == this.capacity){
       if(this.cache.has(key)){
            this.cache.delete(key)
       }else{
            let firstKey = null, lastKey = null
            // Convert iterator to an array before using it
            // let keysArray = Array.from(this.cache.keys())
            // firstKey =  keysArray[0]
            // lastKey = keysArray[keysArray.length-1]
            for(let [key] of this.cache.entries()){
                if(firstKey == null){
                    firstKey = key
                }
                lastKey = key
            }
            console.log('firstKey, lastKey',firstKey, lastKey)
            this.cache.delete(firstKey)
       }
    }
    this.cache.set(key, value)
}

const obj = new LRUCache(2)
obj.put(1, 'a')
obj.put(2, 'b')
console.log(obj.put(3, 'c'))
console.log(obj)

// Map get the last key
// let keys = map.keys()   iterator
// convert iterator to array
//  let keysArray = Array.from(keys)
//  let keysArray2 = [...map.keys()]