function isEvenWithoutModulo(num) {
    // your code here
    return !( num & 1 ) ? "true" : "false";
}
var output = isEvenWithoutModulo(8);
console.log(output); // --> true