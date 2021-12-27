function addToBackOfNew(arr, element) {
    // Write your function here
    let newArr= []
    let newArr1= newArr.concat(arr)
    newArr1.push(element)
    
    return newArr1
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]