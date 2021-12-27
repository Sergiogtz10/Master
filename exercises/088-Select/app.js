// Write your function here
function select (arr, obj){

    let newobj = {};
    
    for (var key in obj){
        for(let i = 0; i<arr.length; i++){
            if(arr[i]===key){
                newobj[key] = obj[key];
            }

        }
    }

    return newobj

}

let arr = ['a', 'c', 'e'];
let  obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output);


