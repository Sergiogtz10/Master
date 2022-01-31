function findShortestWordAmongMixedElements(arr) {
    // your code here
    var result =""
    var short = 100
    for (var i =0; i<arr.length; i++){
      if (typeof arr[i] === "string"){
            if(arr[i].length < short){
                short = arr[i].length
                result = arr[i]
            }
        } 
    }
    return result
      
}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'