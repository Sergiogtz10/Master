function transformEmployeeData(array) {
  // your code here
  let arrays = [];

  array.forEach(function(value, index) {
    arrays[index] = {};

    for (i = 0; i < value.length; i++) {
      let array1 = value[i][0];
      let array2 = value[i][1];

      arrays[index][array1] = array2;
    }
  });

  return arrays;
}
let arrays =[
  [
      ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
      ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
]
console.log(transformEmployeeData(arrays));