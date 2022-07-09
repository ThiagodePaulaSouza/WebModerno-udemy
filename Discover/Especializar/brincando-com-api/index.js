const express = require('express')
const app = express()

app.listen(3000)


// midware
app.use(express.json())

app.route('/').get( (req, res) => res.send(req.query.name) )
app.route('/').put( (req, res) => res.send(req.body.author))
app.route('/:parametro').get( (req, res) => res.send(req.params.parametro))

//http://localhost:3000/?name=thigas
//aparece thigas no navegador