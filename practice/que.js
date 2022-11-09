function fn(){
    for(var i=0;i<=5;i++){
        function my(i){
        setTimeout(function(){
            console.log(i);
        },i*500);
    }
    my(i);
}

}
fn()