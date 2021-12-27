let obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };

function removeStringValuesLongerThan(num, obj) {
    // your code here
    for (let key in obj) {  
        if (typeof obj[key] === 'string') {  
          if (obj[key].length > num) {  
            delete obj[key];}
        }
      
    } 
}
removeStringValuesLongerThan(6, obj);
console.log(obj);

