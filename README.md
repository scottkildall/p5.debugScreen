# p5.debugScreen.js
#### by Scott Kildall
www.kildall.com


## Overview
This is a class for p5.js that will display debug text over your Processing sketch. It is useful for doing things like loading assets and making sure everything got loaded correctly.

It will store several lines of text in a buffer and write this to the screen with a draw function. So, you can monitor any errors without the hassle of constantly printing to the Javascript console.


## Adding it your index.html

The easiest way to use this library it to place it in the same folder as your sketch.

Then, add the line below to the index.html file so that you can access it in your sketch.js

  <script src="p5.debugScreen.js"></script>
  

## Functions

###constructor()
This will allocate the DebugScreen object

e.g.

var debugScreen = new DebugScreen();


###getNumLines()
returns number of lines that we are drawing to the screen. Default is 8.

var numLines = debugScreen.getNumLines()


  // pass true to draw a background rect behind text, false to skip it
  setDrawBackgroundRect(onOrOff) {
    this.drawBackgroundRect = onOrOff;
  }

  // call to draw debug info from the top of the screen
  drawFromTop() {
    this.topDraw = true;
  }

  // call to draw debug info from the bottom of the screen
  drawFromBottom() {
    this.topDraw = false;
  }

  // change the # of lines in the debug buffer - set to 1 line to display
  // constantly-changing info
  setLineCount(newNumLines) {
    // must have at least one line
    if( newNumLines < 1 ) {
      return;
    }

    // if more lines, the we initialize the new lines to empty strings
    if( newNumLines > this.numLines ) {
      for(let i = this.numLines; i < newNumLines; i++ ) {
        this.lines[i] = "";
      }
    }

    // set to new number, make sure current line num doesn't overflow
    this.numLines = newNumLines; 
    if( this.currentLineNum >= this.numLines ) {
      this.currentLineNum = this.numLines-1
    }
  }

  setTextSize(newTextSize) {
    if( newTextSize < 6 ) {
      // too small
      return;
    }
    this.textSize = newTextSize;
    this.lineHeight = this.textSize;
  }

  getTextSize(newTextSize) {
    return this.textSize;
  }

  // use color() to form argument
  setTextColor
## License
CC BY: This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use.
