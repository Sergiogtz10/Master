function multiplyBetween(num1, num2) {
    // your code here
    let multiply = 1;
    if (num2 <= num1) {
      return 0;
    }
    for (var i = num1; i < num2; i++) {
        multiply*= i;
     
    }
    return multiply;
}

var output = multiplyBetween(2, 5);
console.log(output); // --> 24