function isPersonOldEnoughToVote(person) {
  // tu codigo aqui
if (person.age>=18){return true}
else {return false}

};
let obj = {
  age: 19
};
let output = isPersonOldEnoughToVote(obj);
console.log(output);