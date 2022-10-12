# MapleMaze

**Project Summary**
I have created a fantasy themed maze game with a little twist. This game is made to make you angry. The character will navigate past obstacles, if the characters hit the wall which can be invisible, the game will stop and the game has to be restarted.
I have based the characters and style on an old but fun mmorpg called maplestory.
The winning condition is to collect all the weapons.

Within this project I have used canvas for my animation to be displayed on, canvas is quite straightforward to manipulate as its similar to a graph where you would use X and Y coordinates. 
A lot of mathematics functions are implemented to impose barriers or stop conditions for the character which uses the character position and the length and width of the canvas. I created conditions whereby the character cannnot cross certain points of the maps.
setInterval is used to support the canvas as it continuosly runs to updates the animation allowing us to see the moving sprite.

**Challenges**
It was quite difficult working with setIntervals, especially during the refractoring stage. Taking the setIntervals out of the main function would cause glitches within the game and causes it to flicker between maps. This problem was resolved by keeping all the setIntervals in one function where the gam is running.

The second problem was implementing a reset button, the code written did not work which ideally should work. It was then identified that the reason why it did not work is because the player was directly on the element that causes a change in the map, which would cause the map to change back. There was also the character placement, it was already preset where the character would be, but because begin path and close path has already drawn the character, the x and y coordinates had to be specified again.


**How to install**
This repo can be downloaded and ran on live server, no other tools were used except js, scss and html.

**How to play**
Instructions are all on the webpage 


**Credits**
Hao

canvas: 
https://www.javascripttutorial.net/web-apis/javascript-canvas/
https://www.w3schools.com/html/html5_canvas.asp
https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
https://www.youtube.com/watch?v=CeUGlSl2i4Q&t=171s
https://www.youtube.com/watch?v=bG2BmmYr9NQ&t=1s



**License**
N/A
