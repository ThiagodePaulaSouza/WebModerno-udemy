const alunos = [
  { nome: "Thiago", nota: 6.5, bolsista: true},
  { nome: "Mario", nota: 5.1, bolsista: false},
  { nome: "Joao", nota: 8.6, bolsista: true},
  { nome: "Maria", nota: 7.8, bolsista: false},
  { nome: "Jonas", nota: 9.9, bolsista: false},
  { nome: "Mariela", nota: 10, bolsista: true},
]

// todos são bolsistas?
const todosBolsistas = (result, bolsista) => result && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

// alguem é bolsista?
const algumBolsista = (result, bolsista) => result || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));