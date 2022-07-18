function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)} `
}

const produto = {
  nome: 'Notebook',
  preco: 4589,
  desc: 0.15,
  getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 123867, desc: 0.20}

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

// call tem como parametro primeiro o contexto dps os parametros :D
console.log(getPreco.call(carro, 0.17, '$'));

// apply passa primeiro o contexto dps os parametros como array D:
console.log(getPreco.apply(global, [0.17, '$']));
