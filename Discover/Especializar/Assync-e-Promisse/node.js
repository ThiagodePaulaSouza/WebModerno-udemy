const https = require('https')
// fetch
const API = 'https://jsonplaceholder.typicode.com/users?limit=2'

https.get(API, res => {
    console.log(res.statusCode);
})

console.log("conectando API");