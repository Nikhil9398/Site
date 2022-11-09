// var obj1 = {
//     name:"nik",
//     sname:"hil",
//     fullName:function (){
//         console.log(this.name+""+this.sname)
//     }
// }
// var obj2 = {
//     name:"var",
//     sname:"ma"
// }
// // obj1.fullName()
// // obj1.fullName.call(obj2)

// function nik(){

//    this.name="nikhl"
//    this.ni = function (){
//     console.log(this.name)
//    }
    
// }
// const obj3 = new nik();
// //console.log(obj3.name)
// obj3.ni.call(obj2)

class nikhil{
    constructor(){
        this.name="nik"
        this.sname="var"
        this.fullname= function(){
            console.log(this.name+""+this.sname)
        }
    }
    fullname2(){
        console.log(this.name+""+this.sname)
    }
}
var obj = new nikhil()
obj.fullname()
obj.fullname2()

class varma{
    constructor(){
        this.name="var"
        this.sname="nik"
    }
}
var obj1 = new varma()
obj.fullname.apply(obj1)
obj.fullname2.apply(obj1)



//bind

function add(a,b){
    console.log(a+b)
}
var bindadd = add.bind(this,2)
bindadd(3)


function test(){
   
    for(var i=0;i<6;++i){
        function innertest(i){
            setTimeout(function (){
                console.log(i)
            },i*1000)

        }
        innertest(i)
       
    }
}
test()

export{test}


