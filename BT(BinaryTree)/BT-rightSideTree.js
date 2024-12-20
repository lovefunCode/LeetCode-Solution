function TreeNode(val, left=null, right=null){
    this.val = (val == undefined ? 0: val)
    this.left = left
    this.right = right
}
const rightSideView = function(root){
    if(root == null){
        return null
    }
    let queue = [root]
    let depth = 0
    let result = []
    let result2 =[]
    while(queue.length){
        let levelLen = queue.length
        let level = []
        // Solution 1: add the rightmost node's value for this level to the result
        result.push(queue[levelLen-1].val)
        for(let i = 0; i < levelLen; i++){
            let currNode = queue.shift()
            if(currNode.left){
                queue.push(currNode.left)
            }
            if(currNode.right){
                queue.push(currNode.right)
            }
            level.push(currNode.val)
        }
        depth++
        // console.log(level, level[level.length-1])
        // solution2: add the each level's last val to the result2
       result2.push(level[level.length-1])
    }
    console.log('----result', result, result2)
    return result
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);

console.log(rightSideView(root))