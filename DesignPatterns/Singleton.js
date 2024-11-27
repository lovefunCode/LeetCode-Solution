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

        // deep freeze the settings object
        this.deepFreeze(this.settings)

        // lock the instance
        Config.instance = this
        return this
    }

    get(key){
        return this.settings[key]
    }
    set(key, value){
        this.settings[key] = value
    }

    deepFreeze(obj){
        // 
        const propNames = Object.getOwnPropertyNames(obj)
        console.log('propNames', propNames)
        propNames.forEach(name=>{
            const value = obj[name]
            obj[name]= (value && typeof value == 'object' ) ? this.deepFreeze(value) : value
        })
        // console.log('obj---', obj)
        return Object.freeze(obj)

    }
}

const configInstance = new Config();

const configInstance2 = new Config();
// 1. Prevent accidental modification of configuration objects
//  2. Ensuring constant values
// 3 Immutable state management like Redux, immutablility is crucial
// 4. Sure code in multi-developer environments
//  5. Prevent tampering in security-sensitive applications

console.log(configInstance)
Object.freeze(configInstance) // cannot work
//  Config is object nested another object 

console.log("API URL:", configInstance.get("apiUrl"));  
console.log("Environment:", configInstance.get("environment")); 

try{
    configInstance.set("timeout", 10000);

}catch(err){
    console.log('err===', err)
}
console.log("Updated Timeout:", configInstance.get("timeout"));

// advantages: 
// 1. Consistency
//  2. Centralized management
//  3. Memory efficient


