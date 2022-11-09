
// var a = [7,8,9,2,3,4,5,6,1];
// var n = 9
// var e = 10
// a.sort()
// console.log(a)

// function linear(a,e){
//     for(let i=0;i<9;i++){
//         if(a[i]===e){
//             console.log(i)
//             return;
//         }
//     }
//     console.log("element not found")
// }

// linear(a,e)

// function binary(a,e){
//       start = 0;
//       end = 8;
//      while(start<=end){
//         mid = ((start+end)/2)
//         mid = Math.floor(mid)
//         if(e===a[mid]){
            
//             console.log(mid)
//             return
//         }
//         else if(e<a[mid]){
            
//             end = mid-1
//         }
//         else if(e>a[mid]){
//             start = mid+1
//         }
//      }
//      if(start>end){
//         console.log("element not found")
//      }
// }
// binary(a,e)


var a = [4,7,8,3,2,9,0,6,9,5,3,4,0,8,7,2,0,9,3,8,4,0,0,6,5,8,9,0,2,8,3,4];
var e = 9
var n = a.length;

a.sort()
console.log(a)
function binary(a,l,h,e){
   var mid = Math.floor((l+h)/2)
   if(l<=h){
   if(a[mid]===e){
    console.log("found at"+mid)
    return
   }
   else if(a[mid]<e){
    binary(a,mid+1,h,e)
    return
   }
   else if(a[mid]>e){
    binary(a,l,mid-1,e)
    return
   }
}
console.log("not found")
}
binary(a,0,n-1,e)

