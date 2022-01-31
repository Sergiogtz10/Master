let myobj ={
  name : 'Sam',
  age : 25,
  hasPets : true
}

function getAllKeys(obj) {
  // your code here
 
  let array = [];
  for(element in obj){
   array.push(element)
  }
  return array
}
let output = getAllKeys(myobj);
console.log(output);