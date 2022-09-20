var express = require("express")
var app = express()
const path = require("path")
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname, "public")));
var session = require("express-session")
app.use(session({secret:"var",resave:"true",saveUninitialized:"true"}))


app.post('/add',(req,res)=>{
    const name = req.body.name
    const email = req.body.email
    req.session.name=name;
    req.session.email=email;
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let error = []
    if(name==="" && email ===""){
        error.push("Name is required")
        error.push("email is required")
        res.render("index4",{error:error})
    }
    else if(name===""){
      error.push("Name is required")
      res.render("index4",{error:error})
    }
    else if(email===""){
        error.push("email is required")
        return res.render("index4",{error:error})
    }
    else if(!email.match(regex)){
        error.push("enter valid email")
        return res.render("index4",{error:error})
    }
    else{
    return res.render("succes",{email:email,name:name})
    }
    
});
app.get('/',(req,res)=>{
    res.render("index4")
});
app.listen(3000,()=>{
    console.log("running..")
})


