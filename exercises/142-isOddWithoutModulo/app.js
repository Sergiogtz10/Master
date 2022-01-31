function isOddWithoutModulo(num) {
    // your code here
    return ( num & 1 ) ? "true" : "false";
}
var output = isOddWithoutModulo(17);
console.log(output); // --> true