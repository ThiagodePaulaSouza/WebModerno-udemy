// Inserir Dados
localStorage.setItem('name', 'thiago')

// reset sem perder dados

// Resgatar dados
const name = localStorage.getItem('name')
console.log(name);

// resgatar dados que nao existem
const lastName = localStorage.getItem('lastname')
console.log(lastName);

// remover item
localStorage.removeItem("name")

// como vem o resultado?
localStorage.setItem('a', 1)
localStorage.setItem('b', 2)
localStorage.setItem('c', 3)

console.log(typeof localStorage.getItem('a')); // sempre retorna string

// limpa todos os itens 
localStorage.clear()