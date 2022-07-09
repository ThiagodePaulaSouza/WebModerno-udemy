const axios = require('axios')

// Sem async

// axios.get('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => axios.get(response.data.title))
// .then(title => console.log(title.data))
// .catch( err => console.log(err))

// Com assync
async function fetchRepo() {
    const user = await axios.get('https://api.github.com/users/thiagodepaulasouza')
    const repos = await axios.get(user.data.repos_url)
    console.log(repos);
}

fetchRepo()