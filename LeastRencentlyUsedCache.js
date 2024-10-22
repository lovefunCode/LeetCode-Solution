const LRU = function(capacity){
    this.capacity = capacity
    this.cache = new Map()
}
LRU.prototype.get = function(key){
    if(!this.cache.has(key)){
        return -1   
    }
    const val = this.cache.get(key)
    // reinsert the key to mark the most recently used 
    this.cache.delete(key)
    this.cache.set(key, val)
    return val;
}

LRU.prototype.set = function(key, value){
    if(this.cache.has(key)){
        this.cache.delete(key)
    }
    this.cache.set(key, value)
    if(this.cache.size > this.capacity){
        this.cache.delete(this.cache.keys().next().value)
    }
}

const obj = new LRU(2)
console.log("obj.get('1')",obj.get('1'))
obj.set(1, [1,2,4])
obj.set(2, [1,2,3])
// obj.set(3, 3)

console.log("obj.get(1)=====", obj.get(1));  // Expected output: -1 (1 was evicted)
console.log("obj.get(2)", obj.get(2));  // Expected output: [1, 2, 3] (2 is still in the cache)
console.log("obj.get(3)", obj.get(3));  // Expected output: 3 (3 is in the cache)
