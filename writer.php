<?php
$dataFile = "datasource.txt";
$csv = $_POST["csvData"];
$fileHandle = fopen($dataFile, w);
fwrite($fileHandle, $csv);
fclose($fileHandle); 
?>