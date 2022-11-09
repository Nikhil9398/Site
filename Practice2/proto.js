var obj1 = {
    name : "nikhil",
    color : "white"
}
var obj2 = {
    name:"var"
}
obj1.__proto__.color="blue"
console.log(obj2.color)

function setname(name){
    this.name = name
}
var obj3 = new setname("nikhil")
var obj4 = new setname("varma")
console.log(obj3.name)
console.log(obj4.name)
setname.prototype.color="red"
console.log(obj3.color)