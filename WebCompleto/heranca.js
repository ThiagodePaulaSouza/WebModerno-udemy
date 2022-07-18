const ferrari = {
  modelo: 'F40',
  velMax: 345,
}

const volvo = {
  modelo: 'V40',
  velMax: 200,
}

// acessar o prototipo do obj
console.log(ferrari.prototype); // undefined
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype); //true
console.log(volvo.__proto__ === Object.prototype); //true
console.log(Object.prototype.__proto__); //null

// Object é uma função e toda função tem prototype
function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);
