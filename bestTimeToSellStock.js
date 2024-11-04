//  2 solutions

// 1. Two Pointers
const maxProfit = function(prices){
    //  left Pointer : Buy  minimum 
    //  right Pointer: Sell Maxmum
    let left = 0;
    let right = 1;
    let maxProfit = 0;
    while(right < prices.length){
        if(prices[left] < prices[right]){
            let profix = prices[right] - prices[left]
            maxProfit = Math.max(profix, maxProfit)
        }else{
            left++
        }
        right++
    }
    return maxProfit
}


// 2 Dynamic Programming
const maxProfitWithDP = function(prices){
    let curMin = prices[0]
    let curMax = 0;
    for(let i = 0; i < prices.length; i++){
        curMin = Math.min(curMin, prices[i])
        curMax = Math.max(prices[i] - curMin, curMax)
    }
    return curMax 
}

const prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))
console.log(maxProfitWithDP(prices))