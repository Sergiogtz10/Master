
let myobj={
  name : 'Krysten',
  age : 33,
  hasPets : false
}
function convertObjectToList(obj) {
  // your code here

  let array = [];
  for(element in obj){
   array.push([element, obj[element]])
  }
  return array

}

let output = convertObjectToList(myobj);
console.log(output)