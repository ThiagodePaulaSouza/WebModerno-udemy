const name = 'Thigas'
const names = ['marcelo', 'jão', 'vitoria']

for (const char of name) {
    console.log(char)
}

for (const char of names) {
    console.log(char)
}

const person = {
    name: 'Mario',
    age: 20,
    weight: 55.9,
}

for (const sla in person) {
    console.log(sla)
    console.log(person[sla])
}