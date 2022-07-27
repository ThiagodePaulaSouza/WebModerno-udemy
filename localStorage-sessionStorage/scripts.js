// salvar objeto
const person = {
  name: 'thiago',
  age: 20,
  job: 'nothing',
};;

sessionStorage.setItem('person', person) //object Object
sessionStorage.setItem('person', JSON.stringify(person)) //objeto correto :D

const getPerson = sessionStorage.getItem('person')
console.log(getPerson.name); //undefined por causa que está em formato json

const getPersonObject = JSON.parse(getPerson) //muda pra objeto js
console.log(getPersonObject.name, getPersonObject.age, getPersonObject.job);