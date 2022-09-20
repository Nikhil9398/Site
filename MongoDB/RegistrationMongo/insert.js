const MongoClient = require('mongodb').MongoClient;
const mongodb=require("mongodb")  
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")


app.post("/add",(req,res)=>{
    var url = "mongodb://localhost:27017/ UserInfo";  
    var userdetails = {
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address
    }
    var url = "mongodb://localhost:27017/ UserInfo";  
    MongoClient.connect(url, function(err, db) {  
    if (err) throw err;  
    let dbase = db.db('UserInfo')
    var myobj = userdetails
    dbase.collection("userDetails").insertOne(myobj, function(err, result) {  
    if (err) throw err;  
    
    db.close();  
    });  
    }); 
    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        let dbase = db.db('UserInfo')
        dbase.collection("userDetails").find({}).toArray(function(err,result){
            if(err) throw err;
            task=result
            console.log(result);  
            res.render('index',{task})
            db.close()
        
        })
    })

    
    //res.redirect('/')
    
})

app.post('/del/:id',(req,res)=>{
    var id1 = req.params.id
    //var email1 = req.body.j
    // if(name1){
    var url = "mongodb://localhost:27017/ UserInfo";  
    MongoClient.connect(url,function(err,db){
        if(err) throw err;
        let dbase = db.db('UserInfo')
        var name1 = new mongodb.ObjectId(id1)
        var query = {_id:name1}
        dbase.collection("userDetails").deleteOne(query,function(err,result){
            if(err) throw err
            dbase.collection("userDetails").find({}).toArray(function(err,result){
                if(err) throw err;
                task=result
                res.render('index',{task})
                db.close()
                
            })
            
        })
    })
})

app.post('/update1/:id',(req,res)=>{
    var url = "mongodb://127.0.0.1:27017/UserInfo";
    var id1 = new mongodb.ObjectId(req.params.id);
    var name1 = req.body.upname;
    var email1 = req.body.upemail;
    var phone1 = req.body.upphone;
    var address1 = req.body.upaddress
MongoClient.connect(url, function(err, db) {

  if (err) throw err;
  let dbo = db.db("UserInfo");
  var myquery = { _id: id1};
  var newvalues = { $set: {_id:id1, name:name1, email: email1, phone:phone1, address:address1 } };
  dbo.collection("userDetails").updateOne(myquery, newvalues, function(err, result) {
    if (err) throw err;
    console.log(result)
    console.log("1 document updated");
    dbo.collection("userDetails").find({}).toArray(function(err,result){
        if(err) throw err;
        task=result
        res.render('index',{task})
        db.close()
    
  });
});
   
})
})

app.post('/update/:task',(req,res)=>{
    var task1 = req.params.task
    var task2 = req.body.i
    var task3 = req.body.j
    var task4 = req.body.k
    var task5 = req.body.l
    console.log(task5)
    res.render('up',{task1,task2,task3,task4,task5})
})



app.get('/',(req,res)=>{
    var url = "mongodb://localhost:27017/ UserInfo";
    MongoClient.connect(url,function(err,db){
    if(err) throw err;
    let dbase = db.db('UserInfo')
    dbase.collection("userDetails").find({}).toArray(function(err,result){
        if(err) throw err;
        var task=result
        db.close()
        res.render('index',{task})
    })
})


    

})


app.listen(3000,()=>{
    console.log("running")
});
