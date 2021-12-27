// Write your function here
function findMaxLengthOfThreeWords(word1, word2, word3){

let max  = 0;
let words = [word1, word2, word3];

for (var i = 0; i < words.length; i++) {
    if(words[i].length > max){
     max = words[i].length
    }
}
return max
}

let output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); 