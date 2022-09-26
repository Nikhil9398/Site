<?php
$link = new mysqli("127.0.0.1", "root", "Goldtre9", "mydb");

if($link===false){
    dei("ERROR: Could not connect. " .mysqli_connect_error());
}
else{
    $sql = "CREATE TABLE todo(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        text VARCHAR(30) NOT NULL)";
}
if(mysqli_query($link,$sql)){
    echo "Table created successfully";
}
else{
    echo "ERROR: Could not fetch".mysqli_error($link) ;
}
mysqli_close($link);
?>