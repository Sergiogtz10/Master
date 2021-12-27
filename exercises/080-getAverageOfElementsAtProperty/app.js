function getAverageOfElementsAtProperty(obj,key) {
    // your code here
    if(!obj.hasOwnProperty(key)) {
        return 0;
    }
    if(!Array.isArray(obj[key])) {
        return 0;
    }
    if(obj[key].length === 0) {
        return 0;
    }

    let sum = 0;
    for(var i = 0; i < obj[key].length; i++) {
    sum += obj[key][i];
  }
  return sum / obj[key].length;

    
}

let obj = {
    key: [1, 2, 3]
  };
  var output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output);

  //Todo objeto descendiente de Object hereda el método hasOwnProperty. Este método puede ser usando para determinar si un objeto tiene la propiedad especificada como una propiedad directa de ese objeto; a diferencia del operador in, este método no verifica la cadena prototipo del objeto