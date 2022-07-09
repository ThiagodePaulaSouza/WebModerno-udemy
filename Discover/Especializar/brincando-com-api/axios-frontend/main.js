const url = "http://localhost:5000/api";

function getUsers() {
  axios
    .get(url)
    .then((response) => apiResult.textContent = JSON.stringify(response.data) )
    .catch((error) => console.error(error));
}

function getUser(id) {
    axios
    .get(`${url}/${id}`)
    .then((response) => {
        userId.textContent = response.data.id;
        userName.textContent = response.data.name;
        userCity = response.data.city;
        userAvatar.src = response.data.avatar;
    } )
    .catch((error) => console.error(error));
}

function addNewUser(newUser) {
    axios.post(url, newUser)
    .then((response) => alertApi.textContent = JSON.stringify(response.data))
    .catch((error) => console.error(error));
}

function updateUser(updatedUser, id) {
    axios.put(`${url}/${id}`, updatedUser)
    .then((response) => alertApi.textContent = JSON.stringify(response.data))
    .catch((error) => console.error(error));
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch((error) => console.error(error));
}

const newUser = {
    name: "Yoda",
    avatar: "https://picsum.photos/200/300",
    city: "Rio grande do sul"
}

const updatedUser = {
    name: "Luke Skywalker",
    avatar: "https://picsum.photos/200/300",
    city: "Rio de Janeiro"
}

addNewUser(newUser)
updateUser(updatedUser, 1)
getUsers()
getUser(3)
deleteUser(5)
