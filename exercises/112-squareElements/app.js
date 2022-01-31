function squareElements(arr) {
  var newarr = []
  for(var i=0;i<arr.length; i++){
      newarr.push(arr[i]*arr[i])
  }
  return newarr
  }
  


var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]