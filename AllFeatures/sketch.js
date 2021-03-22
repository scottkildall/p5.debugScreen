/***********************************************************************************
  SimpleDebug
  by Scott Kildall

  Uses the p5.debugScreen.js library to allocate and output simple mouse-clicked
  messages on the screen.

------------------------------------------------------------------------------------
	To use:
	Add this line to the index.html

  <script src="p5.debugScreen.js"></script>
***********************************************************************************/

// Make global 
var debugScreen;
var yTextPos = 30;
var lineHeight = 18;
var lineCount;

// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER);
  textSize(lineHeight);

  debugScreen = new DebugScreen();
  lineCount = debugScreen.getNumLines();
 }


// Draw code goes here
function draw() {
  background(128);

  fill(255);

  textAlign(LEFT)
  let textX = width/2;
  text( "Click on mouse to add debug text", textX, yTextPos);  
  text( "Press [t] to switch to top-screen debug screen", textX, yTextPos + lineHeight); 
  text( "Press [b] to switch to bottom-screen debug screen", textX, yTextPos + lineHeight*2); 
  text( "Press [a] to turn ON autoscroll", textX, yTextPos + lineHeight*3); 
  text( "Press [m] to turn OFF autoscroll", textX, yTextPos + lineHeight*4); 
  text( "Press [x] to turn OFF background rect", textX, yTextPos + lineHeight*5); 
  text( "Press [y] to turn ON background rect", textX, yTextPos + lineHeight*6); 
  text( "Press [r] to change color to RED", textX, yTextPos + lineHeight*7); 
  text( "Press [g] to change color to GREEN", textX, yTextPos + lineHeight*8); 
  text( "Press UP ARROW to increase font size", textX, yTextPos + lineHeight*9);
  text( "Press DOWN ARROW to decrease font size", textX, yTextPos + lineHeight*10);

  debugScreen.draw();
}

function keyPressed() {
  if( key === 't' ) {
    debugScreen.drawFromTop();
    debugScreen.print("setting to draw from top");
    return;
  }

  if( key === 'b' ) {
    debugScreen.drawFromBottom();
    debugScreen.print("setting to draw from bottom");

  }

  if( key === 'r') {
    debugScreen.setTextColor(color(255,0,0));
  }


  if( key === 'g') {
    debugScreen.setTextColor(color(255,0,0));
  }

  if( key === 'x') {
    debugScreen.setDrawBackgroundRect(false);
  }

  if( key === 'y') {
    debugScreen.setDrawBackgroundRect(true);
    return;
  }

  if( key === 'a' ) {
    debugScreen.setAutoScroll(false);
    return;
  }

  if( key === 'm' ) {
    debugScreen.setAutoScroll(true);
    return;
  }
  

  if (keyCode === UP_ARROW) {
    lineCount++;
    debugScreen.setLineCount(lineCount);
    debugScreen.setTextSize(debugScreen.getTextSize()+1);
  }

  if (keyCode ===DOWN_ARROW) {
    lineCount--;
    debugScreen.setLineCount(lineCount);
    debugScreen.setTextSize(debugScreen.getTextSize()-1);
  }

  if( debugScreen.getAutoScroll() === false ) {
    // output to line #2
    debugScreen.print("keyPressed | keyPressed = " + key, 1 );
  }
  else {
    // show keycode on the screen
    debugScreen.print("keyPressed | keyPressed = " + key );
  }
}

function mousePressed() {
  // Form a long string with this mouse clicked information
  debugScreen.print("mouse clicked, x = " + mouseX + " | y = " + mouseY + " | millis() = " + Math.round(millis()) );
}

