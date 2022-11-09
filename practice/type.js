var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
 
    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
 
    console.log(removeDuplicates(arr));

    function nik(arr){
        return arr.filter((item,index)=>{
            return index === arr.indexOf(item);
        })
    }
    console.log(nik(arr))