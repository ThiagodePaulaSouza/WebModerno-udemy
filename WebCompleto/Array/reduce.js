const alunos = [
  { nome: "Thiago", nota: 6.5, bolsista: false},
  { nome: "Mario", nota: 5.1, bolsista: false},
  { nome: "Joao", nota: 8.6, bolsista: false},
  { nome: "Maria", nota: 7.8, bolsista: false},
  { nome: "Jonas", nota: 9.9, bolsista: false},
  { nome: "Mariela", nota: 10, bolsista: false},
]

const result = alunos.map(a => a.nota).reduce((acumulador, atual) => {
  console.log(acumulador, atual);
  return acumulador + atual
}/*, valor inicial*/)

console.log(result)