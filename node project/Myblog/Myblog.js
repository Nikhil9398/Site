var http = require('http')
var fs = require('fs');
const { Console } = require('console');
http.createServer((req,res)=>{
    fs.appendFile('Myblog.txt',' I am glad to welcome you on my website devoted to traveling. My name is Uliana, I am 30 years old and as you may guess I am fond of exploring this big and incredible world. I was born in Kiev, Ukraine and I am living and working there between my travels. I am sorry for my English which is far away from perfect, but I hope it will not disturb you much and you will find my articles and stories interesting and informative.',(err,data)=>{
        if(err) throw err;
        
    });
    fs.readFile('Myblog.txt',(err,data)=>{
        if(err)throw err;
        else{
             
            res.write(data);
        }
    })
    
}).listen(3000)

