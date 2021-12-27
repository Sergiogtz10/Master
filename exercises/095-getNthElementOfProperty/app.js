// Write your function here

function getNthElementOfProperty(obj,key,n){
    if ( Array.isArray( obj[key] ) === false ){
      return undefined;
    }
    else if ( obj[key][n] === undefined){
      return undefined;
    }else{
      return obj[key][n];
    }
}

let obj = {
    key: [1, 2, 6]
};

var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); 

 
