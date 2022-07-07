const getFlagValue = require('./flags')
console.log(`oi meu nome é ${getFlagValue('--name')} ${getFlagValue('--greeting')} `);

// no terminal vc digita:
// node greetings --name "Thiago Souza" --greeting "Olá node tudo bom?"
// node é o comando | greetings é o nome do arquivo | --name, --greeting são as flags | "conteudo da flag"