/*
    bloco 1 - imprima apenas impares

    bloco 2 - imprima apenas pares
 */
console.log("Descubra os numeros pares");
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log("o numero par é: " + i);
    }
}

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 1) {
        console.log("o numero impar é: " + i);
    }
}