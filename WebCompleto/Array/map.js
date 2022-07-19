const nums = [1, 2, 3, 4, 5];

//gerar dobro em todos os elementos e voltar o resultado em uma const

const dobro = nums.map((n) => n * 2);

console.log(dobro);

const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const toReal = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

const resultado = nums.map(soma10).map(triplo).map(toReal)

console.log(resultado);

resultado.forEach((value, indice) => {
  console.log(`${indice + 1}) ${value}`);
});
