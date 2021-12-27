var obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
  if ((typeof obj[key] != "undefined") && Array.isArray(obj[key]) && obj[key].length > 0) {
    let largest = obj[key][0]
    for (let element in obj[key]){
      if(obj[key][element] > largest){
        largest = obj[key][element]
      }
    }
    return largest
  
  } else{return []}
 
    
}
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4