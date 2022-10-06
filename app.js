/*Game project

// Project Setup //
// Generate Map
// Add Maplestory Character with movement
// Add collision detection
// Swap boundaries with images
// Create enemy
// Add win condution
// Mobile and computer conversion


1. Create a canvas/div, query selector and console log to see what you have done.
2. Creating a canvas context const c = canvas.getContext('2d') //read more about this
3. canvas.width = window.innderWidth (probaby do this on css)
4. canvas.height= innerheight
5. set margin to 0 */

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
