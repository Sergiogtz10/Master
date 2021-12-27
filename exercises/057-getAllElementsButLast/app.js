function getAllElementsButLast(array) {
    // your code here
    return array.splice(0,3)
}
let input = [1, 2, 3, 4];
let output = getAllElementsButLast(input);
console.log(output); 