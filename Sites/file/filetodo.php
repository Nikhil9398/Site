<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <form method="post" action="stor.php">
        <input type="text" name="name">
        <button>submit</button>
    </form>

    <?php
        $file='file.txt';
        if(file_exists($file)){
           $fileItem = file_get_contents($file);
           $todocollection = unserialize($fileItem);
           for($i=0;$i<sizeof($todocollection);$i++){?>
               <li>
                 <?php echo $todocollection[$i]['caption'];?>
               </li> <?php
           }
        }
    ?>
</body>
</html>