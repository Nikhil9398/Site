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

    const text = req.body.ele
    var add = new todos({text:text,isCompleted:false})
    try{
        await add.save()
    }
    catch(err){
        next(err)
    }
    res.status(200).json(add);
    
}
exports.toggle=async (req,res,next)=>{
    try{
        var id = new mongo.ObjectId(req.params.id)
        var isCompleted = req.body.checked
        // console.log(isCompleted);
        //isCompleted = !isCompleted;
        const data = await todos.findByIdAndUpdate(id,{isCompleted},{new:true})
        console.log(data);
        res.status(200).json(data)
    
    }
    catch(err){
        next (err)
    }
    
}
exports.deleteTodo = async (req,res,next)=>{
    try{
        var id = new mongo.ObjectId(req.params.id)
        const data = await todos.findByIdAndDelete(id)
        res.status(200).json(data)
    }
    catch(err){
        next(err)
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


