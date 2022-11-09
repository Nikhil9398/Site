a = [9,8,7,6,5,4,3,2,1]
// for(var i=1;i<a.length;i++){
//     temp = a[i]
//     j=i-1;
//     while(temp<a[j]&&j>=0){
//         a[j+1] = a[j]
//         j--;
//     }
//     a[j+1] = temp

// }
// console.log(a)

n=a.length
for(i=1;i<n;i++){
    temp=a[i]
    j=i-1
    while(j>=0&&a[j]>temp){
        a[j+1]=a[j]
        j--
    }
    a[j+1]=temp
}