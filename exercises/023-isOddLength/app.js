// Write your function here
function isOddLength(word) {
    if (word.length%2){
      return true;
    } else {
      return false;
    }
}
let output = isOddLength('special');
console.log(output);