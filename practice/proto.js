var obj1 = {
    name:"nikhil",
    color:"red"
}
var obj2 = {
    name:"nik"
}
obj1.__proto__.color="white"
console.log(obj1.color)
console.log(obj2.color)
function varma(name){
    this.name = name
}
var obj3 = new varma("nikhil")
var obj4 = new varma("nik")
varma.prototype.color = "red"
console.log(obj3.color)
console.log(obj4.color)