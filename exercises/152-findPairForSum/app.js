function findPairForSum(array, number){
  
  for(let i = 0; i<array.length; i++){
      for(let x = 0; x<array.length;x++){
            if(i!=x && i+x == number){
               return [i,x] 
            }
        }
    }

    
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]