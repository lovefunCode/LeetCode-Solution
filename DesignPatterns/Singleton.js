// In js a singleton design pattern that ensurs only 1 instance of an 
// an object is create and provide a global point of access to that 
// instance
// Use case: Singleton pattern for Configuration Management

class Config{
    constructor(){
        if(Config.instance){
            return Config.instance
        }
        // private configuration properties
        this.settings = {
            apiUrl: "https://api.example.com",
            environment: "production",
            timeout: 5000,
        }

        // lock the instance
        Config.instance = this
        return this
    }

    get(key){
        return this.settings[key]
    }
    set(key){
        this.settings[key] = value
    }
}

const configInstance = new Config();
Object.freeze(configInstance)

console.log("API URL:", config.get("apiUrl"));  
console.log("Environment:", config.get("environment")); 

config.set("timeout", 10000);
console.log("Updated Timeout:", config.get("timeout"));

// advantages: 
// 1. Consistency
//  2. Centralized management
//  3. Memory efficient
