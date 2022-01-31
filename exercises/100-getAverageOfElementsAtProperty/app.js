function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if((typeof obj[key] != "undefined") && Array.isArray(obj[key]) && obj[key].length > 0){
  let suma = 0
  for(let element in obj[key]){
    suma+= obj[key][element]
  }

  return suma/obj[key].length

}else return 0

}


