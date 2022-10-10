const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    text : String,
    isCompleted : {
        type : Boolean,
        default : false
    }
},{
    versionKey:false
})
module.exports = mongoose.model("todos",todoSchema);
