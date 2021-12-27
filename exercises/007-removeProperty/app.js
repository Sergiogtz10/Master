function removeProperty(obj, key) {
 if(obj && obj[key]) delete obj[key]
}
var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'Sam');
console.log(obj.name);