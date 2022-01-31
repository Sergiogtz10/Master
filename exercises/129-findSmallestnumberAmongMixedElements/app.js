function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  var result = 0;
	var smallest = 100;

	for (var i = 0; i < arr.length; i++){
		if (typeof (arr[i]) === "number"){
		 
			if (arr[i] < smallest){
				smallest = arr[i];
				result = arr[i];
			}
		}
	}
	return result;
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output);