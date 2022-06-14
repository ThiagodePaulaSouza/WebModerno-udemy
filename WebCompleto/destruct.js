// atribuidores aritméticos

function rand([min = 0, max = 1000]){
    if(min>max) [min,max] = [max, min]
    return Math.floor(Math.random() * (max - min) + min)
}

console.log
console.log(rand( [10, 50] ))
console.log(rand( [80] ))
console.log(rand( [2000] ))
console.log(rand( [,5000] ))


// function rand({ min = 0, max = 100 }) {
//     return Math.floor(Math.random() * (max - min) + min)
// }
// console.log(rand( {  } ))

// console.log(rand({ min: 50 }))
// console.log(rand({ max:1000 }))

// console.log(rand( { min: 0, max: 50 } ))

// const [a] = [10]
// console.log(a)


// const [,[, nota]] = [["sangue", "morcego", 12], ["vampiro", 1234321, "suga"]] //confused
// console.log(nota)
// const pessoa = {
//   nome: "thigas",
//   idade: 20,
//   endereco: {
//     logradouro: "Rua J",
//     numero: 10,
//   },
// };

// const { nome, idade } = pessoa;
// console.log(nome, idade);

// const { nome: n, idade: i } = pessoa;
// console.log(n, i);

// const { endereco: { logradouro, numero }} = pessoa;
// console.log(logradouro);
// console.log(numero);
