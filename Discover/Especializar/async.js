const promessa = new Promise( (resolve, reject) => resolve('ok') )
promessa
.then((response) => console.log(response))
.catch((err) => console.log(err))
.finally(() => console.log('sempre irei executar'))