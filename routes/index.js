'use strict';

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var todos = require('../models/todos');
module.exports = router;

router.get('/users', function(req,res){
	res.send(todos.listPeople())
})

router.get('/users/:name/tasks',function(req,res){
	var name=req.params.name
	res.send(todos.list(name))
})

router.post('/users/:name/:tasks',function(req,res){
	var name=req.params.name
	var content=req.body
	todos.add(name,content)
	res.send(content)
	//no pude cambiar el status a 201

})

router.get('/users/solano/tasks?status=complete',function(req,res){
	console.log("gdg")//No entra a este console.log
})

// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan
