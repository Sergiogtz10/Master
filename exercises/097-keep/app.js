// Write your function here
function keep (arr, n){
    let arrayfiltrado = arr.filter(element => element === n)
    return arrayfiltrado
}

let output = keep([1, 2, 3, 2, 1], 2) 
console.log(output);
