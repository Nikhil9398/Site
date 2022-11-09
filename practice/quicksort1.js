var ele = [1,2,6,43,2,4,5,7,89,6,3,3,222,4,4,5,7,7,443,2,2,2,14,6,]
function swap(arr,start,end){
    var temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp

}
// function partition(arr,left,right){
//     pivot = arr[Math.floor((left+right)/2)]
//     var left1 = left
//     var right1 = right
//   while(left1<=right1){
//       while(arr[left1]<pivot){
//         left1++;
//       }
//       while(pivot<arr[right1]){
//         right1--;
//       }
//       if(left1<=right1){
//         swap(arr,left1,right1)
//         left1++;
//         right1--;
//       }

//   }
//   return left1;
// }

// function quick(arr,left,right){
//     var index
//     if(arr.length>1){
//         index = partition(arr,left,right);
//         if(left<index-1){
//             quick(arr,left,index-1)
//         }
//         if(right>index){
//             quick(arr,index,right)
//         }

//     }
//     return arr
// }
// console.log(quick(ele,0,ele.length-1));

// function partition(arr,lb,ub){
//     start = lb;
//     end = ub;
//     pivot = arr[Math.floor((lb+ub)/2)]
//     while(start<=end){
//         while(pivot>arr[start]){
//             start++
//         }
//         while(pivot<arr[end]){
//             end--
//         }
//         if(start<=end){
//             swap(arr,start,end)
//             start++;
//             end--;
//         }
//     }
//     return start;
// }
// function quick(arr,lb,ub){
//     var index;
//     if(lb<ub){
//         index = partition(arr,lb,ub)
//         if(lb<index-1){
//             quick(arr,lb,index-1)
//         }
//         if(index<ub){
//             quick(arr,index,ub)
//         }
//     }
//     return arr;
// }
// console.log(quick(ele,0,ele.length-1))

// function quick(arr,lb,ub){
//     var index;
//     if(lb<ub){
//         index = partition(arr,lb,ub)
//         if(lb<index-1){
//             quick(arr,lb,index-1)
//         }
//         if(index<ub){
//             quick(arr,index,ub)
//         }
//     }
//     return arr
// }
// function partition(arr,lb,ub){
//     start = lb
//     end = ub
//     pivot = arr[Math.floor((lb+ub)/2)]
//     while(start<=end){
//         while(pivot>arr[start]){
//             start++
//         }
//         while(pivot<arr[end]){
//             end--
//         }
//         if(start<=end){
//             swap(arr,start,end)
//             start++
//             end--
//         }
//     }
//     return start
// }
console.log(quick(ele,0,ele.length-1))

function quick(arr,lb,ub){
    var index 
    if(lb<ub){
        index = partition(arr,lb,ub)
        if(lb<index-1){
            quick(arr,lb,index-1)
        }
        if(index<ub){
            quick(arr,index,ub)
        }
    }
    return arr
}
function partition(arr,lb,ub){
    start = lb
    end = ub
    pivot = arr[Math.floor((lb+ub)/2)]
    while(start<=end){
        while(arr[start]<pivot){
            start++
        }
        while(pivot<arr[end]){
            end--;
        }
        if(start<=end){
            swap(arr,start,end)
                start++;
                end--;
            
        }
    }
    return start;
}