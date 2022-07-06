// Alterando estilos
const element = document.querySelector('body')

// element.style.backgroundColor = "#f9f3db"
console.log(element.style.backgroundColor);

// alterando estilos com classList
const estilo = document.querySelector('body')
estilo.classList.add('active', 'green')
console.log(estilo.classList);
estilo.classList.remove('green')
estilo.classList.toggle('active') //se ja tiver remove, se n adiciona