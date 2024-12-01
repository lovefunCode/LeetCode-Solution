const trapRainWater = function(height){
    let len = height.length;
    if(len == 0) return 0
    let maxLeft = new Array(len).fill(0)
    let maxRight = new Array(len).fill(0)
    let minLR = new Array(len).fill(0)
    for(let i = 1; i < len; i++){
        maxLeft[i] = Math.max(height[i-1], maxLeft[i-1])
    }
    for(let i = len-2; i >= 0; i--){
        maxRight[i] = Math.max(height[i+1], maxRight[i+1])
    }
    let water = 0;
    for(let i = 0; i < len; i++){
        minLR[i] = Math.min(maxLeft[i], maxRight[i]) - height[i]
        if(minLR[i] > 0){
            water += minLR[i]
        }
    }
    return water
}

const height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trapRainWater(height))