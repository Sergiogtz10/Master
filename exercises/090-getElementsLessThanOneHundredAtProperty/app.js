// Write your function here
function getElementsLessThan100AtProperty(obj,key){

    let array = [];
    for(element in obj[key]){
        if(obj[key][element]<100){
            array.push(obj[key][element]);
        }
    }

    return array
}


let obj = {
    key: [1000, 20, 50, 500]
};

let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output);