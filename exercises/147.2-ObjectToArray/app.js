let myobj={
  name : 'Krysten',
  age : 33,
  hasPets : false
}
function listAllValues(obj) {
  // your code here

  let array = [];
  for(element in obj){
   array.push(obj[element])
  }
  return array

}

let output = listAllValues(myobj);
console.log(output)