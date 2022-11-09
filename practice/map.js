arr = [1,2,3,4,4,5,5,6,4]

console.log(arr.reduce(function(acc,ele){
    return acc=acc+ele
},0))
arr.forEach((ele)=>{
    console.log(ele+ele)
})
console.log(arr.map(function(num){
    return num=num*10
}))
console.log(arr.map(function(a){
    return a = a+1;
}))






if(null== undefined){
    let a = undefined
    let b = null
    let c = b==a
    console.log(a)
    console.log("null == undefined")
}
 if(null === undefined){
    console.log("null===undefined")
}
if(undefined == null){
    console.log("undefined== null")
}
 if(undefined === null){
    console.log("undefined===null")
}
