function  timeDifference(date1, date2){
    const d1 = new Date(date1)
    const d2 = new Date(date2)
    console.log(d1, d2)
    const diff = Math.abs(d2.getTime()-d1.getTime())
    // console.log(diff)
    // 1 day = 24 * 60 * 60 * 1000
    const diffDay = Math.ceil(diff/ (24 * 60 * 60 * 1000))
    // console.log(diffDay, diffDay*8)
    // console.log(`difference day is ${diffDay} \n , total hours is ${diffDay*8}`)
    return `difference day is ${diffDay} \n , total hours is ${diffDay*8}`
}

// Example usage:
const date1 = "2023-6-30";
const date2 = "2024-12-20";
const date3 = "2024-12-30";

console.log(timeDifference(date1, date2))

console.log(timeDifference(date1, date3))