//factory é uma função que retorna um objeto
function criarPessoa(nome, idade) {
  return {
    nome,
    idade,
  }
}
console.log(criarPessoa('thigas', 20));