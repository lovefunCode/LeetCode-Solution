function TreeNode(val, left=null, right=null){
    this.val = (val==undefined ? 0: val)
    this.left = left
    this.right = right
}
const sortedArrayToBST = function(nums){
    function recurse(currNums){
        if(!currNums.length) return null
        const midIndex = Math.floor((0 + currNums.length)/2)
        let rootVal = currNums[midIndex]
        let root = new TreeNode(rootVal)
        root.left = recurse(currNums.slice(0, midIndex))
        root.right = recurse(currNums.slice(midIndex+1))
        return root
    }
    return recurse(nums)
}
const nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
console.log(sortedArrayToBST(nums))