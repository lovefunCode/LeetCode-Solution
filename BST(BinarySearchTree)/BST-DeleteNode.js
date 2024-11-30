function TreeNode(val, left=null, right=null){
    this.val = (val == undefined ? 0: val)
    this.left = left
    this.right = right
}

const deleteNode = function(root, val){
    if(root == null){
        return root
    }
    if(val < root.val){
        root.left = deleteNode(root.left, val)
        return root
    }else if(val > root.val){
        root.right = deleteNode(root.right, val)
        return root
    }else{
        // No child
        if(root.left == null && root.right == null){
            return null
        }
        // No left child
        if(root.left == null){
            return root.right
        }
        // No right child
        if(root.right == null){
            return  root.left
        }
        // node has 2 children
        // Solution 1
        // let temp = root.left  // start with the left subtree
        // while(temp.right){
        //     temp = temp.right    // find the in-order node
        // }
        // root.val = temp.val    // change the value to the current delete node value
        // root.left = deleteNode(root.left, temp.val)  // delete the temp node

         // Solution 2
        let temp = root.right   // start with teh right subtree
        while(temp.left){
            temp = temp.left    // find the in-order node
        }
        root.val = temp.val     // change the deletenode val to current find val
        root.right = deleteNode(root.right, temp.val)  // delete the temp node

        return root
    }

}

const myTree = new TreeNode(12)
myTree.left = new TreeNode(9)
myTree.right = new TreeNode(16)

myTree.left.left = new TreeNode(2)
myTree.left.right = new TreeNode(11)

myTree.right.left = new TreeNode(13)
myTree.right.right = new TreeNode(21)

myTree.left.left.left = new TreeNode(1)
myTree.left.left.right = new TreeNode(3)

myTree.left.right.left = new TreeNode(7)
console.log(myTree)

console.log(deleteNode(myTree, 9))