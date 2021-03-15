/*******************************************************************************************************************
//
//  Class: DebugScreen
//
//  Written by Scott Kildall
//	for P5.js
//
//------------------------------------------------------------------------------------------------------------------
//
//  Member Functions:
//  Accessors: 
//  * Draw(): call at the end of your draw loop to see debug text on the screen
//  * Output(): output a new line of text to the buffer for display
//  
*********************************************************************************************************************/

class DebugScreen {
  // Constrctor
  constructor() {
    this.lines = [];
    this.currentLineNum = 0;
    this.hOffset = 10;
    this.vOffset = 40;
    this.topDraw = true;
    this.lineHeight = 14;
    this.rectOffset = 10;
    this.setLineCount(8);
    this.drawBackgroundRect = true;

    // emopty strings for initial display
    for(let i = 0; i < this.numLines; i++ ) {
      this.lines[i] = "";
    }
  }
  
//--------- ACCESSORS -----------
  getNumLines() {
    return this.numLines;
  }

  // pass true to draw a background rect behind text, false to skip it
  setDrawBackgroundRect(onOrOff) {
    this.drawBackgroundRect = onOrOff;
  }

  drawFromTop() {
    this.topDraw = true;
  }

  drawFromBottom() {
    this.topDraw = false;
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

//--------- PUBLIC FUNCTIONS: Use these -----------
  draw() {
    push();

    let lineNum = this.currentLineNum;

    // set drawY based on top or bottom drawing
    let drawY;
    if( this.topDraw ) {
      drawY = 25;
    }
    else {
      drawY = height - (this.vOffset + (this.numLines * this.lineHeight) );
    }

    // rect-drawing
    noStroke();
    fill(0,0,0,64);
    rectMode(CORNER);
    rect( this.hOffset-this.rectOffset, drawY-this.rectOffset*2, width, this.numLines*this.lineHeight + this.rectOffset*2);

    // text-drawing settings
    fill(0,255,0);
    textSize(this.lineHeight);
    textAlign(LEFT);

    // draw each line
    for( let i = 0; i < this.numLines; i++ ) {
      text( this.lines[lineNum], this.hOffset, drawY + (i * this.lineHeight) );
      lineNum++;
      if( lineNum === this.numLines ) {
        lineNum = 0;
      }
    }

    pop();
  }

  // saves line to buffer, converts to string
  output(s) {
    this.lines[this.currentLineNum] = String(s);

    this.currentLineNum++;
    if( this.currentLineNum === this.numLines ) {
      this.currentLineNum = 0;
    }
  }

  
}
