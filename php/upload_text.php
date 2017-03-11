<?php
// require codebird
require_once('codebird.php');
$str1 = "FR0qzW6SRyqPJJSZwWjZtvPjJF";
$str2 = "sA0r4V5YvI29XUZo3Eik1TN";
$str3 = "cuzukcCgPtJrxKQ2BRteE33";
$str4 = "qf5xGUvP9SY0Hewxk3sBJ";

\Codebird\Codebird::setConsumerKey("G2lAspSfDZaU9z8FtGM491m8x", $str1 . 'w' . $str2);
$cb = \Codebird\Codebird::getInstance();
$cb->setToken("3398091417-TpmyY5TAL21heQO9hey1ftrIKh0ooDuKCU5aR1i", $str3 . 'B' . $str4);

if(isset($_POST['submit'])) {
	    $line = $_POST['field1'] . "\n";
		$params = array(
		  'status' => 'I wanna ' . $_POST['field1']
		);
		$reply = $cb->statuses_update($params);
	    $file = fopen("lines.txt",  "a+");
	    fwrite($file, $line);
	    fclose($file); 
	    print_r(error_get_last());
		header( 'Location: ../two.php' ) ;
	}
?>