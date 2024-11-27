// NaN is Not-A-Number  is typically the result of invalid numeric operations
// 
console.log(typeof NaN)   //number

console.log(0/0)   //NaN


// toString()  convert number to a string

// toFixed()   return a number written with a number of decimals
console.log(Number("10.00033").toFixed(2))    // 10.00

console.log([1, 2, 3] + [4, 5, 6])   //1,2,34,5,6

// Converting variables to numbers
console.log(Number(true))    // 1
console.log(Number(false))    // 0
console.log(Number("10 33"))    // NaN

console.log(Number(new Date("1970-01-01")))   //0


// parseInt()  parse a string as an integer
console.log(parseInt("-10.33"))   //-10

console.log(parseInt("-10.33", 2))   //-2

// parseFloat()  parse a string into a float-point number
console.log(parseFloat("-10.33"))   //-10.33

console.log(Number.parseFloat("abc42"));  //NaN

console.log(Number.parseInt("abc42"));   //NaN