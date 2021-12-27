var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
  if((typeof obj[key]!= "undefined") && Array.isArray(obj[key]) &&  obj[key].length >0){
    let array = obj[key]
    return array.slice(0, array.length-1)
  }

  else{
    return []
  }
}

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]