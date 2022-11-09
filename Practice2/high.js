function operation(callback,val1,val2){
    callback(val1,val2)
}
function add(val1,val2){
    console.log(val1+val2)
}
function sub(val1,val2){
    console.log(val1-val2)
}
operation(add,9,6)