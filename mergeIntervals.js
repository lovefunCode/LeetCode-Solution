const mergeIntervals = function(intervals){
    intervals.sort((a,b)=>{
        return a[0]-b[0]
    })
    console.log(intervals)
    let previous = intervals[0]
    let res = [previous]
    for(let curr of intervals){
        // exist overlapping
        if(previous[1] >= curr[0]){
            previous[1] = Math.max(previous[1], curr[1])
        }else{
            res.push(curr)
        }
    }
    return res
}

const intervals = [[1,3],[15,18],[2,6],[8,10],]
console.log(mergeIntervals(intervals))