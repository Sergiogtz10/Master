function computeProductOfAllElements(arr) {
if(arr.length>0){

    let multiply =1

    for (var i =0; i<arr.length; i++){ 
     multiply *= arr[i]
    }

    return multiply
}
else return 0
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60