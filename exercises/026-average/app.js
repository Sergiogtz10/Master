// Write your function here
function average() {
    let numbers=average.arguments;
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
       sum+=numbers[i]
    };
    return sum/numbers.length;
}
let output = average(4,6);
console.log(output);