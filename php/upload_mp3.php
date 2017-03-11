<?php
	$fileNum = time();
	$mp3 = fopen( $fileNum . '.mp3', 'wb' );
	fwrite( $mp3, $GLOBALS[ 'HTTP_RAW_POST_DATA' ] );
	fclose( $mp3 );
?>