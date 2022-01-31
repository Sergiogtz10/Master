function transformFirstAndLast(array) {
  // your code here
  let object = {};
  object[array[0]] = array[array.length - 1];

  return object;
}
console.log(transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']))