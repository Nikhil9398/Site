<?php
$con = new mysqli("127.0.0.1", "root", "Goldtre9", "mydb");
$message = $con->query("SELECT message FROM todo")->fetch_object()->message;
$con->close();
echo "$message <br/>";
echo "Hello From Sites Folder!";
phpinfo();
?>