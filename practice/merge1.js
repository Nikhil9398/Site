var a = [8,45,64,3,3,5,5,6,6,6,77,98,4,3,3,2,6,7,5]
// function mergesort(arr,lb,ub){
    
//     if(lb<ub){
//         var mid = Math.floor((lb+ub)/2)
//         mergesort(arr,lb,mid)
//         mergesort(arr,mid+1,ub)
//         merge(arr,lb,ub,mid)
//     }
//     return arr;
// }

// function merge(arr,lb,ub,mid){
//     i=lb
//     j=mid+1
//     k=lb
//     var b=[]
//     while(i<=mid&&j<=ub){
//         if(arr[i]<=arr[j]){
//             b[k]=arr[i]
//             i++;
//             k++;
//         }
//         else{
//             b[k]=arr[j]
//             j++;
//             k++;
//         }
//     }
//     if(i>mid){
//         while(j<=ub){
//             b[k]=arr[j]
//             j++;
//             k++;
//         }
//     }
//     else{
//         while(i<=mid){
//             b[k]=arr[i]
//             i++;
//             k++;
//         }
//     }
//     for(var z = lb;z<=ub;z++){
//         arr[z]= b[z]
//     }
// }
// console.log(mergesort(a,0,a.length-1))]


n= a.length
function mergesort(arr,lb,ub){
    if(lb<ub){
         let mid = Math.floor((lb+ub)/2)
        mergesort(arr,lb,mid)
        mergesort(arr,mid+1,ub)
        merge(arr,lb,mid,ub)
    }
    return arr
}
// function merge(arr,lb,mid,ub){
//     i=lb
//     j=mid+1
//     k=lb
//     b=[]
//     while(i<=mid && j<=ub){
//         if(arr[i]<=arr[j]){
//             b[k]=arr[i]
//             i++
//             k++
//         }
//         else{
//             b[k]=arr[j]
//             k++
//             j++
//         }

    
//     }
//     if(i>mid){
//         while(j<=ub){
//             b[k]=arr[j]
//             k++;
//             j++;
//         }
//     }
//     else{
//         while(i<=mid){
//             b[k]=arr[i]
//             k++;
//             i++;
//         }
//     }
//     for(var i=lb;i<=ub;i++){
//         arr[i]=b[i]
//     }

// }
console.log(mergesort(a,0,a.length-1))
function merge(arr,lb,mid,ub){
    i=lb
    j=mid+1
    k=lb
    b=[]
    while(i<=mid&&j<=ub){
        if(arr[i]<arr[j]){
            b[k]=arr[i]
            i++;
            k++;
        }
        else{
            b[k]=arr[j]
            k++;
            j++;
        }
    }
    if(i>mid){
        while(j<=ub){
            b[k]=arr[j]
            j++
            k++
        }
    }
    if(j>ub){
        while(i<=mid){
            b[k]=arr[i]
            i++
            k++
        }
    }
    for(var i=lb;i<=ub;i++){
        arr[i]=b[i]
    }
}