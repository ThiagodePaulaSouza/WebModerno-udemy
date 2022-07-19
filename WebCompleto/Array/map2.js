const carrinhoDeCompra = [
  '{ "nome": "Primeiros Socorros", "tipo": "Saude", "preco": 8.00 }',
  '{ "nome": "Lapizera", "tipo": "Escolar", "preco": 4110.45 }',
  '{ "nome": "Estojo", "tipo": "Escolar", "preco": 11241.16 }',
  '{ "nome": "Borracha", "tipo": "Escolar", "preco": 31.46 }',
  '{ "nome": "Caneta", "tipo": "Escolar", "preco": 990.99 }',
  '{ "nome": "Caderno", "tipo": "Escolar", "preco": 2.36 }',
  '{ "nome": "Lapis", "tipo": "Escolar", "preco": 43.31 }',
]

const toObj = json => JSON.parse(json)
const nome = produto => produto.nome
const tipo = produto => produto.tipo
const preco = produto => produto.preco

const resultNome = carrinhoDeCompra.map(toObj).map(nome)
const resultTipo = carrinhoDeCompra.map(toObj).map(tipo)
const resultPreco = carrinhoDeCompra.map(toObj).map(preco)

console.log(resultPreco);