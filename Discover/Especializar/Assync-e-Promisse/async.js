// sem async
// fetch('https://api.github.com/users/thiagodepaulasouza')
// .then( (response) => response.json())
// .then( (data) => fetch(data.repos_url))
// .then( res => res.json())
// .then( d => console.log(d))
// .catch( err => console.log(err))

// com async
async function start() {
    const response = await fetch('https://api.github.com/users/thiagodepaulasouza')
    const user = await response.json()
    const reposResponse = await fetch(user.repos_url)
    const repos = await reposResponse.json()
    console.log(repos);
}

start().catch(e => console.log(e))

// outra forma com async
async function start() {
    const url = 'https://api.github.com/users/thiagodepaulasouza'
    const user = await fetch(url).then(u => u.json())
    const userRepos = await fetch(user.repos_url).then(r => r.json())
    console.log(userRepos);
}

start().catch(e => console.log(e))