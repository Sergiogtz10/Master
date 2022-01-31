function getLargestNumberAmongMixedElements(arr) {
    // your code here
    var result = 0;
	var Largest = 0;

	for (var i = 0; i < arr.length; i++){
		if (typeof (arr[i]) === "number"){
		 
			if (arr[i] > Largest){
				Largest = arr[i];
				result = arr[i];
			}
		}
	}
	return result
}


var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5