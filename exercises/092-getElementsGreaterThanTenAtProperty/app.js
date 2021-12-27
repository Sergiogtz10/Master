// Write your function here
function getElementsGreaterThan10AtProperty(obj,key){

    let array = [];
    for(element in obj[key]){
        if(obj[key][element]>10){
            array.push(obj[key][element]);
        }
    }

    return array
}
let obj = {
    key: [1, 20, 30]
  };
  var output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output);