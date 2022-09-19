const express = require('express')
var MongoClient = require('mongodb').MongoClient;
var mongo = require('mongodb')
var url = "mongodb://localhost:27017/UserInfo"; 
const app = express()
const port = 3005
var bodyParser = require("body-parser");


app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    
    MongoClient.connect(url,function(err,db){
        if(err)throw err;
        let dbase = db.db("UserInfo")
        dbase.collection("todo").find({}).toArray(function(err,result){
            if(err) throw err
            var complete=result
            db.close()
            var count;
            dbase.collection("todo").find({complete:false}).toArray((err,result1)=>{
                if(err) throw err
                count=result1.length
                db.close()
                
                res.render("index",{complete,count})
                
            })
            
           
        })
    })
    

    
});






app.post("/act",(req,res)=>{

  var todo = {
     name:req.body.caption,
     complete:false
  }
  MongoClient.connect(url,function(err,db){
    if(err) throw err;
    let dbase = db.db("UserInfo")
    // dbase.listCollections().next((err, callinfo) => {
    //     if (!callinfo) {
    //       dbase.createCollection("todo", (err, res) => {
    //         if (err) throw err;
    //       });
    //     }
    //   });
    dbase.collection("todo").insertOne(todo,(err,result)=>{
        console.log(result)
        if(err) throw err;
        
       db.close()
    })
    
  
  })
  MongoClient.connect(url,function(err,db){
    if(err) throw err;
    let dbase = db.db('UserInfo')
    dbase.collection("todo").find({}).toArray(function(err,result){
        if(err) throw err;
        console.log(result)
        complete=result
        var count;
            dbase.collection("todo").find({complete:false}).toArray((err,result1)=>{
                if(err) throw err
                count=result1.length
                db.close()
                
                res.render("index",{complete,count})
                
            })
       
       
    
    })
})
});

app.post("/del/:id", (req,res)=>{
  MongoClient.connect(url,(err,db)=>{
    if(err) throw err
    let dbase = db.db("UserInfo")
    var id = new mongo.ObjectId(req.params.id)
    var query = {_id:id}
    dbase.collection("todo").deleteOne(query,(err,result)=>{
        if(err) throw err;
        dbase.collection("todo").find({}).toArray((err,result)=>{
            if(err) throw err;
            var complete = result
            var count;
            dbase.collection("todo").find({complete:false}).toArray((err,result1)=>{
                if(err) throw err
                count=result1.length
                db.close()
                
                res.render("index",{complete,count})
                
            })
        })
    })
    
  })
})

app.post("/toggle/:id",(req,res)=>{
   
   MongoClient.connect(url,(err,db)=>{
    if(err)throw err
    let dbase = db.db("UserInfo") 
    var val = req.body.che
    console.log(val)
   
   if(val === 'false'){
    var id = mongo.ObjectId(req.params.id)
    complete=true
    dbase.collection("todo").findOneAndUpdate({_id:id},{$set:{complete}},(err,data)=>{
        if(err) throw err;
        console.log(data)
        dbase.collection("todo").find({}).toArray((err,result)=>{
            if(err) throw err
            
            complete=result
            db.close()
            var count;
            dbase.collection("todo").find({complete:false}).toArray((err,result1)=>{
                if(err) throw err
                count=result1.length
                db.close()
                
                res.render("index",{complete,count})
                
            })
            
        })
    })
   }
   else{ 
    var id = mongo.ObjectId(req.params.id)
        let complete=false
        console.log(id)
        dbase.collection("todo").findOneAndUpdate({_id:id},{$set:{complete}},(err,data)=>{
            if(err) throw err
            //console.log(data)
            dbase.collection("todo").find({}).toArray((err,result)=>{
                if(err) throw err
                complete=result
                db.close()
                var count;
            dbase.collection("todo").find({complete:false}).toArray((err,result1)=>{
                if(err) throw err
                count=result1.length
                db.close()
                
                res.render("index",{complete,count})
                
            })
            })
        })
       }
   
   
   })
})

app.post('/all',(req,res)=>{
    MongoClient.connect(url,(err,db)=>{
        if(err) throw err
        let dbase = db.db("UserInfo")
        dbase.collection("todo").find({}).toArray((err,result)=>{
            if(err)throw err
            complete=result
            db.close()
            var count;
            dbase.collection("todo").find({complete:false}).toArray((err,result1)=>{
                if(err) throw err
                count=result1.length
                db.close()
                return res.render("index",{complete,count})
                
            })
            
        })
    })
})
app.post('/active',(req,res)=>{
    MongoClient.connect(url,(err,db)=>{
        if(err) throw err
        let dbase = db.db("UserInfo")
        dbase.collection("todo").find({complete:false}).toArray((err,result)=>{
            if(err) throw err
            complete=result

            db.close()
            var count;
            dbase.collection("todo").find({complete:false}).toArray((err,result1)=>{
                if(err) throw err
                count=result1.length
                db.close()
                return res.render("index",{complete,count})
                
            })
            
        })
    })
})

app.post('/completed',(req,res)=>{
    MongoClient.connect(url,(err,db)=>{
        if(err) throw err
        let dbase = db.db("UserInfo")
        dbase.collection("todo").find({complete:true}).toArray((err,result)=>{
            if(err) throw err
            complete=result
            db.close()
            var count;
            dbase.collection("todo").find({complete:false}).toArray((err,result1)=>{
                if(err) throw err
                count=result1.length
                db.close()
                return res.render("index",{complete,count})
                
            })
        })
    })
})

app.post('/clear',(req,res)=>{
    MongoClient.connect(url,(err,db)=>{
        if(err) throw err
        let dbase = db.db("UserInfo")
        dbase.collection("todo").deleteMany({complete:true},(err,result)=>{
             if(err) throw err;
             dbase.collection("todo").find({}).toArray((err,result)=>{
                if(err) throw err;
                complete=result
                db.close()
                var count;
                dbase.collection("todo").find({complete:false}).toArray((err,result1)=>{
                    if(err) throw err
                    count=result1.length
                    db.close()
                    return res.render("index",{complete,count})
                    
                })
            })
        })
        
    })
})

app.post('/update/:id',(req,res)=>{
    var id = mongo.ObjectId(req.params.id)
    var name = req.body.up;
    MongoClient.connect(url,(err,db)=>{
        let dbase = db.db("UserInfo")
        dbase.collection("todo").findOneAndUpdate({_id:id},{$set:{name:name}},(err,result)=>{
            if(err) throw err;
            dbase.collection("todo").find({}).toArray((err,result)=>{
                if(err) throw err;
                complete=result;
                var count;
                dbase.collection("todo").find({complete:false}).toArray((err,result1)=>{
                    if(err) throw err
                    count=result1.length
                    db.close()
                    return res.render("index",{complete,count})
                    
                })
            })
        })
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});