String.prototype.reverse = function() {
  return this.split('').reverse().join('')
}

console.log("Thiago de Paula Souza".reverse());

Array.prototype.first = function() {
  return this[0]
}

console.log([1,22,3,4,5,6,132].first());

// NÃO SUBSTITUA FUNÇÕES PADROES!