const express = require('express')
const app = express()

app.get("/primeira-rota", (request, response) => {
    return response.send("Bom dia express")
})

app.listen(4002, () => console.log("Servidor rodando na porta 4002"))