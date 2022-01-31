function getLargestElement(arr) {
  // your code here
  if(arr.length==0){return 0} 
  let largestelement = arr[0]

  for (let i = 0; i < arr.length; i++){
    if(largestelement < arr[i]){
      largestelement=arr[i]}

  }
  return largestelement
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output);