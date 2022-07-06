const h1 = document.querySelector('h1')

h1.addEventListener('click', print)


function print() {
    console.log("Print");
}

const input = document.querySelector('input')

// input.onkeydown = function () {
//     console.log('apertei')
// }

// input.onkeyup = function () {
//     console.log('soltei')
// }

// input.onkeypress = function () {
//     console.log('digitei')
// }

input.onkeydown = (event) => {
    console.log(event)
    console.log(event.key)
    console.log(event.currentTarget)
    console.log(event.currentTarget.value)
}