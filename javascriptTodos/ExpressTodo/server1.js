const express = require('express')
const app = express()
const port = 3000
var bodyParser = require("body-parser");
var task = [ ]
var i;
var complete = [ ]
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', (req, res) => {
  res.render("pages/index1", {task,complete});
});



app.post("/act",(req,res)=>{
  var co = req.body.caption;
  task.push(co)
  
  res.redirect('/');
});
app.post("/removetask",(req,res)=>{
   var compl = req.body.check;
   if(typeof compl === "string"){
   complete.push(compl);
   task.splice(task.indexOf(compl),1);}
   else if(typeof compl === "object"){
    for (var i = 0; i < compl.length; i++) {     
      complete.push(compl[i]);
      task.splice(task.indexOf(compl[i]), 1);
  }
   }
   res.redirect('/');
})
app.post("/del/:id", (req,res)=>{
  
  
  complete.splice(req.params.id,1);
  res.redirect('/');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


