/*Game project

// Project Setup //
// Generate Map
// Add Maplestory Character with movement
// Add collision detection
// Swap boundaries with images
// Create enemy
// Add win condition
// Mobile and computer conversion

*/

const canvas = document.getElementById("myCanvas");
const char = canvas.getContext("2d");
const charHeight = 10;
const charWidth = 10;
let charY = (canvas.height - charHeight) / 2;
let charX = (canvas.width - charWidth) / 2;
let rightPress = false;
let leftPress = false;
let upPress = false;
let downPress = false;
let roadWidth = canvas.width / mazeArray[0].length;
let roadHeight = canvas.height / mazeArray.length;

const mazeArrayOne = [
  [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1],
  [1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
  [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
];

const mazeArrayTwo = [
  [1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0],
  [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
  [1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0],
  [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
  [1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0],
  [1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0],
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
];
const mazeArrayThree = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const drawAChar = () => {
  char.beginPath();
  char.rect(charX, charY, charWidth, charHeight);
  char.fillStyle = "#0095DD";
  char.fill();
  char.closePath();
};

const keyClick = (e) => {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPress = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPress = true;
  } else if (e.key == "Down" || e.key == "ArrowDown") {
    downPress = true;
  } else if (e.key == "Up" || e.key == "ArrowUp") {
    upPress = true;
  }
};

const KeyRelease = (e) => {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPress = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPress = false;
  } else if (e.key == "Down" || e.key == "ArrowDown") {
    downPress = false;
  } else if (e.key == "Up" || e.key == "ArrowUp") {
    upPress = false;
  }
};

document.addEventListener("keydown", keyClick, false);
document.addEventListener("keyup", KeyRelease, false);

const move = () => {
  char.clearRect(0, 0, canvas.width, canvas.height);
  drawAChar();
  if (rightPress) {
    charX += 0.5;
    if (charX + charWidth > canvas.width) {
      charX = canvas.width - charWidth; //so it does not go out of page
    }
  } else if (leftPress) {
    charX -= 0.5;
    if (charX < 0) {
      charX = 0;
    }
  } else if (upPress) {
    charY -= 0.5;
    if (charY < 0) {
      charY = 0;
    }
  } else if (downPress) {
    charY += 0.5;
    if (charY + charHeight > canvas.height) {
      charY = canvas.height - charWidth; //so it does not go out of page
    }
  }
};

setInterval(move);
