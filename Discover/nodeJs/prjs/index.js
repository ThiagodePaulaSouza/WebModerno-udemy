const questions = [
    "o que aprendi hoje?",
    "o que me deixou aborrecido?",
    "o que eu posso fazer para melhorar?",
    "o que me deixou feliz hoje?",
    "quantas pessoas eu ajudei hoje?"
]

const ask = ( index = 0 ) => {
    return process.stdout.write("\n\n" + questions[index] + "\n> ")
}

ask()

const anwers = []

process.stdin.on("data", data => {
    anwers.push(data.toString().trim())
    if (anwers.length < questions.length) {
        ask(anwers.length)
    } else{
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    Beleza Thiago!

    O que vc aprendeu hoje foi: 
    ${anwers[0]}

    O que te aborreceu foi ${anwers[1]}
    e voce poderia melhorar fazendo ${anwers[2]}

    O que te deixou feliz hoje foi:
    ${anwers[3]}

    Você ajudou ${anwers[4]} pessoas hoje!!!
    `)
})
