var a = [9,8,7,6,5,4,3,2,1]
n=a.length
function swap(arr,start,end){
    var temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp

}
// for(var j=0;j<n-1;j++){
// temp=j
// for(var i=j+1;i<n;i++){
//     if(a[temp]>a[i]){
//         temp = i
//     }
// }
// swap(a,temp,j)
// }
// console.log(a)

// for(i=0;i<n;i++){
//     temp=i
//     for(j=i+1;j<n;j++){
//         if(a[temp]>a[j]){
//             temp=j
//         }
//     }
//     swap(a,temp,i)
// }
// console.log(a)

for(var i=0;i<n-1;i++){
    temp=i
   for(var j=i+1;j<n;j++){
      if(a[j]<a[temp]){
        temp=j
      }
   }
   swap(a,temp,i)
}
console.log(a)

