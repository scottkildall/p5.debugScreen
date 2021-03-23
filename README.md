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

`var debugScreen = new DebugScreen();`

###print(s, lineNum = 0)
prints text to screen buffer, line number is an optional paramter, which only gets used if autoscroll is turned off

`debugScreen.print("hello, world") // prints to bottom line, if autoscrolling is on`
`debugScreen.print("hello, city",1)	// prints to 2nd line`

###clear()
Clears all text from debug screen buffer

`debugScreen.clear()`

###draw()
Draws the debug screen buffer

`debugScreen.debug()`

###setLineCount(newNumLines)
sets number of lines we are drawing to the screen

`debugScreen.setLineCount(12) // draws 12 lines to screen`

###getNumLines()
returns number of lines that we are drawing to the screen. Default is 8.

`var numLines = debugScreen.getNumLines();`


###setDrawBackgroundRect(onOrOff) 
sets the background rect to be drawn or not

`debugScreen.setDrawBackgroundRect(true);  // draws background rect`

`debugScreen.setDrawBackgroundRect(true);  // will not draw background rect`


### drawFromTop() {
Draw debug info from top of screen (this is the default)

`debugScreen.drawFromTop();   // change display to top of screen
`  

### drawFromBottom() 
Draw debug info from bottom of screen

`debugScreen.drawFromBottom();   // change display to top of screen`  

### setTextSize(newTextSize) 
Change font size. Can't be < 6.
 
`debugScreen.setTextSize();   // change to 14 point`  

### getTextSize() 
Returns font size.
 
`fontSize = debugScreen.getTextSize();`   

### setTextColor()
Sets text color.

`debugScreen.setTextSize(color(255,0,0));   // change to red`  



## License
CC BY: This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use.
