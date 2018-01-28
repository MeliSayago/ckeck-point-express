'use strict';

var tasks = {}; // acá vamos a guardar nuestras personas y tareas

module.exports = {
  reset: function () {
    tasks = {}; // esta función ya esta armada :D
  },
  // ==== COMPLETEN LAS SIGUIENTES FUNCIONES (vean los test de `model.js`) =====
  listPeople: function () {
    // devuelve un arreglo de personas con tareas
    var arr=[];
    for(var name in tasks){
      arr.push(name)
    }
    //console.log(arr)
    return arr;
  },
  add: function (name, task) {
    // guarda una tarea para una persona en particular
    var array=[task];
    if(this.size(tasks)>0){
      if(this.match(name,tasks)){
        if(this.matchComplete(task)){
          task.complete=false
        }
        tasks[name].push(task)
      }else{
        if(this.matchComplete(task)){
          task.complete=false
        }
        tasks[name]=[task]
      }
    }else{
      if(this.matchComplete(task)){
          task.complete=false
        }
      tasks[name]=[task]
    }
    return array;
  },
  list: function(name){
    return tasks[name]
  },
  size:function(obj){
    var size=0;
    for(var i in obj){
      size++
    }
  return size;
  },
  match: function(name,obj){
    for(var key in obj){
      if(key===name){
        return name
      }
    }
    return false
  },
  matchComplete:function(obj){
    for(var key in obj){
      if(!tasks[key][1]){
        return false
      }
    }
  return true
  },
  matchComplete: function(task){
   // console.log(task)
    if(!task.complete){
      return true
    }
  return false
  },
  complete:function(name,position){
    if(tasks[name][position].complete===false){
      tasks[name][position].complete=true
    }else{
      tasks[name][position].complete=true
    }
  },
  remove:function(name,position){
    for(var key in tasks){
      if(key===name){
        for(var i=position;i<tasks[name].length;i++){
            tasks[name][i]=tasks[name][i+1]
          }
        }
      }
    var size=tasks[name].length-1
    tasks[name]=tasks[name].slice(null,size)
    },
};
