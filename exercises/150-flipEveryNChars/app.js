function flipEveryNChars(input, n) {
    // your code here
    let string = "";
      
    let reference = 0;
    for (i = reference; i < input.length; i++) {
    
        string+= input.slice(reference, reference + n).split("").reverse().join("");
       reference += n;
    }
    
    return string;
}

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma