function BFSDomTraversel(root){
    let result = []
    let queue = [root]
    while(queue.length){
        let level = queue.length
        let levelRes = []
        for(let i = 0; i< level; i++){
            let currNode = queue.shift()
            levelRes.push(currNode.tagName)
            if(currNode.children && currNode.children.length){
                for(const child of currNode.children){
                    queue.push(child)
                }
            }  
        }
        result.push([...levelRes])
    }
    return result
}

// Define a mock DOM tree
const mockDOM = {
    tagName: "BODY",
    children: [
        {
            tagName: "DIV",
            children: [
                { tagName: "P", children: [] },
                { tagName: "SPAN", children: [] }
            ]
        },
        {
            tagName: "SECTION",
            children: [
                { tagName: "H1", children: [] }
            ]
        }
    ]
};

console.log(BFSDomTraversel(mockDOM))
//[ [ 'BODY' ], [ 'DIV', 'SECTION' ], [ 'P', 'SPAN', 'H1' ] ]