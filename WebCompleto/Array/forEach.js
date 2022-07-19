const aprovados = ['thiga', 'luan', 'thiaguin', 'predo', 'biel', 'iago', 'vito', 'leo', 'filipe']

aprovados.forEach((nome, indice) => {
  console.log(indice, nome);
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado);

aprovados.forEach(exibirAprovados)