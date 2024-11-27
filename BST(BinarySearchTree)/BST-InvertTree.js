function TreeNode(val, left, right){
    this.val = (val == undefined ? 0 : val)
    this.left = (left == undefined ? 0 : left)
    this.right = (right == undefined ? 0 : right)
}

const invertTree = function(root){
    if(root == undefined){
        return null
    }
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
    return root
}

const root = new TreeNode(4)
root.left = new TreeNode(2)
root.right = new TreeNode(7)

root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(9)

console.log(invertTree(root))