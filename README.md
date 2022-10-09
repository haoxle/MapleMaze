# MapleEscape

I have created a fantasy themed maze game.
I have based the characters and style on an old but fun mmorpg called maplestory.
The game is a maze where the character has to collect weapons to win.

This project i have used canvas and based the moving sprite using simple math techniques i.e coordinate manipulation to allow the character to move.

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


The game centers around the above function where it takes the coordinates of the character and updates it using the grid width and height of the map.


setInterval is used to support the canvas as it continuosly runs to updates the animation allowing us to see the moving sprite.
