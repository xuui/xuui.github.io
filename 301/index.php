<?php $url="http://xuui.net/".$_SERVER["REQUEST_URI"];
header("HTTP/1.1 301 Moved Permanently");
header("Location:$url");
exit();?>