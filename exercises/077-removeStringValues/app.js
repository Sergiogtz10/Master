function removeStringValues(obj) {
    // your code here
    Object.keys(obj).forEach(function(key){

        if(typeof(obj[key]) == "string"){
             delete obj[key];
        }
    });
    
    return obj;
}

var obj = {
    name: 'Sam',
    age: 20
}
 
removeStringValues(obj);
  console.log(obj);