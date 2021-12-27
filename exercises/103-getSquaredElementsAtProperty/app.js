var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
  let arrayscuared =[]
  for(let element in obj[key]){
    arrayscuared.push(Math.pow(obj[key][element],2));
  }
 

  return arrayscuared
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]