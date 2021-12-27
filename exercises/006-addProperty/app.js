 function addProperty(obj, key) {
    obj[key] = true;
    return obj;
  }
  myObj ={};
  addProperty(myObj, 'myProperty');
  console.log(myObj.myProperty)
