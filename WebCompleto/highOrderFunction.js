// func literal
function fun1() { }

// armazenar func emn var
const fun2 = function () { }

// armazenar em um arr
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2,5));

// armazenar em um obj
const obj = {}
obj.falar = function () { return 'opa' }
console.log(obj.falar());

// passar func como param
function run(fun) {
    fun()
}
run(function () {console.log("Executando");})

// função pode retornar/conter funcao
function sum(a,b) {
    return function (c) {
        console.log(a + b + c);
    }
}
sum(1, 3)(4)
const quatroMais = sum(1,3)
quatroMais(4)