function MeuObjeto() {}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__);       //true
console.log(MeuObjeto.prototype === obj1.__proto__);  //true

MeuObjeto.prototype.nome = "Thiago"
MeuObjeto.prototype.falar = function() {
  console.log(`Bom dia!, Meu nome é: ${this.nome}`);
}

obj1.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Miguel'
obj3.falar()


// KKKKKKKKKKKKKKKKKKKKKKKKKKK || hierarquia de uma função criada
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);

