var obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {

  if ((typeof obj[key] != "undefined") && Array.isArray(obj[key]) && obj[key].length > 0) {
  let small = obj[key][0]
  for (let element in obj[key]){
    if(obj[key][element] < small){
      small = obj[key][element]
    }
  }
  
    return small

  } 
  
  else {
   return []
  }

}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1