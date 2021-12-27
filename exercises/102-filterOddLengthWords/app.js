function filterOddLengthWords(words) {
  
  let arrayfiltrado = words.filter(element => element.length%2)
  return arrayfiltrado
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']