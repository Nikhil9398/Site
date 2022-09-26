<?php
$file="file.txt";
if(file_exists($file)){
    $file_item= file_get_contents($file);
    $todocollection = unserialize($file_item);
}
else{
    $todocollection=[];
}

array_push($todocollection,['caption'=>$_POST['name'],'complete'=>false]);
   $file_item = serialize($todocollection);
   file_put_contents($file,$file_item);
   header("Location: {$_SERVER['HTTP_REFERER']}");
?>