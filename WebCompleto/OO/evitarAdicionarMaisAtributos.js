// preventExtensions || n conse adicionar atributos
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível', Object.isExtensible(produto)); //false

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto);

// seal || n consegue add nem excluir atributos de dentro do obj mas pode mudar
const pessoa = { nome: 'Thiago', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = "Souza"
delete pessoa.nome
pessoa.idade = 20
console.log(pessoa);

// freeze || selado + valores constantes
