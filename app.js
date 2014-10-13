"use strict";
var Galileo = require("galileo-io");
var board = new Galileo();

board.on("ready", function() {
  var pin = 13;
  var status = 0;
  this.pinMode(pin, this.MODES.OUTPUT);
  setInterval(function() {
    board.digitalWrite(pin, (status ^= 1));
  }, 500);
});