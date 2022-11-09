class Nikhil{
    constructor(name){
        var name = name;

        var getName=()=>{
            return this.name
        }
        this.niksetName=(name1)=>{
            name = name1
        }
    }
    
}
var nik = new Nikhil("i")
console.log(nik.getName())

nik.setName("nikhil")
console.log(nik.getName())
nik.setName("kou")
console.log(nik.getName())
