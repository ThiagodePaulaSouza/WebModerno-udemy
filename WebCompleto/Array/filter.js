const produtos = [
  { nome: 'notebook', preco: 1231, fragil: true },
  { nome: 'lapis', preco: 123, fragil: false },
  { nome: 'caderno', preco: 41345, fragil: false },
  { nome: 'estojo', preco: 3463, fragil: false },
  { nome: 'vidro', preco: 324, fragil: true },
  { nome: 'plastico bolha', preco: 978, fragil: false },
  { nome: 'celular', preco: 1865231, fragil: true },
]

console.log(produtos.filter(p => !p.fragil)); // fragil false
console.log(produtos.filter(p => p.fragil)); // fragil true

console.log(produtos.filter(p => p.preco > 1000)); // apenas os maiores que 1000' conto