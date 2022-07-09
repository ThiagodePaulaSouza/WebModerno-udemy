const express = require('express')
const app = express()

app.listen(3000)


// midware
app.use(express.json())

app.route('/').post( (req, res) => res.send(req.body))