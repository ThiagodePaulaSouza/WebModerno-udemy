const canvas = document.querySelector("canvas");
const cc = canvas.getContext("2d");

cc.fillStyle = "green";
cc.fillRect(0, 0, 350, 300);

// eye1
cc.fillStyle = 'black';
cc.fillRect(50, 50, 90, 90)

// eye2
cc.fillRect(210, 50, 90, 90)

// mouth1
cc.fillRect(140, 140, 70, 100)

// mouthleft
cc.fillRect(100, 190, 40, 110)

// mouthright
cc.fillRect(210, 190, 40, 110)

