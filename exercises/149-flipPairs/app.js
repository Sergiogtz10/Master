function flipPairs(input){
    let string = "";
      
      let reference = 0;
      for (i = reference; i < input.length; i++) {
      
          string+= input.slice(reference, reference + 2).split("").reverse().join("");
         reference += 2;
      }
      
      return string;
 }
 
let input = 'check out how interesting this problem is, it\'s insanely interesting!';
let output = flipPairs(input);
 console.log(output);
