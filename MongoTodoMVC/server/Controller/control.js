var mongo = require("mongodb")
var todos = require("../Model/model.js")

exports.getTodos=(req,res)=>{
    todos.find({},(err,result)=>{
        if(err)throw err
        res.json({
            todos:result,
            count:result.length
        })
    })
}
exports.addTodos=(req,res)=>{
    const text = req.body.ele
    const add = new todos({text:text,isCompleted:false})
    add.save((err)=>{
        if(err) throw err
        res.end();
    })
}
exports.toggle=(req,res)=>{
    var id = new mongo.ObjectId(req.params.id)
    var isCompleted = req.body.checked
    isCompleted=!isCompleted
    console.log(isCompleted)
    todos.findByIdAndUpdate(id,{isCompleted},(err,data)=>{
        if(err)throw err
        res.end();
    })
}
exports.deleteTodo = (req,res)=>{
    var id = new mongo.ObjectId(req.params.id)
    todos.findByIdAndDelete(id,(err,data)=>{
        if(err)throw err
        res.end();
    })
}
exports.deleteAll = (req,res)=>{
    todos.deleteMany({isCompleted:true},(err,data)=>{
        if(err)throw err
        res.end();
    })
}


