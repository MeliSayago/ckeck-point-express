'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var todos = require('./models/todos');
var router=require('./routes/index')
module.exports = app; // esto es solo para testear mas facil

// acuerdense de agregar su router o cualquier middleware que necesiten aca
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',router)




// el condicional es solo para evitar algun problema de tipo EADDRINUSE con mocha watch + supertest + npm test.
if (!module.parent) app.listen(3000);
