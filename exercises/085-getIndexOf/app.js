// Write your function here
function getIndexOf(n, str){
    for(let index =0; index<str.length;index++){
        if(str[index]==n){return index}
        
    }
    return -1
}
var output = getIndexOf('a', 'I am a hacker');
console.log(output); 