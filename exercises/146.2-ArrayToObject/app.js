function fromListToObject(array) {
  // your code here
  let object = {};
  array.forEach(function(element) {
    object[element[0]] = element[1];
  });

  return object;
}
let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }