function repeatString(string, num) {
    // your code here
    let array = [];
    while(array.length < num){
        array.push(string);
    }
    return array.join('');

}

var output = repeatString('code', 3);
console.log(output); 