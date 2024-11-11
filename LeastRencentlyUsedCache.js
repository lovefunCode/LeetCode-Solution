const LRUCache = function(capacity){
    this.capacity = capacity
    this.cache = new Map()
}
// left is the least recently used, right is the most recently used
LRUCache.prototype.put = function(key, value){
    // determine the current this.cahce size equal to the capacity, 
    // if equal to the capacity, we put the key will exceed the capacity, 
    // we first should determine whether this.cache has the key or not
    // so we should evict the fist known as the least recently used key
    // then put the new key and value to this.cache
    if(this.cache.size == this.capacity){
        // this.cache.has(key) direct remove the key
        if(this.cache.has(key)){
            this.cache.delete(key)
            // this.cache.set(key, value)
        }else{      // this.cache doesen't has(key) evict the first(the least recently used)
            for(let keyVal of this.cache){
                console.log('keyVal, keyVal[0]--',keyVal, keyVal[0])
                this.cache.delete(keyVal[0])
                break;
            }
            // this.cache.set(key, value)
        }
    }
    this.cache.set(key, value)
}
LRUCache.prototype.get = function(key){
    if(this.cache.has(key)){
        let val = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, val)
        return val
    }else{
        return -1
    }
}

const obj = new LRUCache(2)
obj.put('a', [1,2,3])
obj.put('b', [2,3,4])
obj.put('c', 3)

console.log("obj.get(1)=====", obj.get('a'));  // Expected output: -1 (1 was evicted)
console.log("obj.get(2)", obj.get('b'));  // Expected output: [2, 3, 4] (2 is still in the cache)
console.log("obj.get(3)", obj.get('c'));  // Expected output: 3 (3 is in the cache)
