// Write your function here
function getLastElementOfProperty(obj,key){
    if ( Array.isArray( obj[key] ) === false ){
      return undefined;
    }
    else if ( obj[key][obj[key].length-1] === undefined){
      return undefined;
    }else{
      return obj[key][obj[key].length-1];
    }
}

let  obj = {
    key: [1, 2, 5]
};

var output = getLastElementOfProperty(obj, 'key');
console.log(output); 
