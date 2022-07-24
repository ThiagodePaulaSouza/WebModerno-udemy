const tag = (partes, ...valores) => {
  console.log(partes);
  console.log(valores);
  return 'outra string'
}

const aluno = 'Thiago'
const situacao = 'Reprovado'

console.log(tag `${aluno} está ${situacao}`);