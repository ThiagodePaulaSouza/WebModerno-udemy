let aprovados = ['thigas', 'helen', 'julia']
aprovados[4] = 'beatriz'
aprovados.push('natalia')
console.log(aprovados);

aprovados.sort()
console.log(aprovados);

delete aprovados[1]
console.log(aprovados);

aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1, 1, 'adicionei1', 'adicionei2')
//indice, remover, adicionar...
console.log(aprovados);

aprovados.pop() //remove ultimo
console.log(aprovados);

aprovados.shift() //remove primeiro
console.log(aprovados);

aprovados.unshift("sandro") //add primeiro
console.log(aprovados);

aprovados.splice(2,0,'Marcelo', "mauricio")
console.log(aprovados);

const novoArray = aprovados.slice(2) // a partir do indice 2 ele pega o resto do array e retorna um novo array
console.log(novoArray);

console.log(aprovados);
const pegarEntreIndices = aprovados.slice(1,4) // do indice 1 até indice 4(n pega indice 4)
console.log(pegarEntreIndices);

