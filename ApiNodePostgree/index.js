const Client = require('pg').Client
const cliente = new Client({
  user: 'postgres',
  password: 'thiago3213',
  host: 'localhost',
  port: '5432',
  database: 'bdmembro'
})

let result;

cliente.connect()
cliente.query('select * from tb_membro')
.then(res => {
    resultado = res.rows 
    })
  .finally(() => cliente.end())


  const express = require('express')
  const cors = require('cors')
  const app = express()
  const port = 3000

  app.use(cors())
  app.use(express.json())

  app.get('/', (req, res) => res.send('Hello World!'))

  // HTTP: GET
  app.route('/api').get((req, res) => res.json(resultado))

  // HTTP: GET ID
  app.route('/api/:id').get((req, res) => {
    const userId = req.params.id
  
    const user = resultado.find(user => Number(user.id) === Number(userId))
  
    if (!user) {
      return res.json('User nor found!')
    }
  
    res.json(user)
  })

  // // HTTP: POST
  // app.route('/api').post((req, res) => {
  //   const lastId = resultado[resultado.length - 1].id
  //   resultado.push({
  //     id: lastId + 1,
  //     nome: req.body.nome,
  //     email: req.body.email,
  //     github: req.body.github,
  //     phone: req.body.phone
  //   })
  //   res.json('Saved user')
  // })
  // HTTP: DELETE
  
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))