const tag = (partes, ...valores) => {
  console.log(partes);
  console.log(valores);
  return "outra string";
};

const aluno = "Thiago";
const situacao = "Reprovado";

// console.log(tag `${aluno} está ${situacao}`);

const real = (partes, ...valores) => {
  const resultado = [];
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`;
    resultado.push(partes[indice], valor);
  });
  return resultado.join("");
};

const preco = 299.9;
const precoParcela = 11;
console.log(`1x de ${preco} ou 3x de ${precoParcela}`);
console.log(real`1x de ${preco} ou 3x de ${precoParcela}`);
