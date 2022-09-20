var http = require('http')
http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("<html><body><h1>this is home page</h1></body></html>")
    }
    else if(req.url==="/student"){
        res.write("<html><body><h1>this is student page</h1></body></html>")
        res.end()
    }
    else if(req.url==="/admin"){
        res.write("<html><body><h1>this is admin page</h1></body></html>")
    }
    else{
        res.end("Invalid request")
    }
}).listen(3000,()=>{
    console.log("running.....");
})