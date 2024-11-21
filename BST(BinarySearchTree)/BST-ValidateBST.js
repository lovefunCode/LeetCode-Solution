function TreeNode(val, left= null, right = null){
    this.val = (val == undefined ? null: val)
    this.left = left
    this.right = right
}

const isValidBST = function(root){
    function recurse(root, min, max){
        if(root === null) return true
        if(root.val > max || root.val < min) return false
        return recurse(root.left, min, root.val) && recurse(root.right, root.val, max)
    }
    return recurse(root, -Infinity, Infinity)
}
// Constructing the binary tree:
//      2
//     / \
//    1   3
let root = new TreeNode(2)
root.left = new TreeNode(1)
root.right = new TreeNode(3)
console.log(isValidBST(root))


// Constructing the binary tree:
//      5
//     / \
//    1   4
//       / \
//      3   6

let root2 = new TreeNode(5)
root2.left = new TreeNode(1)
root2.right = new TreeNode(4)
root2.right.left = new TreeNode(3)
root2.right.right = new TreeNode(6)
console.log(isValidBST(root2))

