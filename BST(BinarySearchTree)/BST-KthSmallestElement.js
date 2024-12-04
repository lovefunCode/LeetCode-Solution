function TreeNode(val, left = null, right = null){
    this.val = (val == undefined ? 0 : val)
    this.left = left
    this.right = right
}
const kthSmallest = function(root, k){
    let arr = []
    function inOrder(root){
        if(!root) return null
        inOrder(root.left)
        arr.push(root.val)
        inOrder(root.right)
    }
    inOrder(root)
    for(let i = 0; i < arr.length; i++){
        if(i == k-1){
            return arr[i]
        }
    }
}

// Test case 1
const root1 = new TreeNode(3)
root1.left = new TreeNode(1, null, new TreeNode(2))
root1.right = new TreeNode(4)
const k1 = 1
console.log(`Test Case 1: Expected Output: 1, Actual Output: ${kthSmallest(root1, k1)}`);

// Test case 2
const root2 = new TreeNode(5)
root2.left = new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4))
root2.right = new TreeNode(6)
const k2 = 3
console.log(`Test Case 2: Expected Output: 3, Actual Output: ${kthSmallest(root2, k2)}`);