var obj = {
 key: ['Jamil', 'Albrey']
};
function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if((typeof obj[key]!= "undefined") && Array.isArray(obj[key]) &&  obj[key].length){
        return obj[key][index]
    }
  
}
var output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output);