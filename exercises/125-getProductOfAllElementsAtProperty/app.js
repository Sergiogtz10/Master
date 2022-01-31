var obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    let multiply = 1
    if((typeof obj[key]!= "undefined") && Array.isArray(obj[key]) &&  obj[key].length){
      
      for(let element in obj[key]){
       multiply *= obj[key][element]
       
      }
      return multiply
    }
   else { return 0}
}
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24