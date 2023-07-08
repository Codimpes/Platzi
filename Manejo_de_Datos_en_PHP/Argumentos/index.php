<?php
function greet($name) {
    return "Hola, $name <br>";
}

echo greet('Jeyson');

// referencias
$course = 'PHP';

function path(&$course) {
    $course = 'Laravel';
    echo $course . "<br>"; //Laravel
}

path($course);
echo $course . "<br>"; //Laravel


// predeterminado
function greet1($name = 'Jeyson') {
    return "Hola, $name <br>";
}

echo greet1();
echo greet1('Eduardo');
