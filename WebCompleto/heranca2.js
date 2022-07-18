Object.prototype.attr0 = 0
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: 3 }
const filho = {__proto__: pai, attr3: 'C'}

// o attr3 sombreou os acima da cadeia deixando assim apenas o filho como resposta
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}KM/h de ${this.velMax}Km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324 // shadowing
}

const volvo = {
  modelo: 'V40',
  status() {
    // super para referenciar o prototipo
    return `${this.modelo}: ${super.status()}` // ta chamando o metodo do prototipo, se usasse o this ele ficaria chamando infinitamente (recursivo)
  }
}

Object.setPrototypeOf(ferrari, carro) //ferrari tem carro como protótipo
Object.setPrototypeOf(volvo, carro) //volvo tem carro como protótipo

console.log(ferrari);
console.log(volvo);
volvo.acelerarMais(100)
console.log(volvo.status());


ferrari.acelerarMais(300)
console.log(ferrari.status());