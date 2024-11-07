class MedianFinder{
    constructor(){
        this.array = []
    }
    addNum(num){
        if(!this.array.length){
            this.array.push(num)
        }else{
            let left = 0;
            let right = this.array.length -1 
            while(left < right){
                let mid = left + Math.floor((right-left)/2)
                if(num < this.array[mid]){
                    left = mid+1
                }else{
                    right = mid-1
                }
            }
            this.array.splice(left, 0, num)
        }
    }
    findMedian(){
        //Odd
        let mid = Math.floor(this.array.length/2)
        if(this.array.length % 2 !== 0){
            return this.array[mid]
        }else{
            //Even
            return (this.array[mid] + this.array[mid-1])/2
        }
    }
}

const medianFinder = new MedianFinder()
medianFinder.addNum(1)
medianFinder.addNum(3)
medianFinder.addNum(2)
console.log(medianFinder.findMedian())