const canvas = document.querySelector("canvas");
const cc = canvas.getContext("2d");

cc.fillStyle = "grey";
cc.fillRect(0, 0, 600, 400);

function exibeAlert (evento){
  let x = evento.pageX - canvas.offsetLeft;
  let y = evento.pageY - canvas.offsetTop;
  cc.fillStyle = "green";
  cc.beginPath();
  cc.arc(x, y, 10, 0, 2 * 3.14);
  cc.fill();
  console.log(x + ", " + y);
};

canvas.onclick = exibeAlert;
