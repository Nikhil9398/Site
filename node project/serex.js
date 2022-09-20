const express = require("express");
const app = express();
// app.get('/',(req,res)=>{
//     res.send("<h1>nikhil</h1>")
// })
app.use(expressJson());
const products = [
    {
        id:1,
        name:'nikhil'
    },
    {
        id:2,
        name:"surya,"
    }
]
app.get('/products',(req,res)=>{
   res.json(products);
})
app.get('/products/:id',(req,res)=>{
    const newData = products.filter(item=>item.id.toString()===req.params.id)
    return res.json(newData)
})
app.post('/addproducts',(req,res)=>{
    const{id,name}=req.body;
    return res.send()
})
app.listen(3000,()=>{
    console.log("running....")
})