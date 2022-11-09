const express = require("express")
const router = express.Router();
var Todos = require("../controllers/control.js")

router.get('/',Todos.getTodos);
router.post('/add',Todos.addTodos)
router.post('/toggle/:id',Todos.toggle)
router.post('/delete/:id',Todos.deleteTodo)
router.post('/deleteAll',Todos.deleteAll)


module.exports=router