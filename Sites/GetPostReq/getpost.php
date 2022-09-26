<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get and Post</title>
</head>
<body>
    <?php
        if(isset($_GET["name"])){
            echo "<p>Hi ".$_GET["name"]."</p>";
        }
    ?>
    
    <form method="get" action="<?php echo $_SERVER["PHP_SELF"]; ?>">
        <label for="inputName">Name:</label>
        <input type="text" name="name" id="inputName">
        <button>Submit</button>
    </form>

    <?php
       if(isset($_POST["name1"])){
        echo "<p>Hi ".$_POST["name1"]."</p>";
       }
    ?>
    <form method="post" action="<?php echo $_SERVER["PHP_SELF"]; ?>">
        <label>Name:</label>
        <input type="text" name="name1">
        <button>Submit</button>
    </form>
</body>
</html>