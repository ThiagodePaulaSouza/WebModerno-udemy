const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then(response => axios.get(response.data.title))
.then(title => console.log(title.data))
.catch( err => console.log(err))