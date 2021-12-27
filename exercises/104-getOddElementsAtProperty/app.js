var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
  let array = [];
  for (let element in obj[key] ){
    if(obj[key][element]%2 !==0){
      array.push(obj[key][element])
    }
  }
  
  return array
    
  

}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]