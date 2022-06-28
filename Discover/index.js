const word = "aprender é legal porem não é facil";
const arrayWord = word.split(" ");
const wordWithUnderscore = arrayWord.join("_")

console.log(
  `
    separar um texto que contem espaços e colocar _
    texto: 
    
    ${word}

    array do texto: 
    ${arrayWord}

    _ entre espaços: 
    ${wordWithUnderscore}


  `
);
