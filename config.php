<?php 

/** 
 *
 * Config File
 *
 * @author Jefferson Mexkiv
 * @version 1.0
 *
 */

/** No cache. */

header("Cache-Control: no-cache");
header("Pragma: no-cache");

/** General URL. */

define('URL','http://'.str_replace('/index.php','',$_SERVER['HTTP_HOST'].$_SERVER['SCRIPT_NAME']));

/** END */
