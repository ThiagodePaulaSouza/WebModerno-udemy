const body = document.querySelector("body");

const themes = [
  "",
  "pink",
  "green",
  "yellow",
  "dark-blue",
  "dark-pink",
  "dark-green",
  "dark-yellow",
];

function changeTheme() {
  let i = Math.floor(Math.random() * themes.length);
  body.setAttribute("class", themes[i]);
  console.log(themes[i]);
}
