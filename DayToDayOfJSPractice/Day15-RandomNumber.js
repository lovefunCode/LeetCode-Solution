// 1. LCG(Linear Congruential Generator) algorithms
// 2. The seed determines the sequence of random numbers
function customRandom(seed){
    const modulus = 2 ** 31 -1
    const multiplier = 48271
    // 𝑿𝒊 = 𝒂𝑿𝒊−𝟏 + 𝒄 𝒎𝒐𝒅 𝒎 𝒇𝒐𝒓 𝒊 = 𝟏, 𝟐, 𝟑, …
    seed = (seed * multiplier) % modulus
    return seed/modulus 
}
let seed = 5678
console.log(customRandom(seed))

// Custom Random in a Range
function customRandomInRange(min, max, seed){
    const random = customRandom(seed)
    return Math.floor(random*(max-min+1)) + min
}

console.log(customRandomInRange(1, 10, seed))

// 2 Without using seed, instead of using timestamp
function randomWithoutSeed(){
    // static methods
    const now = Date.now()
    // instance methods
    const now2 = new Date().getTime()
    console.log(now, now2)
    return (now%1000)/1000
}
console.log(randomWithoutSeed())

// Random Integers
function randomInterger(min, max){
    let res = Math.floor(Math.random()*(max-min+1))+ min
    return res
}
console.log(randomInterger(1, 100))
console.log(randomInterger(1, 100))
console.log(randomInterger(1, 100))

// Note: Date.now()
// console.log( new Date().now())  // TypeError: (intermediate value).now is not a function
