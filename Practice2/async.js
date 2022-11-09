
function nik1(){
     const promise = new Promise((res,rej)=>{
        setTimeout(function(){
            res(5)
        },1000)
     })
     return promise;
     
}
function nik2(){
   return new Promise((res,rej)=>
   {
    setTimeout(function(){
        res(5)
    },1000)
   })
}
async function nik3(){
   await nik1();
   console.log("x")
   await nik2();
   console.log("y")
}
nik3()
nik1().then(()=>{
    console.log("x")
})
.then(()=>{
   return nik2()
})
.then(()=>{
    console.log("y")
})




// function gap(){
 
//     var promise = new Promise((res,rej)=>{
//             setTimeout(()=>{
                
//                 console.log("nikhil")
//                 res()
//             },1000)    
//     })
//     return promise
// }
// function tab(i){
//     gap().then(()=>{
//         return console.log("2 x "+i+" = "+2*i)
//     }) 
// }
// async function print1(){
//     for(let i=1;i<=10;i++){
//         await gap()
//         tab(i)
//     }
// }
// //print1()

// for(let i=1;i<=10;i++){
//     tab(i)
// }
