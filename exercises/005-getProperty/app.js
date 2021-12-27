function getProperty(obj, key) {
  if (obj) return obj[key];
  return undefined
}
let obj ={key:'value'}
let result = getProperty(obj, 'key');
console.log(result);