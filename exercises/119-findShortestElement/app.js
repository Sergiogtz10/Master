function findShortestElement(arr) {
    // your code here
    if(arr.length==0){return ''} 
    let result =[]
    let shortestelement = arr[0].length
    for (let i = 0; i < arr.length; i++){
        if(shortestelement > arr[i].length){
            shortestelement=arr[i].length
            result.push(arr[i])
        }
        else if(shortestelement===arr[i].length){
        result.push(arr[i])
        }
    }
    return result[0]
}
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'