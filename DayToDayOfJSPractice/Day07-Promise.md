# Promise
Promise is a powerful tool in JS for handling asynchronous operations
## 1.Promise come in reason
As JS is a single-threaded(meaning it can only execute 1 operation at a time in the main thread). This could be limiting when we have long-running tasks(like fetching data from a server) since it would block other code from running, This is where Promises come in
Promises allow JS to manage asychronous operations efficiently without blocking the main thread

## 2. What is a Promise?
A Promise is a JS object that represent the eventual completion(or failure) of an asychronous operation. </br>
### A Promise has 3 states:
    1. Pending: The inital state, the operation has not completed yet
    2. Fulfilled: The operation completed successfully, and we have the resulting value
    3. Rejected: The operation failed, and we have an error

## 3. Create a Promise
```js
    const myPromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Success')
        }, 1000)
    })

```
## 4 Using .then(), .catch() and .finally()
```js
    myPromise.then(result=>{
        console.log(result)  //"Success!" (after 1 seconds)
    }).catch(error=>{
        console.log(error)
    }).finally(()=>{
        console.log("Promise completed.");  //Runs after either resolve or reject
    })

```

## 5. Working with Asynchronous Operations Using Promise
```js
    function fetchData(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                const data = { name: "Alice", age: 25 };
                resolve(data)
            }, 1000)
        })
    }

    // usage
    fetchData().then((data)=>{
        console.log("Data fetched:", data);
    }).catch((error)=>{
        console.error("Error fetching data:", error);
    })

```

## 6. Promise chain
```js
    function fetchName(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('Alice')
            }, 1000)
        })
    }

    function fetchAge(name){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(`${name} is 25 years old`)
            }, 1000)
        })
    }

    fetchName().then((name)=>{
        fetchAge(name)
    }).then((result)=>{
        console.log(result)
    })

```

## 7 async, await
```js
    async function fetchUserData(){
        try{
                const name = await fetchName()
                const age = await fetchAge(name)
                console.log(age)
        }catch(error){
                console.error("Error:", error);
        }
    }
```

## 8 handling Multiple Promise with Promise.all
```js
    const promise1 = Promise.resolve(3)
    const promise2 = new Promise(resolve =>{
        setTimeout(resolve, 1000, 'foo')
    })
    const promise3 =  fetchData()

    Promise.all([promise1, promise2, promise3]).then((values)=>{
        console.log(values)    //[ 3, 'foo', { name: 'Alice', age: 25 } ]
    })
```

## Pros
    1. Non-blocking Operation
    2. Predictable Control Flow
    3. Error Handling
