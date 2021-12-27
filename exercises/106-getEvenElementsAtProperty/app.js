
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
  let array = [];
  for (let element in obj[key] ){
    if(obj[key][element]%2==0){
      array.push(obj[key][element])
    }
  }
  
  return array

}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]