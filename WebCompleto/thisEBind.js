const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao);
    }
}
// conflito entre paradigmas
const falar = pessoa.falar
falar()

//solução -> passa o obj que vc queira que seja resolvido o this
const falarBomDia = pessoa.falar.bind(pessoa)
falarBomDia()


function Pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade);
    }, 1000)
}

new Pessoa