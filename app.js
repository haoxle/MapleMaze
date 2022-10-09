const bu = document.getElementById("bu");
const bd = document.getElementById("bd");
const bl = document.getElementById("bl");
const br = document.getElementById("br");
const restart = document.querySelector(".game__restart");
const play = document.querySelector(".game__start");
const instruction1 = document.querySelectorAll(".game__info");
const inst1div = document.querySelector(".game__info");
const inst2div = document.querySelector(".inst2div");
const inst3div = document.querySelector(".inst3div");
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
let rightPress = false;
let leftPress = false;
let upPress = false;
let downPress = false;
const charHeight = 50;
const charWidth = 50;
const imgWidth = 20;
const imgHeight = 20;
let img1w = 80;
let img1h = 70;
let girl = new Image();
girl.src = "./Images/boy.png";
let img1 = new Image();
img1.src = "./Images/mushy.png";
let imgSpear = new Image();
imgSpear.src = "./Images/spear.png";
let imgSword = new Image();
imgSword.src = "./Images/sword2.png";
let img2 = new Image();
img2.src = "./Images/Slime.png";
let charY = 80;
let charX = 0;
let go = 0.5;

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

const moving = () => {
  if (rightPress) {
    charX += go;
    if (charX + charWidth > canvas.width) {
      charX = canvas.width - charWidth;
    }
  } else if (leftPress) {
    charX -= go;
    if (charX < 0) {
      charX = 0;
    }
  } else if (upPress) {
    charY -= go;
    if (charY < 0) {
      charY = 0;
    }
  } else if (downPress) {
    charY += go;
    if (charY + charHeight > canvas.height) {
      charY = canvas.height - charWidth;
    }
  }
};

document.addEventListener("keydown", keyClick, false);
document.addEventListener("keyup", KeyRelease, false);

const hideInstruction1 = () => {
  inst1div.classList.add("hide");
};
const hideInstruction3 = () => {
  inst3div.classList.add("hide");
};
const showInstruction3 = () => {
  inst3div.classList.remove("hide");
};
const hideInstruction2 = () => {
  inst2div.classList.add("hide");
};
hideInstruction3();
const hideStartBtn = () => {
  play.classList.add("hide");
};

const renderMap1 = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.drawImage(girl, charX, charY, charWidth, charHeight);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
  context.beginPath();
  context.drawImage(img1, 0, 0, img1w, img1h);
  context.drawImage(img1, 0, 140, img1w, img1h);
  context.drawImage(img1, 0, 210, img1w, img1h);
  context.drawImage(img1, 70, 0, img1w, img1h);
  context.drawImage(img1, 70, 210, img1w, img1h);
  context.drawImage(img1, 70, 210, img1w, img1h);
  context.drawImage(img1, 140, 0, img1w, img1h);
  context.drawImage(img1, 140, 70, img1w, img1h);
  context.drawImage(img1, 140, 210, img1w, img1h);
  context.drawImage(img1, 210, 70, img1w, img1h);
  context.drawImage(img1, 210, 210, img1w, img1h);
  context.drawImage(img1, 280, 70, img1w, img1h);
  context.drawImage(img1, 280, 210, img1w, img1h);
  context.drawImage(img1, 350, 210, img1w, img1h);
  context.drawImage(img1, 420, 210, img1w, img1h);
  context.drawImage(img1, 420, 280, img1w, img1h);
  context.drawImage(img1, 420, 0, 140, 140);
  context.drawImage(imgSpear, 500, 300, 50, 50);
  context.closePath();
};

const renderMap2 = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.drawImage(girl, charX, charY, charWidth, charHeight);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
  context.beginPath();
  context.drawImage(img2, 140, 0, img1w, img1h);
  context.drawImage(img2, 210, 0, img1w, img1h);
  context.drawImage(img2, 280, 0, img1w, img1h);
  context.drawImage(img2, 350, 0, img1w, img1h);
  context.drawImage(img2, 420, 0, img1w, img1h);
  context.drawImage(img2, 490, 0, img1w, img1h);
  context.drawImage(img2, 560, 0, img1w, img1h);
  context.drawImage(img2, 70, 70, img1w, img1h);
  context.drawImage(img2, 140, 70, img1w, img1h);
  context.drawImage(img2, 210, 70, img1w, img1h);
  context.drawImage(img2, 560, 70, img1w, img1h);
  context.drawImage(img2, 140, 140, img1w, img1h);
  context.drawImage(img2, 210, 140, img1w, img1h);
  context.drawImage(img2, 350, 140, img1w, img1h);
  context.drawImage(img2, 490, 140, img1w, img1h);
  context.drawImage(img2, 560, 140, img1w, img1h);
  context.drawImage(img2, 0, 210, img1w, img1h);
  context.drawImage(img2, 140, 210, img1w, img1h);
  context.drawImage(img2, 350, 210, img1w, img1h);
  context.drawImage(img2, 490, 210, img1w, img1h);
  context.drawImage(img2, 560, 210, img1w, img1h);
  context.drawImage(img2, 0, 280, img1w, img1h);
  context.drawImage(img2, 280, 280, img1w, img1h);
  context.drawImage(img2, 350, 280, img1w, img1h);
  context.drawImage(imgSword, 80, 10, 70, 70);
  context.closePath();
};
const map1BarrierCondition = () => {
  if (
    (charX + charWidth >= 0 &&
      charX <= 210 &&
      charY + charHeight >= 0 &&
      charY <= 60) +
    (charX + charWidth >= 180 &&
      charX <= 320 &&
      charY + charHeight >= 80 &&
      charY <= 125) +
    (charX + charWidth >= 0 &&
      charX <= 60 &&
      charY + charHeight >= 150 &&
      charY <= 210) +
    (charX + charWidth >= 0 &&
      charX <= 480 &&
      charY + charHeight >= 230 &&
      charY <= 280) +
    (charX + charWidth >= 420 &&
      charX <= 465 &&
      charY + charHeight >= 280 &&
      charY <= 350) +
    (charX + charWidth >= 470 &&
      charX <= 560 &&
      charY + charHeight >= 0 &&
      charY <= 125)
  ) {
    return (go = go * -1);
  } else {
    return (go = 1.1);
  }
};

const map2BarrierCondition = () => {
  if (
    (charX + charWidth >= 140 &&
      charX <= 560 &&
      charY + charHeight >= 0 &&
      charY <= 70) +
    (charX + charWidth >= 70 &&
      charX <= 280 &&
      charY + charHeight >= 70 &&
      charY <= 130) +
    (charX + charWidth >= 150 &&
      charX <= 280 &&
      charY + charHeight >= 140 &&
      charY <= 200) +
    (charX + charWidth >= 370 &&
      charX <= 420 &&
      charY + charHeight >= 150 &&
      charY <= 320) +
    (charX + charWidth >= 510 &&
      charX <= 560 &&
      charY + charHeight >= 150 &&
      charY <= 270) +
    (charX + charWidth >= 0 &&
      charX <= 60 &&
      charY + charHeight >= 210 &&
      charY <= 420) +
    (charX + charWidth >= 280 &&
      charX <= 420 &&
      charY + charHeight >= 280 &&
      charY <= 350) +
    (charX + charWidth >= 150 &&
      charX <= 200 &&
      charY + charHeight >= 210 &&
      charY <= 280)
  ) {
    return (go = go * -1);
  } else {
    return (go = 1.1);
  }
};

const letsPlay = (e) => {
  hideStartBtn();
  hideInstruction1();
  const map1 = () => {
    map1BarrierCondition();
    moving();
    renderMap1();
    if (
      charX + charWidth >= 480 &&
      charX <= 560 &&
      charY + charHeight >= 340 &&
      charY <= 350
    ) {
      clearInterval(loadMap);
      loadMap = setInterval(map2);
    }
  };
  const map2 = () => {
    inst2div.classList.add("game__instructions");
    inst3div.classList.add("game__instructions");
    map2BarrierCondition();
    renderMap2();
    moving();
    if (
      charX + charWidth >= 90 &&
      charX <= 130 &&
      charY + charHeight >= 0 &&
      charY <= 70
    ) {
      clearInterval(loadMap);
      loadMap = setInterval(map3);
    }
  };
  const map3 = () => {
    hideInstruction2();
    showInstruction3();
    moving();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.drawImage(girl, charX, charY, charWidth, charHeight);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
  };
  let loadMap = setInterval(map1);
};

const reload = (e) => {
  location.reload();
};
inst2div.addEventListener("click", letsPlay);
play.addEventListener("click", letsPlay);
restart.addEventListener("click", reload);
inst3div.addEventListener("click", letsPlay);

const goUp = (e) => {
  upPress = true;
  console.log("up ");
};

const goDown = (e) => {
  downPress = true;
  console.log("down");
};
const goLeft = (e) => {
  leftPress = true;
  console.log("left");
};
const goRight = (e) => {
  rightPress = true;
  console.log("right");
};

const stop = (e) => {
  rightPress = false;
  downPress = false;
  leftPress = false;
  upPress = false;
  console.log("Stop");
};
bu.addEventListener("touchstart", goUp);
bd.addEventListener("touchstart", goDown);
bl.addEventListener("touchstart", goLeft);
br.addEventListener("touchstart", goRight);

bu.addEventListener("touchend", stop);
bd.addEventListener("touchend", stop);
bl.addEventListener("touchend", stop);
br.addEventListener("touchend", stop);

// const loopinst = (instruction1) => {
//   instruction1.forEach((instruction) =>
//     instruction.addEventListener("click", letsPlay)
//   );
// };
