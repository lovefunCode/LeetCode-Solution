function TreeNode(val, left=null, right=null){
    this.val = (val == undefined ? 0: val)
    this.left = left
    this.right = right
}

const maxDepth = function(root){
    if(!root){
        return 0
    }
    let depth = 0
    let queue = [root]
    let res = []
    while(queue.length){
        let leverLength = queue.length
        for(let i = 0; i < leverLength; i++){
            let currNode = queue.shift()
            if(currNode.left){
                queue.push(currNode.left)
            }
            if(currNode.right){
                queue.push(currNode.right)
            }
            res.push(currNode.val)
        }
        depth++
    }
    console.log(depth, res)
    return {
        depth,
        res
    }
}

const myTree = new TreeNode(5)
myTree.left = new TreeNode(4)
myTree.right = new TreeNode(8)

myTree.left.left = new TreeNode(11)
myTree.right.left = new TreeNode(13)
myTree.right.right = new TreeNode(4)

myTree.left.left.left = new TreeNode(7)
myTree.left.left.right = new TreeNode(2)
myTree.right.right.left = new TreeNode(5)
myTree.right.right.right = new TreeNode(11)

console.log(maxDepth(myTree))