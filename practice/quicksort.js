var arr = [2.5734243,4.6984235235,2.493894853,3.323423947];
function swap(arr,start,end){
    var temp = arr[start]
   arr[start]=arr[end];
    arr[end]=temp;
}


function partition(arr,start, end){
    var pivot = arr[Math.floor((start+end)/2)]
    var start1 = start
    var end1 = end
      while(start1<=end1){
       while(arr[start1]<pivot){
        start1++;
       }
       while(arr[end1]>pivot){
        end1--;
       }
       if(start1<=end1){
       swap(arr,start1,end1)
       start1++;
       end1--;
       }

      }
      return start1;
}


function quick(arr, start, end){
    var index;
    if(arr.length >1){
        index = partition(arr,start,end);
        if(start<index-1){
            quick(arr, start, index-1)
        }
        if(end>index){
            quick(arr, index, end)
        }
        
    }
    return arr;
}
var sorte = quick(arr,0,arr.length-1)
console.log(sorte)


// function swap(items, leftIndex, rightIndex){
//     var temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }
// function partition(items, left, right) {
//     var pivot   = items[Math.floor((right + left) / 2)], //middle element
//         i       = left, //left pointer
//         j       = right; //right pointer
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(items, left, right) {
//     var index;
//     if (items.length > 1) {
//         index = partition(items, left, right); //index returned from partition
//         if (left < index - 1) { //more elements on the left side of the pivot
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) { //more elements on the right side of the pivot
//             quickSort(items, index, right);
//         }
//     }
//     return items;
// }
// // first call to quick sort
// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]