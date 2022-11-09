var express = require('express')
var router=express.Router()

var task=[]
router.get('/',(req,res,next)=>{
    res.render('pages/index3',{task})
})
router.post('/add',(req,res,next)=>{
    var caption = req.body.caption;
    var i = req.body.del;
    
    if(caption){
        task.push(caption);
    }
    else if(i){
        task.splice(i,1);
    }
    
    res.redirect('/')
    
})


module.exports = router;



