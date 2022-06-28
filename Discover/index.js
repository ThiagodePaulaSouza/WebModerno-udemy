const teste = ["python", "javascript", "csharp", "java", "lua"];

// "adicionar um item no final"
teste.push("php");
console.log(teste);

// "adicionar no começo"
teste.unshift("sql");
console.log(teste);

// "remover do fim"
teste.pop();
console.log(teste);

// "remover do começo"
teste.shift();
console.log(teste);

// pegar somente alguns elementos em qualquer posição do array
console.log(teste.slice(2, 5));

// "remover 1 ou mais items em qualquer posição do array"
teste.splice(1, 1);
console.log(teste);

// encontrar a posição de um elemento no array
let index = teste.indexOf("lua");
teste.splice(index, 1);
console.log(teste);
