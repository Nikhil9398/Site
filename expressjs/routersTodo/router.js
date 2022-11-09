var express = require('express')
var app = express()
var things = require('./server3')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use('/',things)
app.listen(3000)



