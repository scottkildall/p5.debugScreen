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


function preload() {
  debugScreen = new DebugScreen();

  debugScreen.print("loading table");
   // load the table as a table object, fo all other setup functions later
  starsTable = loadTable('data/stars.csv', 'csv', 'header');

}

// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);

  debugScreen.print(starsTable.getRowCount() + ' total rows in table');
  debugScreen.print(starsTable.getColumnCount() + ' total columns in table');
}


// Draw code goes here
function draw() {
  background(128);


  if( showDebugScreen ) {
    debugScreen.draw();
  }
}


function keyPressed() {
  if( key === 'd') {
    showDebugScreen = !showDebugScreen;
  }

  // show next screen
  if( key === 'n') {
    
    debugScreen.clear();

    // generate data
    let commonName = starsTable.getString(rowNum, 'Common Name');
    let x = starsTable.getString(rowNum, 'X');
    let y = starsTable.getString(rowNum, 'Y');
    let z = starsTable.getString(rowNum, 'Z');
    let d = sqrt(pow(x,2) + pow(y,2) + pow(z,2));

    debugScreen.print( "rowNum " + rowNum + ":" );
    debugScreen.print(commonName);
    debugScreen.print("x = " + x );
    debugScreen.print("y = " + y );
    debugScreen.print("z = " + z );
    debugScreen.print("dist = " + d.toFixed(2) );

    rowNum++;
    if( rowNum === starsTable.getRowCount() ) {
      rowNum = 0;
    }
  }
}

