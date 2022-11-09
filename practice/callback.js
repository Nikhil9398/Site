function nik(){
    return new Promise((res,rej)=>{
        setTimeout(function(){
            console.log("var")
            res()
        },1000)
        
    })
}
function nik2(){
    return new Promise((res,rej)=>{
        console.log("var1")
        res()
        
    })
}
async function nik3(){
    console.log("nik1111")
   let a = await nik()
   let b = await nik2()
}
nik3()