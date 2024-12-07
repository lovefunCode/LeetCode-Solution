function TreeNode(val, left, right){
    this.val = (val === undefined ? 0 : val)
    this.left = (left == undefined ? null : left)
    this.right = (right == undefined ? null : right)
}

// Pre-Order : Root, left, right
// In-Order: left, Root, right

function bulidTree(preorder, inorder){
    if(!preorder.length || !inorder.length) return null
    let rootVal = preorder[0]
    let root = new TreeNode(rootVal)
    let mid = inorder.indexOf(rootVal)
    console.log(mid)
    root.left = bulidTree(preorder.slice(1, mid+1), inorder.slice(0, mid))
    root.right = bulidTree(preorder.slice(mid+1), inorder.slice(mid+1))
}

// function bulidTree(preorder, inorder){
//     function recurse(pStart, pEnd, inStart, inEnd){
//         // Base Case
//         if(pStart > pEnd || inStart > inEnd)  return null
//         let rootVal = preorder[pStart]
//         let inIndex = inorder.indexOf(rootVal)
//         let nLeft = inIndex - inStart 
//         let root = new TreeNode(rootVal)
//         root.left = recurse(pStart+1, pStart+nLeft, inStart, inEnd-1)
//         root.right = recurse(pStart+1+nLeft, pEnd, inIndex+1, inEnd)
//         return root
//     }
//     return recurse(0, preorder.length - 1, 0, inorder.length-1)
   
// }


let preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
console.log(bulidTree(preorder, inorder))
