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
    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade);
    }/*.bind(this)*/, 1000)
}

new Pessoa