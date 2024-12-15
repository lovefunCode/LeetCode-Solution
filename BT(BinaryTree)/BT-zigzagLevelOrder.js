function TreeNode(val, left= null, right=null){
    this.val = (val == undefined ? 0 : val)
    this.left = left
    this.right = right
}

const zigzagLevelOrder = function(root){
    if(!root){
        return []
    }
    let queue = [root]
    let res = []
    let depth = 0
    while(queue.length){
        let levelLength = queue.length
        let currArr = []
        for(let i = 0; i < levelLength; i++){
            let currNode = queue.shift()
            if(currNode.left){
                queue.push(currNode.left)
            }
            if(currNode.right){
                queue.push(currNode.right)
            }
            if(depth % 2 == 0){
                currArr.push(currNode.val)
            }else{
                currArr.unshift(currNode.val)
            }
        }
        depth++
        console.log(depth, currArr)
        res.push([...currArr])
    }
    return res
}

const myTree = new TreeNode(5)
myTree.left = new TreeNode(4)
myTree.right = new TreeNode(8)

myTree.left.left = new TreeNode(11)
myTree.right.left = new TreeNode(13)
myTree.right.right = new TreeNode(6)

myTree.left.left.left = new TreeNode(7)
myTree.left.left.right = new TreeNode(2)
myTree.right.right.left = new TreeNode(5)
myTree.right.right.right = new TreeNode(10)

console.log(zigzagLevelOrder(myTree))