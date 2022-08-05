const canvas = document.querySelector("canvas");
const cc = canvas.getContext("2d");
cc.fillStyle = "lightgrey";
cc.fillRect(0, 0, 600, 350);

cc.fillStyle = 'blue';
cc.fillRect(0, 0, 200, 350);

cc.fillStyle = 'red';
cc.fillRect(400, 0, 200, 350);

cc.fillStyle = 'green'
cc.beginPath();
cc.moveTo(300, 175)
cc.lineTo(200, 350);
cc.lineTo(400, 350);
cc.fill()

cc.fillStyle = 'green'
cc.beginPath();
cc.moveTo(300, 175)
cc.lineTo(200, 0);
cc.lineTo(400, 0);
cc.fill()

cc.fillStyle = 'green'
cc.beginPath()
cc.arc(300, 175, 50, 0, 2*3.14)
cc.fill()
