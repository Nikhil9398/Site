const MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/UserInfo";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
let dbase=db.db('UserInfo');
dbase.createCollection("userDetails", function(err, res) {  
if (err) throw err;  
console.log("Collection is created!");  
db.close();  
});  
});
