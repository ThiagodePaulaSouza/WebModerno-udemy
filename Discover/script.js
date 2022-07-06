// Manipulando conteúdo

//textContent 
const element = document.querySelector('h1')
element.textContent += " OLA DOM"
console.log(element.textContent);

//InnerText
element.innerText = "Boa dia"

//InnerHTML
element.innerHTML = "ola dev <small>UII</small>"

//value
const input = document.querySelector('input')
console.log(input.value);
input.value += " aoba tudo bom"


// Manipular Atributos

// setAttribute()
const header = document.querySelector('header')
header.setAttribute('id', 'header')
const headerId = document.querySelector('#header')

// getAttribute()
console.log(headerId.getAttribute('id'))
console.log(headerId.getAttribute('class'))

// removeAttribute()
header.removeAttribute('id')
header.removeAttribute('class')

