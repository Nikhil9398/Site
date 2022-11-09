var http = require('http')
var dt = require('./nik')
http.createServer((req,res)=>{
    res.write(dt.nik());
    res.write("hello")
    res.end();
}).listen(3000, () =>
{
    console.log(" port is running");
});
//console.log('Server running at http://127.0.0.1:8080/')

