"use strict";
var five = require("johnny-five");
var http = require("http");
var url = require("url");

var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led.RGB({
    pins: {
      red: 10,
      green: 11,
      blue: 9
    }
  });

  board.repl.inject({
    led: led
  });

  led.on();

  var server = http.createServer(function(req, res) {
    var urlParts = url.parse(req.url, true);
    var query = urlParts.query;
    led.color(query.color);
    res.end(query.color);
  });

  var port = 8080;
  server.listen(port);
});
