// Write your function here
function getElementsThatEqual10AtProperty(obj,key){

    let array = [];
    for(element in obj[key]){
        if(obj[key][element]===10){
            array.push(obj[key][element]);
        }
    }

    return array
}



let obj = {
    key: [1000, 10, 50, 10]
};

let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output);

