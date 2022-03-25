'use strict'
const consumirApi = () => {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(response => response.json()).then(console.log);
}
document.getElementById('cep').addEventListener('focusout', consumirApi);