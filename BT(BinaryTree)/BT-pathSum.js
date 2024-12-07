function TreeNode(val, left=null, right= null){
    this.val = (val !== undefined ? val: 0)
    this.left = left
    this.right = right
}
const pathSum = function(root, targetSum){
    let res = []
    dfs(root, [], targetSum)
    function dfs(curNode, arr, leftVal){
        if(curNode == null){
            return []
        }
        arr.push(curNode.val)
        if(!curNode.left && !curNode.right && leftVal == curNode.val){
            res.push([...arr])
        }
        dfs(curNode.left, arr, (leftVal-curNode.val))
        dfs(curNode.right, arr, (leftVal-curNode.val))
        
        arr.pop()
    }
    return res
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

console.log(pathSum(myTree, 22))