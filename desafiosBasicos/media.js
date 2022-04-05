/**
 * Leia duas notas e uma optativa
 * se n tem optativa o valor é -1
 * calcular media do semestre considerando que a optativa
 * substitui a nota mais baixa entre as duas primeiras
 * escrever a média e mensagens que indiquem se o aluno foi aprovado
 * reprovado ou exame de acordo com 
 * 
 * se media >= 6 APROVADO
 * se media < 3 REPROVADO
 * se media >=3 e < 6 EXAME
 */

function calcularMedia(nota1, nota2, notaOptativa) {
    if (notaOptativa == undefined) {
        notaOptativa = -1;
    }
    if (nota1 < nota2) {
        nota1 = nota1 < notaOptativa ? notaOptativa : nota1;
    } else {
        nota2 = nota2 < notaOptativa ? notaOptativa : nota2;
    }
    const media = (nota1 + nota2) / 2;
    return media;
}

function escreverMensagemMedia(media) {
    if (media >= 6) {
        console.log(`APROVADO: ${media}`)
    } else if (media < 3) {
        console.log(`REPROVADO: ${media}`)
    } else {
        console.log(`EXAME: ${media}`)
    }
}
//aluno1
const avaliacao1 = 9;
const avaliacao2 = 7;
let avaliacaoOptativa;

const mediaAluno1 = calcularMedia(avaliacao1, avaliacao2, avaliacaoOptativa);
escreverMensagemMedia(mediaAluno1);

//aluno2
const mediaAluno2 = calcularMedia(2, 7);
escreverMensagemMedia(mediaAluno2);

//aluno3
escreverMensagemMedia(calcularMedia(0, 1, 2));