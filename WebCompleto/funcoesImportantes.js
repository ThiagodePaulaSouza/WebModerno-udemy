const pessoa = {
  nome: 'joao',
  idade: 10,
  peso: 50,
}

// console.log(Object.keys(pessoa));
// console.log(Object.values(pessoa));
// console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`);
})

// Destructuring
Object.entries(pessoa).forEach(([keys, values]) => {
  console.log(`${keys}: ${values}`);
})

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true, // listado em keys
  writable: false, // não alteravel
  value: '05/05/2000'
})

// não altera
pessoa.dataNascimento = '01/10/1998'
console.log(pessoa.dataNascimento);

console.log(Object.keys(pessoa));

// ECMAScript 2015
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const objA = Object.assign(dest, o1, o2) //coloca tudo no dest e sobrescreve caso haja atributo igual

console.log(dest);
console.log(objA);

Object.freeze(objA) // trava e não deixa alterar
objA.c = 1024875
console.log(objA);