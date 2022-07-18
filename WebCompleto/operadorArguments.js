function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma());
console.log(soma(1));
console.log(soma(3,34,3,46,3457,98,123,34));
console.log(soma(1.1,9.9,2.3));
console.log(soma('a', 'b', 'c'));