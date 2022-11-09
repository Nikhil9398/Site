var arr = [9,8,7,6,5,4,3,2,1]
function mergesort(arr,lb,ub){
    if(lb<ub){
        var mid = Math.floor((lb+ub)/2)
        mergesort(arr,lb,mid)
        mergesort(arr,mid+1,ub)
        merge(arr,lb,ub,mid)
    }
  

}
function merge(arr,lb,ub,mid){
    i=lb
    j=mid+1
    k=lb
    var b = []
    while(i<=mid && j<=ub){
        if(arr[i]<=arr[j]){
          b[k] = arr[i]
          i++;
          k++;
        }
        else{
          b[k] = arr[j]
          j++;
          k++;
        }
    }
    if(i>mid){
        while(j<=ub){
            b[k] = arr[j]
            j++;
            k++;
        }
    
}
if(j>ub){
    while(i<=mid){
        b[k]=arr[i];
        i++;
        k++;
    }
    
}

for(var z=lb;z<=ub;z++){
    arr[z]=b[z]
}

}
mergesort(arr,0,arr.length-1)
console.log(arr)

