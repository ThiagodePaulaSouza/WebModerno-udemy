console.log(typeof Object)
console.log(typeof new Object)
console.log(typeof new Object())

console.log("------------------")

const minhaFuncao = function() {}
console.log(typeof minhaFuncao)
console.log(typeof new minhaFuncao)
console.log(typeof new minhaFuncao())

console.log("------------------")

class Produto {} //internamente é função
console.log(typeof Produto)
console.log(typeof new Produto)
console.log(typeof new Produto())

console.log("------------------")

function ObjTeste(sla) {
    this.sla = sla
    this.myFunc = () => {
        console.log("Função funciona")
    }
}

const obj2 = new ObjTeste("Sla meu");
console.log(obj2.sla);
obj2.myFunc()