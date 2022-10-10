const express = require('express')
const mongoose = require('mongoose')
const app = express()
var things = require('./router/router')
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',things)
let url = "mongodb://localhost:27017/MainTodo";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
mongoose.pluralize(null)
app.listen(3000)