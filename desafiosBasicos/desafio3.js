/*
    fazer valor da variavel a ir pra variavel b
    antes da troca a=7, b=94
    dps da troca a=94, b=7
*/
let a = 7
let b = 94
console.log("var a = " + a + " var b = " + b)

let temp = a;
a=b;
b=temp;

console.log("var a = " + a + " var b = " + b)