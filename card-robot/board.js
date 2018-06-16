'use strict'

var Raspi = require("raspi-io");
var five= require('johnny-five');
module.exports= new five.Board({
  io: new Raspi()
});
