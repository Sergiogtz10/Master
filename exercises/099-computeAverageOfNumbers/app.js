// Write your function here
function computeAverageOfNumbers(array){
  let suma = 0
    for(let i = 0; i < array.length;i++ ){
        suma += array[i]
    }
   return  suma/array.length
}


let input = [1,2,3,4,5];
let output = computeAverageOfNumbers(input);
console.log(output);