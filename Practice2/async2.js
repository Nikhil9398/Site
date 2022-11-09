

function nik(){
    const promise = new Promise((res,rej)=>{
        
        setTimeout(()=>{
            console.log("nikki")
            res()
        },2000)
    })
    return promise;
}
async function maxSatisfyin(){
    
    await nik()
    console.log("nikhil")
    
}
maxSatisfyin()

// nik().then(()=>{
//     return console.log("nikhil")
// })



