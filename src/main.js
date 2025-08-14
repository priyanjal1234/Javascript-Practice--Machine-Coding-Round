// Flatten Array 

function flattenArray(arr) {
    if(Array.isArray(arr)) {
        return arr.reduce((flat,item) => {
            let newArr = flat.concat(Array.isArray(item) ? flattenArray(item) : item)
            return newArr
        },[])
    }
}

let output = flattenArray([1,[2,[3,4]]])

console.log(output)