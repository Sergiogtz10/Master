function getLongestElement(arr) {
    // your code here
    if(arr.length==0){return ''} 
    let result =[]
    let longestelement = arr[0].length
    for (let i = 0; i < arr.length; i++){
        if(longestelement < arr[i].length){
            result.push(arr[i])
        }
        else if(longestelement== arr[i]){
        result.push(arr[i])
        }
    }
    return result[0]
}
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'