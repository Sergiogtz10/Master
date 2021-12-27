function filterEvenLengthWords(words) {
    // your code here
    let arrayfiltrado = words.filter(element => element.length%2===0)
  return arrayfiltrado
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']