const nameForm = document.querySelector("#name-form");
const welcomeContainer = document.querySelector("#welcome");
const logoutBtn = document.querySelector("#logout");

const checkUser = () => {
  const userName = localStorage.getItem("name");

  if (userName) {
    const userNameElement = document.querySelector("#username");
    nameForm.style.display = "none";
    welcomeContainer.style.display = "flex";
    userNameElement.textContent = userName;
  } else {
    nameForm.style.display = "flex";
    welcomeContainer.style.display = "none";
  }
};

const submitInput = (e) => {
  e.preventDefault();
  const nameInput = document.querySelector("#name");
  localStorage.setItem("name", nameInput.value);
  nameInput.value = "";
  checkUser();
};

const clickLogout = () => {
  localStorage.clear();
  checkUser();
};

nameForm.addEventListener("submit", submitInput);
logoutBtn.addEventListener("click", clickLogout);

checkUser();
