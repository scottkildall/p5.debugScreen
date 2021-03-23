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

// debug variables
var debugScreen;
var showDebugScreen = true;

// data information
var starsTable;
var rowNum = 0;

// Allocate debug screen from p5.debugScreen.js
function preload() {
  debugScreen = new DebugScreen();
  debugScreen.print("loading table");

   // load the table as a table object, fo all other setup functions later
  starsTable = loadTable('data/stars.csv', 'csv', 'header');
}

// Output info to debug screen
function setup() {
  createCanvas(windowWidth, windowHeight);

  debugScreen.print(starsTable.getRowCount() + ' total rows in table');
  debugScreen.print(starsTable.getColumnCount() + ' total columns in table');
}

// draw gray background + debug text
function draw() {
  background(128);

  // Comment out these 3 lines for deployment version
  if( showDebugScreen ) {
    debugScreen.draw();
  }
}

// space bar toggles global var to display debug screen
// 'n' key will show next line in database
function keyPressed() {
  if( key === ' ') {
    showDebugScreen = !showDebugScreen;
  }

  // show next screen
  if( key === 'n') {
    debugScreen.clear();

    // grab data from table from the current
    let commonName = starsTable.getString(rowNum, 'Common Name');
    let x = starsTable.getString(rowNum, 'X');
    let y = starsTable.getString(rowNum, 'Y');
    let z = starsTable.getString(rowNum, 'Z');

    // Make distance calcuation
    let d = sqrt(pow(x,2) + pow(y,2) + pow(z,2));

    // draw info to debug screen
    debugScreen.print( "rowNum " + rowNum + ":" );
    debugScreen.print(commonName);
    debugScreen.print("x = " + x );
    debugScreen.print("y = " + y );
    debugScreen.print("z = " + z );
    debugScreen.print("dist = " + d.toFixed(2) );

    // go to next record, back to zero if we overflow
    rowNum++;
    if( rowNum === starsTable.getRowCount() ) {
      rowNum = 0;
    }
  }
}

