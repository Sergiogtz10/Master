// Write your function 
function countAllCharacters(str){

    var array = {} ;
    
    for (var i = 0; i < str.length; i++){
        array[str.charAt(i)] = str.split(str[i]).length -1; 
    }
    
    return array;

}



let  output = countAllCharacters('banana');
console.log(output);