// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    let array = [];
    for (let element in obj[key] ){
      if(obj[key][element].length%2 !==0){
        array.push(obj[key][element])
      }
    }
    
    return array
  }

let obj = {
    key: ['It', 'has', 'some', 'words']
};

let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output);
