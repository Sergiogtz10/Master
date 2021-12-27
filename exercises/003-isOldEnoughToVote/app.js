function isOldEnoughToVote(age){
  if (age>=18){
      return true;
  }	
  else {return false;}
}
let result =isOldEnoughToVote();
console.log(result)