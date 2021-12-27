// Write your function here
function removeElement(arr , discarder){
    arr.splice(discarder,1);
    return arr;
}

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output);
