function isRotated(str1, str2) {
    // your code here
    return str1.length === str2.length && str2.repeat(2).includes(str1);
}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false