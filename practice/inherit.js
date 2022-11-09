class nik{
    constructor(name){
        this.name=name
    }
    getName(){
        console.log(this.name)
    }
}
class hil extends nik{
    constructor(name,name2){
        super(name)
        this.name2=name2

    }
    getName(){
        console.log(this.name+this.name2)
    }
}
var obj1 = new hil("nik","hil")
obj1.getName()
var obj2 = new nik("nik")
nik.prototype.getName.call(obj1)


