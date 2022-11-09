var mongo = require("mongodb")
var todos = require("../models/model.js")

exports.getTodos= async (req,res,next)=>{
    try{
        const result = await todos.find({})
        res.json({
            todos:result,
            count:result.length
        })
    }
    catch(err){
        next(err)
    }
    
    
    
}
exports.addTodos=async (req,res,next)=>{
    console.log("nikhil")
    const text = req.body.ele
    if(text){
        var add = new todos({text:text,isCompleted:false})
        try{
            await add.save()
            res.status(200).json(add);
        }
        catch(err){
            next(err)
        }
    }
}
exports.toggle=async (req,res,next)=>{
    var id = new mongo.ObjectId(req.params.id)
    var isCompleted = req.body.checked
    
    if(id){
        try{
            const data = await todos.findByIdAndUpdate(id,{isCompleted},{new:true})
            console.log(data);
            res.status(200).json(data)
        }
        catch(err){
            next (err)
        }
    }

    
    
}
exports.deleteTodo = async (req,res,next)=>{
    var id = new mongo.ObjectId(req.params.id)
    if(id){
        try{
            const data = await todos.findByIdAndDelete(id)
            res.status(200).json(data)
        }
        catch(err){
            next(err)
        }
    }
    
    
}
exports.deleteAll = async (req,res,next)=>{
    try{
        const data = await todos.deleteMany({isCompleted:true})
        res.status(200).json(data)
    }
    catch(err){
        next(err)
    }
}


