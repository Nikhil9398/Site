const { findById } = require("../MongoTodoMVC/server/models/model")

const todos = require()
exports.addTodo = async (req,res)=>{
    const text = req.body.ele
    const nik = new todos({text:text,isCompleted:false})
    await nik.save()
    res.json(nik)
}
exports.delTodo = async (req,res)=>{
    const id = req.params.id
    const nik = await todos.findByIdAndDelete(id)
    res.json(nik)
}
exports.toggle = async (req,res)=>{
    const id = req.params.id
    const val = req.body.val
    const nik = await todos.findByIdAndUpdate(id,{isCompleted},{new:true})
    res.json(nik)
}



const mongoose = require("mongoose")
const { post } = require("../MongoTodoMVC/server/routes")
const { json } = require("express")
const Schema = new mongoose.Schema({
    text:String,
    isCompleted:{
        type:Boolean,
        default:false
    }
})
module.exports= mongoose.model("todos",Schema)


