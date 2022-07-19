const escola = [{
  nome: 'Turma 1',
  alunos: [{
    nome: 'Gustavo',
    nota: 9.2
  }, {
    nome: 'Matheus',
    nota: 5.9
  }]
}, {
  nome: 'Turma 2',
  alunos: [{
    nome: 'Lucas',
    nota: 6.2
  }, {
    nome: 'Julia',
    nota: 8.9
  }]
}]

// obter a notas de todos os alunos idenpendente da turma

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1);

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2);