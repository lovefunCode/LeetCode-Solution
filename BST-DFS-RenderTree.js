function dfsRenderTree(node){
    let result = []
    if(node.name){
        result.push(node.name)
    }
    if(node.children){
        for(const child of node.children){
            // result = result.concat(dfsRenderTree(child))
            result.push((dfsRenderTree(child)))
        }
    }
    return result
}

const data = { 
    name: "Root", 
    children: [
        { name: "Child1" },
        { name: "Child2" }
    ]
 };

const data2 = { 
    name: "Root", 
    children: [
        { 
            name: "Child1", 
            children: [
                { name: "Grandchild1" },
                { 
                    name: "Grandchild2",
                    children: [
                        { name: "GreatGrandchild1" },
                        { name: "GreatGrandchild2" }
                    ]
                }
            ] 
        },
        { 
            name: "Child2", 
            children: [
                { name: "Grandchild3" },
                { name: "Grandchild4" }
            ] 
        },
        { name: "Child3" }
    ]
};

console.log(dfsRenderTree(data2))
// [
//     'Root',
//     'Child1',
//     'Grandchild1',
//     'Grandchild2',
//     'GreatGrandchild1',
//     'GreatGrandchild2',
//     'Child2',
//     'Grandchild3',
//     'Grandchild4',
//     'Child3'
//   ]

// [
//     'Root',
//     [ 'Child1', [ 'Grandchild1' ], [ 'Grandchild2', [Array], [Array] ] ],
//     [ 'Child2', [ 'Grandchild3' ], [ 'Grandchild4' ] ],
//     [ 'Child3' ]
//   ]