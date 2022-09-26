
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
      

      
      $a = $_POST['name'];
      $b = "file1.txt";
      
      file_put_contents($b, $a);
      
     
      
      header("Location: {$_SERVER['HTTP_REFERER']}")
    ?>
</body>
</html>