//import libraries, dependencies
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//create an app using express as a method
const app = express()
//use the body-parse middleware to handle data sent in the body of HTTP
app.use(bodyParser,json())
//Any file in the public folder will be accessible from the root URL
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost/userlogin',{userNewUrlParser: true, useUnifiedTopology: true})