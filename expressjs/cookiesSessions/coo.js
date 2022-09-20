
const express = require("express");
const app = express();
var session = require('express-session')
// app.get("/",(req,res)=>{
//     res.cookie("name","Nikhil").send('done');
// })

// app.get("/age",(req,res)=>{
//     res.cookie("age","12").send('done');
// })
// app.get("/del",(req,res)=>{
//     res.clearCookie("age");
//     res.send('deleted')
// })

app.use(session({secret:"nik"}));
app.get('/',(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send("you visited this page "+req.session.page_views+" times")
    }
    else{
        req.session.page_views=1;
        res.send("you visited this page first time");
    }
})



app.listen(3000);
