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

###constructor();
This will allocate the DebugScreen object

e.g.

var debugScreen = new DebugScreen();

###start();
This will start the timer

simpleTimer.start()

###setTimer(_duration) 
Changes the duration of the timer, also in milliseconds

###expired();
Returns true if the timer is expired, false if it is still running.

###getRemainingTime();
Returns the number of milliseconds left in the timer, zeero if it is expired

###getPercentageRemaining();
Returns percentage remaining in the timer, 0.0 through 1.0. If expired, will return 0.0


###getPercentageElapsed();
Returns percentage elapsed in the timer, 0.0 through 1.0. If expired, will return 1.0


getPercentageRemaining() + getPercentageElapsed() should always be 1.0

## License
CC BY: This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use.
