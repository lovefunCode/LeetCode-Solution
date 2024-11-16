class TreeNode{
    constructor(val, left, right){
        this.val = (val === undefined) ? 0 : val
        this.left = (left=== undefined) ? null: left
        this.left = (right=== undefined) ? null: right
    }
}

// Example usage
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

function levelOrder(root){
    if(!root) return []; 
    let queue = [root]
    let result = []
    let depth = 0
    while(queue.length){
        let levelSize = queue.length
        let levelRes = []
        // traverse each level
        for(let i = 0; i < levelSize; i++){
            let currNode = queue.shift()
            levelRes.push(currNode.val)
            if(currNode.left){
                queue.push(currNode.left)
            }
            if(currNode.right){
                queue.push(currNode.right)
            }
        }
        depth++
        result.push(levelRes.slice())
        // result.push([...levelRes])
    }
    return{
        depth,
        result 
    }

}

console.log(levelOrder(root));

// { depth: 3, 
//   result: [ 
//     [ 3 ], 
//     [ 9, 20 ], 
//     [ 15, 7 ] 
//   ] 
// }