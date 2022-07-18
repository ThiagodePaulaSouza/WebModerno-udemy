// operador ou
function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

console.log(soma1(), soma1(3));
// bug -> por causa que js interpreta como false e como é um operador que está sendo passado ele retorna 1 nas variaveis assim sendo o resultado 3
console.log(soma1(0,0,0));

// exemplo de solução
function soma2(a,b,c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1      // o 1 indica o indice do parametro (a,b,c)-(0,1,2)
    c = isNaN(c) ? 1 : c            // mais segura

    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0), soma2('thiago','de','paula'));

// exemplo de solucão es2015
function soma3( a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0), soma3('thiago','de','paula'));