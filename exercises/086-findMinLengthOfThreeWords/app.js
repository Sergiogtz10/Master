// Write your function here
function findMinLengthOfThreeWords(word1,word2,word3){
    let min  = 20;
    let words = [word1, word2, word3];
   
    for (var i = 0; i < words.length; i++) {
        if(words[i].length < min){
         min = words[i].length
        }
    }
    return min
}
let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);
