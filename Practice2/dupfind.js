var nik = new Set()
var a = [4,5,5,6,7]
for(var i=0;i<a.length;i++){
   nik.add(a[i])
}
var ob = {}
for(i=0;i<a.length;i++){
   if(ob[a[i]]){
    console.log(a[i])
   }
   else{
    ob[a[i]]=a[i]
   }

}

var temp = 0
var temp1 = 0
for(var i=1;i<=a.length-1;i++){
    if(a[temp]<a[i]){
        
        temp1=temp
        temp = i
    }
}
console.log(a[temp])