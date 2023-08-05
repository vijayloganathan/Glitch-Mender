<?php

    $code = $_POST['code'];
    $input = $_POST['input'];
    //input save in file
    $inputfilepath = "files/input.txt";
    $inputfile = fopen($inputfilepath, "w");
    fwrite($inputfile, $input);
    fclose($inputfile);

    //code data save in file
    $filename = substr(md5(mt_rand()), 0, 5);
    $codepath = "files/" . $filename . "." . "py"; 
    $codefile = fopen($codepath, "w");
    fwrite($codefile, $code);
    fclose($codefile);

    $commond = "python $codepath 2>&1" . "<" ."files/input.txt";
    $output = shell_exec($commond);
    echo $output;


?>