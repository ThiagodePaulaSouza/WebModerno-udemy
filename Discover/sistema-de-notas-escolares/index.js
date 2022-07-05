/*
 *  # Transformar notas escolares
 *
 *  crie um algoritmo que tranforme as notas do sistema
 *  numerico para sistema de notas em caracteres tipo ABC
 *
 *  90 >    -> A
 *  80 - 89 -> B
 *  70 - 79 -> C
 *  60 - 69 -> D
 *  < 60    -> F
 */

function getScore(score) {
  const scoreA = score >= 90 && score <= 100;
  const scoreB = score >= 80 && score <= 90;
  const scoreC = score >= 70 && score <= 80;
  const scoreD = score >= 60 && score <= 70;
  const scoreF = score <= 60 && score >= 0;

  let scoreFinal;

  if (scoreA) {
    scoreFinal = "A";
  } else if (scoreB) {
    scoreFinal = "B";
  } else if (scoreC) {
    scoreFinal = "C";
  } else if (scoreD) {
    scoreFinal = "D";
  } else if (scoreF) {
    scoreFinal = "F";
  } else {
    scoreFinal = "Nota inválida";
  }
  return scoreFinal;
}

console.log(getScore(-123));
console.log(getScore(1));
console.log(getScore(65));
console.log(getScore(71));
console.log(getScore(82));
console.log(getScore(96));
console.log(getScore(0));
console.log(getScore(12469087));
