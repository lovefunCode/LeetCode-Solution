class Logger{
    constructor(){
        this.map = new Map()
    }
    shouldPrintMessage(timestamp, message){
        if(this.map.has(message)){
            if(timestamp < this.map.get(message) + 10){
                return false
            }
        }
        this.map.set(message, timestamp)
        return true
    }
}

// Test cases
const logger = new Logger();

console.log(logger.shouldPrintMessage(1, "foo"));  // true, as "foo" has not been logged yet
console.log(logger.shouldPrintMessage(2, "bar"));  // true, as "bar" has not been logged yet
console.log(logger.shouldPrintMessage(3, "foo"));  // false, as "foo" was logged less than 10 seconds ago
console.log(logger.shouldPrintMessage(8, "bar"));  // false, as "bar" was logged less than 10 seconds ago
console.log(logger.shouldPrintMessage(10, "foo")); // false, as "foo" was logged at timestamp 1 and now it's timestamp 10 (exactly 10 seconds later)
console.log(logger.shouldPrintMessage(11, "foo")); // true, as "foo" can now be logged again (timestamp > 1 + 10)
console.log(logger.shouldPrintMessage(12, "bar")); // true, as "bar" can now be logged again (timestamp > 2 + 10)
console.log(logger.shouldPrintMessage(20, "baz")); // true, as "baz" has not been logged yet
console.log(logger.shouldPrintMessage(25, "foo")); // true, as "foo" can be logged again (timestamp > 11 + 10)
