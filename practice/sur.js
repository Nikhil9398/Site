var arr = [5,6,7,3,4]
var n = arr.length-1
c=3
var k = 0
b=[]
v = arr.length-c
function swap(arr,i,j){
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
for(var i=0;i<v;i++){
  b[i]=arr[i]
}
for(var i=0;i<c;i++){
    swap(arr,i,n-i)
}
for(var i=c;i<=n;i++){
    arr[i]=b[k]
    k++;
}

console.log(arr)