//var http = require('http');  
var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/UserInfo";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err; 
var query = { name:"c" }; 
let dbase = db.db('UserInfo') 
 
dbase.collection("userDetails").deleteMany(query,function(err, result) {  
if (err) throw err;  
console.log(result);  
db.close();  
});  
});