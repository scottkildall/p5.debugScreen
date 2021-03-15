/*******************************************************************************************************************
//
//  Class: Timer
//
//  Written by Scott Kildall
//	for P5.js
//
//------------------------------------------------------------------------------------------------------------------
// - Very simple but incredibly useful timer class
// - Call start() whenever it expires to reset the time
// - Call expired() to check to see if timer is still active
//------------------------------------------------------------------------------------------------------------------
//   Constructor: requires a timer duration, this can always be changed with setTimer()
*********************************************************************************************************************/

class DebugScreen {
  constructor() {
    this.lines = [];
    this.currentLineNum = 0;
    this.hOffset = 20;
    this.vOffset = 25;
    this.topDraw = true;
    this.lineHeight = 14;
    this.setLineCount(8);

    // emopty strings for initial display
    for(let i = 0; i < this.numLines; i++ ) {
      this.lines[i] = "";
    }
  }
  
  getNumLines() {
    return this.numLines;
  }

  draw() {
    push();
    fill(0,255,0);
    textSize(this.lineHeight);
    textAlign(LEFT);

    let lineNum = this.currentLineNum;

    let drawY;
    if( this.topDraw ) {
      drawY = 25;
    }
    else {
      drawY = height - (this.vOffset + (this.numLines * this.lineHeight) );
    }

    for( let i = 0; i < this.numLines; i++ ) {
      text( this.lines[lineNum], this.hOffset, drawY + (i * this.lineHeight) );
      lineNum++;
      if( lineNum === this.numLines ) {
        lineNum = 0;
      }
    }

    pop();
  }

  drawFromTop() {
    this.topDraw = true;
  }

  drawFromBottom() {
    this.topDraw = false;
  }

  // saves line to buffer, converts to string
  output(s) {
    this.lines[this.currentLineNum] = String(s);

    this.currentLineNum++;
    if( this.currentLineNum === this.numLines ) {
      this.currentLineNum = 0;
    }
  }

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
}
