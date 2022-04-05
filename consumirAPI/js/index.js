'use strict'

const limparFormulario = () => {
    document.getElementById('endereco').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
}
const preemcherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

//expressão regular de lista 0 a 9, inicia-se com 0 e finaliza com 9
const verificaNumero = (numero) => /^[0-9]+$/.test(numero);

const validarCep = (cep) => cep.length == 8 && verificaNumero(cep);

const consumirApi = async() => {
    limparFormulario();
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (validarCep(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.erro) {
            document.getElementById('endereco').value = "CEP não encontrado!";
            console.log(endereco);
        } else {
            preemcherFormulario(endereco);
        }
    } else {
        document.getElementById('endereco').value = "CEP incorreto!"
        console.log(validarCep())
    }
}

document.getElementById('cep').addEventListener('focusout', consumirApi);