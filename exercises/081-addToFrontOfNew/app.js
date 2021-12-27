
function addToFrontOfNew(arr, element) {
    // Write your function here
    let newArr= []
    let newArr1= newArr.concat(arr)
    newArr1.unshift(element)
    
    return newArr1
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]