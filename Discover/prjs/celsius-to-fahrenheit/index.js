/**
 * # Celsius para fahrenheit
 *
 * Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para a outra
 *
 * C = (F - 32) * 5/9
 * F = C * 9/5 + 32
 */

function TransformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExists = degree.toUpperCase().includes("F");

  // error check
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Grau não identificado");
  }

  // F -> C
  let updatedDregree = Number(degree.toUpperCase().replace("F", ""));
  let formula = fahrenheit => ((fahrenheit - 32) * 5) / 9;
  let degreeSign = "C";

  // C -> 
  if (celsiusExists) {
    updatedDregree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9/5 + 32;
    degreeSign = "F";
  }

  return formula(updatedDregree) + degreeSign;
}

try {
  console.log(TransformDegree('50f'));
  console.log(TransformDegree('200F'));
  console.log(TransformDegree("50C"));
  console.log(TransformDegree("20c"));
} catch (error) {
  console.log(error.message);
}
