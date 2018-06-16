'use strict'

var express=require('express');
var motorController = require('../controllers/motorController');


var api = express.Router();

api.post('/adelante', motorController.adelante);

module.exports=api;