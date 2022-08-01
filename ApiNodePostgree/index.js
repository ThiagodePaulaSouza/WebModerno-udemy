const Client = require('pg').Client
const cliente = new Client({
  user: 'postgres',
  password: 'thiago3213',
  host: 'localhost',
  port: '5432',
  database: 'bdmembro'
})

cliente.connect()
cliente.query('select * from tb_membro')
.then(res => {
    const resultado = res.rows 
    console.log(resultado);
  })
  .finally(() => cliente.end())