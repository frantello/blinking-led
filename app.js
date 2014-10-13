"use strict";
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var pin = 13;
  var led = new five.Led(pin);
  led.strobe(500);
  // Inject led object into REPL session
  this.repl.inject({
    led: led
  });
});