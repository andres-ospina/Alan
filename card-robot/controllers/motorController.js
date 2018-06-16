'use strict'

var board = require('../board');

function adelante(req, res) {

    board.on("ready", function () {
        var led = new five.Led("P1-13");
        led.blink();
    });

}

