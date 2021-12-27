var obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
  let array = [];
  for (let element in obj[key] ){
    if(obj[key][element].length%2==0){
      array.push(obj[key][element])
    }
  }
  
  return array
}


var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); 
