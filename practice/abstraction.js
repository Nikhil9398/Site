// class nik{
//     constructor(name,salary){
//         this.name = name;
//         this.salary = salary;
//         var bonus = 1000;
//         this.getName = function(){
//             console.log(this.name)
//             getFinalSalary()
//         }
//         var getFinalSalary = function(){
//             console.log(salary+bonus)
//         }
//     }
    
// }
// var n = new nik("nikhil", 2000)
// n.getName()
// n.bonus = 10000
// n.getName()

class nik{
    constructor(name,salary){
        this.name=name
        this.salary=salary
        var bonus=1000
        var getFinalSalary = function(){
            console.log(salary+bonus)
        }
        this.getName=function(){
            console.log(this.name)
            getFinalSalary()
        }
    }
    
    
}
var obj = new nik("nik",2000)
obj.getName()
obj.bonus=10000
obj.getName()

