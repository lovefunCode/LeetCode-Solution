const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Success')
    }, 1000)
})

myPromise.then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
}).finally(()=>{
    console.log("Promise completed.");
})

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

async function fetchUserData(){
   try{
        const name = await fetchName()
        const age = await fetchAge(name)
        console.log(age)
   }catch(error){
        console.error("Error:", error);
   }
}

const promise1 = Promise.resolve(3)
const promise2 = new Promise(resolve =>{
    setTimeout(resolve, 1000, 'foo')
})
const promise3 =  fetchData()

Promise.all([promise1, promise2, promise3]).then((values)=>{
    console.log(values)
})
