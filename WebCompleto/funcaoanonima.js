const imprimirResultado = (a, b, operacao = (a, b) => a + b) => console.log(operacao(a, b));

imprimirResultado(4,2)
imprimirResultado(4,2, (x, y) => x-y)
imprimirResultado(4,2, (x, y) => x*y)
imprimirResultado(4,2, (x, y) => x/y)
imprimirResultado(4,2, (x, y) => x%y)