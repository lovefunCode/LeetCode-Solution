function objDiff(o1, o2) {
    // only care about common keys
    // if both primitive types and diff, then diff
    if (!isObject(o1) && !isObject(o2)) {
        return o1 === o2 ? {} : [o1, o2]
    }
    // if one is primitive, then diff
    if (!isObject(o1) || !isObject(o2)) {
        return [o1, o2]
    }
    //if one is array, one object
    if (Array.isArray(o1) !== Array.isArray(o2)) {
        return [o1, o2]
    }
    //if both array, or both object, then recursion
    const diff = {}
    for (let key in o1) {
        if (o2.hasOwnProperty(key)) {
            let res = objDiff(o1[key], o2[key])
            if (Object.keys(res).length > 0) {    // check res != {}
                diff[key] = res
            }

        }
    }

    return diff;
}

function isObject(obj) {
    return typeof obj === 'object' && obj != null
}

const obj1 = {
    a: 1,
    v: 3,
    x: [],
    z: {
        a: null
    }
}

const obj2 = {
    a: 2,
    v: 4,
    x: [],
    z: {
        a: 2
    }
}

console.log(objDiff(obj1, obj2))

const obj3 = {
    a: 5,
    v: 6,
    z: [1,2,4,[2,5,7]]
}
const obj4 = {
    a: 5,
    v: 7,
    z: [1,2,3,[1]]
}

console.log(objDiff(obj3, obj4))

