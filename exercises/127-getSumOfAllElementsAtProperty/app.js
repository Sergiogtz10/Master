var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    let suma = 0
    if((typeof obj[key]!= "undefined") && Array.isArray(obj[key]) &&  obj[key].length){
      
      for(let element in obj[key]){
       suma += obj[key][element]
       
      }
      return suma
    }
   else { return 0}
}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13