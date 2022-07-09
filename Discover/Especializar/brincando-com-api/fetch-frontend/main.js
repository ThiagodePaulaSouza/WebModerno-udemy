const url = 'http://localhost:5000/api'

function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser() {
    fetch(`${url}/2`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name;
        userCity.textContent = data.city;
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const updatedUser = {
    name: "Luke Skywalker",
    avatar: "https://picsum.photos/200/300",
    city: "Rio de Janeiro"
}

const newUser = {
    name: "Felipe Noronha",
    avatar: "https://picsum.photos/200/300",
    city: "São Paulo"
}

updateUser(updatedUser, 1)
addUser(newUser)
getUsers()
getUser()