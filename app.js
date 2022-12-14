const bu = document.getElementById("bu");
const bd = document.getElementById("bd");
const bl = document.getElementById("bl");
const br = document.getElementById("br");
const restart = document.querySelector(".game__restart");
const play = document.querySelector(".game__start");
const instruction1 = document.querySelectorAll(".game__info");
const instdiv = document.querySelector(".game__info");

const inst = [
  "<div class='inst1div'><img class='inst1img' src='./Images/MS4.png' alt='character' /><div><h1>Level One</h1><p class='inst1p'>Hint: Only go one direction at a time, if you get stuck go the opposite direction. Go too far into the monster, it will grab onto you, and you will be stuck there. If that happens just press the reset button to try again.</p></div></div>",
  "<div class='inst2div'><img class='inst2img' src='./Images/MS2.png' alt='character' /><div class='wording'><h1 class='game__info2'>Level Two (Hard)</h1><p class='inst2p'>The more weapons you collect the more vicious these monsters become! You will start to notice you cannot move pass empty spaces, that's  because the monsters have an invisible barrier that can pull you in.</p></div></div>",
  "<div class='inst3div'><img class='inst3img' src='./Images/MS3.png' alt='character' /><div><h1>Level Three (Very Hard)</h1><p class='inst3p'>This is the final stage, I am surprised you made it this far! Please be careful, the invisible barrier is extremely large, you will need to figure out how big the monsters barrier is.</p></div></div>",
  "<div class='inst4div'><img class='inst4img' src='./Images/MS5.png' alt='character' /><div><h1>Complete</h1><p class='inst4p'>Thank you Adventurer for collecting all the weapons! Now onto the next quest.</p></div></div>",
];

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

let scythe = new Image();
scythe.src = "./Images/scythe.png";
let img2 = new Image();
img2.src = "./Images/Slime.png";
let img3 = new Image();
img3.src = "./Images/snail.png";
let img4 = new Image();
img4.src = "./Images/ugly.png";

let wall = new Image();
wall.src = "./Images/map.png";

let wall2 = new Image();
wall2.src = "./Images/map2.png";

let wall3 = new Image();
wall3.src = "./Images/map3.png";

let wall4 = new Image();
wall4.src = "./Images/msM.png";
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

const hideStartBtn = () => play.classList.add("hide");

const renderMap1 = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.drawImage(wall, 0, 0, canvas.width, canvas.height);
  context.closePath();
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
  context.drawImage(wall2, 0, 0, canvas.width, canvas.height);
  context.closePath();
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

const renderMap3 = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.drawImage(wall3, 0, 0, canvas.width, canvas.height);
  context.closePath();
  context.beginPath();
  context.drawImage(girl, charX, charY, charWidth, charHeight);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
  context.beginPath();
  context.drawImage(img3, 130, 0, 100, 100);
  context.drawImage(img4, 240, 140, 150, 150);
  context.drawImage(img1, 0, 210, 120, 120);
  context.drawImage(img3, 100, 180, 60, 70);
  context.drawImage(img4, 70, 70, 70, 70);
  context.drawImage(img1, 10, 10, 30, 30);
  context.drawImage(img2, 180, 130, 50, 50);
  context.drawImage(img2, 180, 200, 50, 50);
  context.drawImage(img4, 270, 0, 100, 100);
  context.drawImage(img3, 400, 100, 100, 100);
  context.drawImage(img1, 350, 160, 54, 40);
  context.drawImage(img1, 470, 250, 100, 100);
  context.drawImage(img1, 400, 230, 50, 50);
  context.drawImage(scythe, 120, 300, 50, 50);
  context.closePath();
};

const renderMap4 = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.drawImage(wall4, 0, 0, canvas.width, canvas.height);
  context.closePath();
  context.beginPath();
  context.drawImage(girl, 230, 220, 90, 100);
  context.fillStyle = "#0095DD";
  context.fill();
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
    return (go = 0.5);
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
    return (go = 0.5);
  }
};

const map3BarrierCondition = () => {
  if (
    (charX + charWidth >= 0 &&
      charX <= 20 &&
      charY + charHeight >= 0 &&
      charY <= 30) +
    (charX + charWidth >= 150 &&
      charX <= 350 &&
      charY + charHeight >= 0 &&
      charY <= 90) +
    (charX + charWidth >= 100 &&
      charX <= 130 &&
      charY + charHeight >= 70 &&
      charY <= 130) +
    (charX + charWidth >= 0 &&
      charX <= 100 &&
      charY + charHeight >= 200 &&
      charY <= 350) +
    (charX + charWidth >= 180 &&
      charX <= 400 &&
      charY + charHeight >= 200 &&
      charY <= 350) +
    (charX + charWidth >= 200 &&
      charX <= 210 &&
      charY + charHeight >= 150 &&
      charY <= 200) +
    (charX + charWidth >= 410 &&
      charX <= 470 &&
      charY + charHeight >= 120 &&
      charY <= 200)
  ) {
    return (go = go * -1);
  } else {
    return (go = 0.5);
  }
};

const letsPlay = (e) => {
  const reset = () => {
    clearInterval(loadMap);
    loadMap = setInterval(map1);
    charY = 80;
    charX = 0;
  };
  restart.addEventListener("click", reset);

  hideStartBtn();
  let instructions = instdiv;
  instructions.classList.add("hide");
  const instructionDiv = document.createElement("div");
  document.querySelector("main").append(instructionDiv);
  const map1 = () => {
    renderMap1();
    map1BarrierCondition();
    moving();
    instructionDiv.innerHTML = inst[0];
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
    map2BarrierCondition();
    renderMap2();
    moving();
    instructionDiv.innerHTML = inst[1];
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
    renderMap3();
    map3BarrierCondition();
    moving();
    instructionDiv.innerHTML = inst[2];
    if (
      charX + charWidth >= 120 &&
      charX <= 170 &&
      charY + charHeight >= 300 &&
      charY <= 350
    ) {
      clearInterval(loadMap);
      loadMap = setInterval(map4);
    }
  };

  const map4 = () => {
    instructionDiv.innerHTML = inst[3];
    renderMap4();
  };
  let loadMap = setInterval(map1);
};

play.addEventListener("click", letsPlay);

const goUp = (e) => (upPress = true);
const goDown = (e) => (downPress = true);
const goLeft = (e) => (leftPress = true);
const goRight = (e) => (rightPress = true);

const stop = (e) => {
  rightPress = false;
  downPress = false;
  leftPress = false;
  upPress = false;
};

bu.addEventListener("touchstart", goUp);
bd.addEventListener("touchstart", goDown);
bl.addEventListener("touchstart", goLeft);
br.addEventListener("touchstart", goRight);
bu.addEventListener("touchend", stop);
bd.addEventListener("touchend", stop);
bl.addEventListener("touchend", stop);
br.addEventListener("touchend", stop);
