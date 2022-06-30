function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }
    console.log("bom dia")
}

try {
    sayMyName()
} catch (e) {
    console.log(e)
}