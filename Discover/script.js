// Navegando pelos elementos
// parentNode parentElement
const body = document.querySelector("body");
console.log(body.parentNode); // ver quem é o nó pai
console.log(body.parentElement); // ver quem é o nó pai

// childNodes children
const el = document.querySelector("body");
console.log(el.childNodes);
console.log(el.children); // elimina os espaços vazios e traz em htmlColletion
console.log(el.firstChild);
console.log(el.firstElementChild); // elimina os espaços vazios
console.log(el.lastChild);
console.log(el.lastElementChild); // "elimina os espaços vazios"

// Navegar pelos elementos irmãos

const element = document.querySelector("header");
console.log(element.nextSibling);
console.log(element.nextElementSibling); // desconsidera espaço vazio
console.log(element.previousSibling);
console.log(element.previousElementSibling); // desconsidera espaço vazio
