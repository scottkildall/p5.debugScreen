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
var interactionTable;
var rowNum = 0;;

function preload() {
  debugScreen = new DebugScreen();

  debugScreen.print("loading table");
   // load the table as a table object, fo all other setup functions later
  interactionTable = loadTable('data/interactionTable.csv', 'csv', 'header');

}

// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);

  debugScreen.print(interactionTable.getRowCount() + ' total rows in table');
  debugScreen.print(interactionTable.getColumnCount() + ' total columns in table');
}


// Draw code goes here
function draw() {
  background(0);


  debugScreen.draw();
}

function keyPressed() {
  if( key === ' ') {
    rowNum++;
    debugScreen.print( "rowNum " + rowNum + ":" );
    if( rowNum === interactionTable.getRowCount() ) {
      rowNum = 0;
    }
  }
}

