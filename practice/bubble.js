var a = [8,45,64,3,3,5,5,6,6,6,77,98,4,3,3,2,6,7,5]
n = a.length
function swap(a,i,j){
    var temp = a[i]
    a[i] = a[j]
    a[j] = temp
}
// for(var i=0;i<a.length-1;i++){
//     for(var j=0;j<(a.length-1)-i;j++){
//         if(a[j]>a[j+1]){
//             swap(a,j,j+1)
//         }
//     }
// }
// console.log(a)


for(var i=0;i<n-1;i++){
    for(j=0;j<(n-1)-i;j++){
        if(a[j]>a[j+1]){
            swap(a,j,j+1)
        }
    }
}
console.log(a)













