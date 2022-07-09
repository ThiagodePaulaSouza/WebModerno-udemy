const axios = require ('axios')
Promise.all([
    axios.get('https://jsonplaceholder.typicode.com/todos/1'),
    axios.get('https://jsonplaceholder.typicode.com/todos/2')
])
.then(responses => {
    console.log(responses[0].data.title);
    console.log(responses[1].data.completed);
})
.catch( err => console.log(err.message))