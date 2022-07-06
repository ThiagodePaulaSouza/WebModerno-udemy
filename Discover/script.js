// Criando e adicionando elementos

// createElement
const div = document.createElement('div')
div.innerText = "Olá div"

const div2 = document.createElement('div')
div2.innerText = "Olá div2"

const div3 = document.createElement('div')
div3.innerText = "Olá div3"

// append prepend
const body = document.querySelector('body')
body.append(div)
body.prepend(div2)


// insert before
const script = body.querySelector('script')
body.insertBefore(div, script)

const header = body.querySelector('header')
body.insertBefore(div3, header.nextElementSibling)