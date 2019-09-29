<?php
//链接数据库
$link = mysql_connect("localhost","root","1234");
mysql_query("set names utf8");
mysql_select_db("test",$link);
?>