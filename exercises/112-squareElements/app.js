function squareElements(arr) {
  // your code here
  let array =[]
  for(let i=0; i < arr.length; i++){
    array.push(Math.pow(arr[i], 2))

    return array
  }
  
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]