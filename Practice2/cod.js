let arr = [1,2,5,3,6,2,8]
let max = arr[0]
let smax = arr[0]
for(var i=1;i<arr.length;i++){
    if(arr[i]>max){
        smax=max
        max=arr[i]
    }
}
console.log(max)
console.log(smax)

const nik = function (){
    
    var n = 12
    console.log("nikhil")
}
nik()
