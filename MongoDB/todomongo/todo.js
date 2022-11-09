const express = require('express')
var MongoClient = require('mongodb').MongoClient;
var mongo = require('mongodb')
var url = "mongodb://localhost:27017/UserInfo"; 
const app = express()
const port = 3005
var bodyParser = require("body-parser");


app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));


async function conn(){
    var get1 = await MongoClient.connect(url);

    var dbase = get1.db("UserInfo");
    return dbase
}



app.get('/', (req, res) => {
    async function nik() {
     
      const dbase = await conn()
      const result = await dbase.collection("todo").find({}).toArray();

      var complete = result;

      var count;
      const result1 = await dbase
        .collection("todo")
        .find({ complete: false })
        .toArray();
      count = result1.length;
      

      res.render("index", { complete, count });
    }
    nik();
})






app.post("/act",(req,res)=>{

  try{
    async function nik(){
        var todo = {
            name:req.body.caption,
            complete:false
         }
         const dbase = await conn()
         const result= await dbase.collection("todo").insertOne(todo)
         const complete = await dbase.collection("todo").find({}).toArray()
         var count=complete.length        
         res.render("index",{complete,count})
    }
    nik()
  }
  catch(err){
    console.log(err)
  }
                
})
       
app.post("/del/:id", (req,res)=>{
  try{
        async function nik(){
            const dbase = await conn()
            var id = new mongo.ObjectId(req.params.id)
            var query = {_id:id}
          const result = await dbase.collection("todo").deleteOne(query)      
          const result1 = await dbase.collection("todo").find({}).toArray()
          complete=result1
          var count=result1.length
          res.render("index",{result1,count})
        }
        nik()
  }
  catch(err){
    console.log(err)
  }
})

app.post("/toggle/:id",(req,res)=>{
   try{
    async function nik(){
        const dbase = await conn()
        var val = req.body.che
       if(val === 'false'){
        complete=true
       }
       else{
        complete = false
       }
        var id = mongo.ObjectId(req.params.id)
        const data = await dbase.collection("todo").findOneAndUpdate({_id:id},{$set:{complete}})
        const result1 = await dbase.collection("todo").find({}).toArray()
        complete=result1
        var count=result1.length
        res.render("index",{result1,count})
    }
    nik()
    
}
catch(err){
    console.log(err)
}



       
})

app.post('/all',(req,res)=>{
    
        
    try{
        async function nik(){
            const dbase = await conn()
            const complete = await dbase.collection("todo").find({}).toArray()
            const result = await dbase.collection("todo").find({complete:false}).toArray()
                count=result.length
                return res.render("index",{complete,count})
        }
        nik()
    }
    catch(err){
        console.log(err)
    }
                
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

app.listen(port)