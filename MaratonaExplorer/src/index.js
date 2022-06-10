const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta");
const botaoPergunta = document.querySelector("#buttonPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
];

function fazerPergunta() {
  if (inputPergunta.value == "") {
    alert("Favor insira sua pergunta");
    return;
  }

  botaoPergunta.setAttribute("disabled", true)

  const pergunta = "<div>"+ inputPergunta.value + "</div>"

  const totalResposta = respostas.length;
  numeroAleatório = Math.floor(Math.random() * totalResposta);
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatório];
  elementoResposta.style.opacity = 1
  
  setTimeout(() => {
      elementoResposta.style.opacity = 0;
      botaoPergunta.removeAttribute("disabled")
  }, 3000);
}

