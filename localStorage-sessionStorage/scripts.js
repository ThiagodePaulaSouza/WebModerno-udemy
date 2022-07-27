// SessionStorage
sessionStorage.setItem('number', 123)
console.log(typeof sessionStorage.getItem('number')); //retorna string (OBS: se não tiver ele retorna um objeto)

// adicionar dados
sessionStorage.setItem('opa', 123)

// resgatar dados
const opa = sessionStorage.getItem('opa')
console.log(opa);

// remover dados
sessionStorage.removeItem('number')
sessionStorage.removeItem('opa')

// clear
sessionStorage.clear() // remover até a propriedade deixada pelo sessionStorage

