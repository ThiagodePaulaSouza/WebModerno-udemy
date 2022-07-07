// module.exports = "enviando dados do meu módulo"

const names = [
    'mario',
    'marcelo',
    'maria',
    'michael'
]

module.exports = function MostrarNomes(){
    console.log("Bom dia meu nome é função");
    setTimeout(() => {
        for (const value of names) {
            console.log(value)
        }
    }, 1000);
}