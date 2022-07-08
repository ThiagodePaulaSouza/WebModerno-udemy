// promisse tem 4 estágios
// Pending -> estado inicial, assim que o objeto da promessa é iniciado
// Fulfilled -> a promessa foi concluída com sucesso
// Rejected -> a promessa foi rejeitada, houve um erro
// settled -> seja com sucesso ou com erro, ela foi finalmente concluida

const aceitar = true;

console.log("Pedindo lanche");

const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve("deu certo!");
  }
  return reject("não deu certo 😴");
});

console.log("aguardando");

promessa
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("finalizado"));
