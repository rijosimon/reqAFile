<? php
$dataFile = "datasource.txt";
$fileHandle = fopen($dataFile, w);
fwrite($fileHandle, $csv);
fclose($fileHandle); 
?>