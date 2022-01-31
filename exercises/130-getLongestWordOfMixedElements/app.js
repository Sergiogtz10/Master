function getLongestWordOfMixedElements(arr) {
    // your code here
    var result =""
    var longest = 0
    for (var i =0; i<arr.length; i++){
      if (typeof arr[i] === "string"){
            if(arr[i].length > longest){
                longest = arr[i].length
                result = arr[i]
            }
        } 
    }
    return result
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'