const d = new Date('2024-11-30')
console.log(d)   //2024-11-30T00:00:00.000Z

const d2 = new Date()
console.log(d2)   //Sat Nov 30 2024 15:51:19 GMT+0000 (Greenwich Mean Time)



const currMonth = d2.getMonth()
console.log(currMonth)  //10


const currDay = d2.getDate()
console.log(currDay)  //30

const currHour = d2.getHours()
console.log(currHour)  //15

const currMinute = d2.getMinutes()
console.log(currMinute)  //57

// usually use Date static method Date.now() get as timestamp
console.log(Date.now())  //1735063321572
console.log("+++++++")
// or can use instantiate method new Date().getTime()  
console.log(new Date().getTime())  //1735063321572

function formatDate(time=null){
    const d = new Date('2024-1-3 6:1')
    const currYear = d.getFullYear()
    //Get month as a number (0-11)
    let currMonth = d.getMonth() + 1
    // Get day as a number (1-31)
    let currDay = d.getDate()
    
    let currHour = d.getHours()
    let currMin = d.getMinutes()

    if(time){
        return [currYear, currMonth, currDay].map(formatNumber).join('-') + " " + [currHour, currMin].map(formatNumber).join(':')
    }
    return [currYear, currMonth, currDay].map(formatNumber).join('-')

}

function formatNumber(n){
    n = String(n).padStart(2, '0')
    return n
}

console.log(formatDate('time'))
console.log(formatDate())

// 1. Date static method:
//    Date.now()
//    Date.parse()
//    Date.UTC()

//  2. Date instance methods
//  new Date().getDate()
//  new Date().getDay()
//  new Date().getFullYear()
//  new Date().getMonth()

