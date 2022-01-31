function computeSummationToN(n) {
  var suma =0
  for (var i =1; i <=n; i++){
    suma += i
  }
  return suma
}

var output = computeSummationToN(6);
console.log(output); // --> 21