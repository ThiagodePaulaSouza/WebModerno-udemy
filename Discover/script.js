//retorna o elemento pouco mais rapido ~
const element = document.getElementById('blog-title')
console.log(element);

//retorna o HTMLColletion
const classe = document.getElementsByClassName('one')
console.log(classe);

//retorna o HTMLColletion
const tag = document.getElementsByTagName('p')
console.log(tag);

//retorna o elemento
const selector = document.querySelector('.one')
console.log(selector);

//retorna o elemento
const atributo = document.querySelector('[src]')
console.log(atributo); 

//retorna o NodeList
const todosSelectors = document.querySelectorAll('#outro-id')
console.log(todosSelectors);

// diferença entre html colection e node
// no nodelist vc consegue utilizar foreach
const elementosAll = document.querySelectorAll('#mais-id')
elementosAll.forEach(el => console.log(el));