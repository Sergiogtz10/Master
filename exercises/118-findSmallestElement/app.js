function findSmallestElement(arr) {
    if(arr.length==0){return 0}
    let smallelement = arr[0]
    for (let i = 0; i < arr.length; i++){
        if(smallelement>arr[i]){
            smallelement=arr[i]
            
        }

    }
    return smallelement
    
}   
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); 