//import mongose
const { beforeEach } = require('mocha')
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/students_list")

//check if it is connected
mongoose.connection
    .once('open', function(){console.log('-----Connected to mongoDB----')})
    .on('error', function(e){
        
    })